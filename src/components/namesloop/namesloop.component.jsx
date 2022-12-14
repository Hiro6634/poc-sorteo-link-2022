import { useContext, useEffect } from 'react';

import TextLoop from 'react-text-loop';

import { LoopNamesContext } from '../../context/loopnames.context';

import { 
    NameLoopContainer 
} from './namesloop.style';

const NamesLoop = ({interval=200}) => {
    const {loopNames} = useContext(LoopNamesContext);
    return(
        <NameLoopContainer>
            <TextLoop interval={interval}>
                {
                    loopNames.length ? (loopNames.map((employee)=>(
                        <span key={employee.id}>{employee.Apellido}, {employee.Nombre}</span>
                    ))):(
                        null
                    )}
            </TextLoop>
        </NameLoopContainer>
    );
}

export default NamesLoop;