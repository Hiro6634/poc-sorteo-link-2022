import styled from 'styled-components';


export const WinnersViewContainer = styled.div`
    column-count: ${props => props.columns ? props.columns : 1};
    column-gap: 40px;
    column-span: none;
    column-fill: auto;
    text-align: ${props => props.columns===3?'left':'center'};
    width:80%;
    height: 200px;
    border: 1px solid white;
    border-radius: 25px;
    position: absolute;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: ${props => props.columns === 3 ? '30px' : '60px'};
    margin-top: 35%;
    margin-left: 10%;
    background-color: white;
    opacity: 50%;
    font-size: 20px;
    font-weight: bold;
    line-height: 2;
    color: blue;

`;