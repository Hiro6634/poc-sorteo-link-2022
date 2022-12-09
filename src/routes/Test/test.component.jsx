import { useEffect, useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count +1);
        }, 1000);
    });

    return(
        <div>
            <h1>Test {count}</h1>
        </div>
    );
}

export default Test;