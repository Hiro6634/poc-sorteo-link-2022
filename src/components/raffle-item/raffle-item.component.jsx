import { useContext } from 'react';
import { RaffleContext } from '../../context/raffles.context';
 
const RaffleItem = ({reward, maxWinners, state}) => {
    const { timerId, setTimerId,running, setRunning} = useContext(RaffleContext);
    let count = 0;
    const handleLaunchButton = () => {
        const value = !running.running;
        setRunning({running: value})
        let url = new URL('http://localhost:3001/api/raffle/running');
        url.search = new URLSearchParams({
            running: value
        });
        
        const fetchRunning = () => {
            fetch('http://localhost:3001/api/raffle/running', {
                method: "GET"})
                .then((response => response.json()))
                .then((data)=>{
                    const value = data.mensaje;
                    if(value !== running.running){
                        setRunning({running: value});
                    }
    
                })
                .catch((err)=> {
                    console.log(err.message);
                });
        }

        fetch(url, {method:"PUT"})
            .then((response => response.json()))
            .then((data)=>{
                console.log(data);
            })
            .catch((err)=> {
                console.log(err.message);
            });
        if(value === true){
            const id = setInterval(()=>{
                fetchRunning();                
            },1000);
            setTimerId({timerId:id});
        } else {
            clearInterval(timerId.timerId);
        }
    }
    return(
        <div>
            |
            <span>{reward}</span>
            |
            <span>{maxWinners}</span>
            |
            <span>{state}</span>
            |
            <button onClick={handleLaunchButton}>LANZAR SORTEO</button>
        </div>
    );
}

export default RaffleItem;