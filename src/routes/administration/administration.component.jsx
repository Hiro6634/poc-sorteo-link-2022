import { func } from '../../utils/iofiles/xml-load-file';

import { useContext } from 'react';
import { SorteoContext } from '../../context/sorteos.context';

const Administration = () => {
    const {sorteos} = useContext(SorteoContext);

    return(
        <div>
            <h1>Administration Page</h1>
                <div style={{color: 'white'}}>
                {
                    sorteos.map((sorteo)=>(
                        <p key={sorteo.id}>{sorteo.premio}</p>
                    )
                )}
            </div>
                    </div>
    );


}


export default Administration;