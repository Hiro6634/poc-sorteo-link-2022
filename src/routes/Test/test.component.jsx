import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import { Sleep } from '../../utils/utils';
import WinnersView from '../../components/winners-view/winners-view.component';
import styled from 'styled-components';

const WinListContainer = styled.div`
    column-count: ${props => props.columns ? props.columns : 1};
    column-gap: 40px;
    column-span: none;
    column-fill: auto;
    font-size: 20px;
    font-weight: bold;
    line-height: 2;
    color: blue;
    background-color: white;
    opacity: 50%;
    /* border: 1px solid white;
    border-radius: 25px; */
    /* height: 140px;
    width: 60%;
    top:30%;
    left: 20%;
    position:absolute; */
`;

const Container = styled.div`
    width:80%;
    column-fill: auto;
    height: 200px;
    border: 1px solid white;
    border-radius: 25px;
    position: absolute;
    padding: 30px 10px;
    margin-top: 35%;
    margin-left: 10%;
    background-color: white;
    opacity: 50%;
`;
const Test = () => {
    const [elements] = useState([
        "UNO",
        "DOS",
        "TRES",
        "CUATRO",
        "CINCO",
        "SEIS",
        "SIETE",
        "OCHO",
        "NUEVE"
    ]);
    const [testlist, setTestlist] = useState([]);
    const handleAddElement = () => {
        const value = elements.shift();
        if(value){
            setTestlist(last=>[...last, value]);
        }
    }

    return(
        <div>
            <button onClick={handleAddElement}>ADD ELEMENT</button>
            <Container>
                <WinListContainer columns={3}>
                {
                    testlist.map((element)=>{
                        return(<div>{element}</div>)
                    })
                }
                </WinListContainer>
            </Container>
        </div>
    );
}

export default Test;