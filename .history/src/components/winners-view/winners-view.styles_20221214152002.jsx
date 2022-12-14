import styled from 'styled-components';


export const WinnersViewContainer = styled.div`
    column-count: ${props => props.columns ? props.columns : 1};
    column-gap: 40px;
    column-span: all;
    column-fill: auto;
    text-align: ${props => props.columns===3?'left':'center'};
    width:80%;
    height: 200px;
    border: 1px solid white;
    border-radius: 25px;
    position: absolute;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 35%;
    margin-left: 10%;
    background-color: white;
    opacity: .5;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    color: #FFCC00;
    /* color: #CB2b92; */
    /* color: #FF1696; */

`;