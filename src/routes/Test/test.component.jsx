import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../context/raffles.context';
import { Sleep } from '../../utils/utils';

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
    const [queue, setQueue] = useState([]);
    const [isBusy, setIsBusy] = useState(false);

    const enqueue = (job) => {
        setQueue(old => [...old, {job}]);
    }
    
    const run = () => {
        let next = queue.shift();
        console.log("NEXT", next);
        if(next){
            if( isBusy)
            new Promise((resolve, reject)=>{
                next.job();
                console.log("Job Ended...");
                run();
            }).then((value)=>{
                run();
            });
        }
    }
    
    const handleShowQueue = () => {
        console.log("QUEUE", queue);
    }

    const handleTest = () => {
        enqueue(()=>{
            while(!isBusy);
            setIsBusy(true);
            console.log("First Task");
            setTimeout(()=>{
                console.log("First Task Ending...");
                setIsBusy(false);
            },5000);
        });
        enqueue(()=>{
            while(!isBusy);
            setIsBusy(true);
            console.log("Second Task");
            setIsBusy(false);

        });
        enqueue(()=>{
            while(!isBusy);
            setIsBusy(true);
            console.log("Third Task");
            setIsBusy(false);
        });


    }

    const transactionStatus = (seconds) => new Promise((resolve, reject)=>{
        console.log("Start Task ", seconds);
        setTimeout(()=>{
            resolve('Your Transaction is successful ' + seconds);
        }, seconds * 1000);
    });

    function PromiseQueue (tasks = [], concurrentCount = 1) {
        let Total = tasks.length;
        let todo = tasks;
        let running = [];
        let complete = [];
        let count = concurrentCount;

        const runNext = () => {
            return ((running.length < count) && todo.length);
        }

        const run = () => {
            const promise = todo.shift();
            promise.then((value)=>{
                console.log("WTF:", value);
            });
        }
    }

    const handleTest3 = () => {
        const itemProvider = new ItemProvider();

        itemProvider.enqueue(()=>{
            console.log("First Task Starting...");
            setTimeout(()=>{
                console.log("First Task Ending...");
            }, 5000);
        });
        // itemProvider.enqueue(()=>{
        //     console.log("Second Task Starting...");
        //     setTimeout(()=>{
        //         console.log("Second Task Ending...");
        //     }, 2000);
        // });
        // itemProvider.enqueue(()=>{
        //     console.log("Third Task Starting...");
        //     setTimeout(()=>{
        //         console.log("Third Task Ending...");
        //     }, 6000);
        // });
    }

    return(
        <div>
            <button onClick={handleTest3}>TEST</button>
            <button onClick={handleShowQueue}>SHOW</button>
            <button onClick={run}>RUN</button>
        </div>
    );
}

export default Test;