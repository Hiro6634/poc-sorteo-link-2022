import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import { Sleep } from '../../utils/utils';
import WinnersView from '../../components/winners-view/winners-view.component';

class ItemProvider {
    _queue = [];
    _isBusy = false;

    constructor(){
        this._queue = [];
        this._isBusy = false;
    }
    test(value){
        this._queue.push(value);
    }
    enqueue(job) {
        console.log("Enqueing", job);

        new Promise((resolve, reject) => {
            this._queue.push({ job, resolve, reject });
            console.log("ENQUEUE QUEUE", this._queue);
        });
        // we'll add a nextJob function and call it when we enqueue a new job; we'll use _isBusy to make sure we're executing the next job sequentially
        this.nextJob();
    }

    nextJob(){
        if(this._isBusy) return;
        console.log("QUEUE:", this._queue);
        let next = this._queue.shift();
        console.log("NEXT:", next);
        if(next){
            this._isBusy=true;
            next
                .job()
                .then((value)=>{
                    console.log(value);
                    next.resolve(value);
                    this._isBusy=false;
                    this.nextJob();
                })
                .catch((error)=>{
                    console.error(error);
                    next.reject(error);
                    this._isBusy=false;
                    this.nextJob();
                });
        }
    }
}

const Test = () => {
    const {raffles} = useContext(RaffleContext);
    const [isBusy, setIsBusy] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [winnersList, setWinnersList] = useState([]);
    const [columns, setColumns] = useState(1);
    const [reward, setReward] = useState();
    const [placa, setPlaca] = useState(false);

    const process =  async (raffle) => {
        setIsBusy(true);
        console.log("...");
        setPlaca(true);
        const winners = raffle.winners;
        const winTimer = (raffle.tiempos.duracion / raffle.ganadores) * 1000;
        await Sleep(raffle.tiempos.placa * 1000);
        setPlaca(false);
        setColumns(raffle.columnas);
        setWinnersList([]);
        setReward(raffle.premio);
        console.log("SORTEO: "+ raffle.premio);
        await Sleep(raffle.tiempos.pre * 1000);
        const raffleInterval = setInterval(async ()=>{
            const winner = winners.shift();
            if(winner){
                console.log(winner.apellido + ", "+ winner.nombre);
                addWinner(winner);
            } else {
                clearInterval(raffleInterval);
                await Sleep(raffle.tiempos.pre * 1000);
                setIsBusy(false);
            }
        }, winTimer);
    }

    const handleTest = () => {
        console.log("START");
        setIsRunning(true);
        // const raffle = raffles[0];
        // const winners = raffle.winners;
        // setColumns( raffle.columnas);
        // setReward(raffle.premio);
        // console.log("RAFFLE", raffle);
        // console.log("COLUMNS:" + columns);
        // console.log("WINNERS LIST", winnersList);
        // const myInt = setInterval(()=>{
        //     const winner = winners.shift();
        //     if(winner){
        //         addWinner(winner);
        //     } else {
        //         clearInterval(myInt);
        //     }

        // }, 2000);
    }

    const addWinner = (winner) => {
        setWinnersList(old=>[...old, winner]);
    }

    useEffect(()=>{
        console.log("ISBUSY:" + isBusy);
        if( !isRunning) return;
        if(!isBusy){
            const raffle = raffles.shift();
            if(raffle){
                process(raffle);
            } else {
                setIsRunning(false);
            }
        }
    },[isBusy, isRunning, winnersList]);

    return(
        <div>
            <button onClick={handleTest}>TEST</button>
            <button onClick={()=>{setWinnersList([])}}>CLEAR</button>
            <div>
            {
                placa?(<h1>PLACA</h1>):( 
                    <div>
                        <h2>{reward}</h2>
                        <WinnersView winnersList={winnersList} columns={columns}/>
                    </div>
            )
            }
            </div>    
        </div>
    );
}

export default Test;