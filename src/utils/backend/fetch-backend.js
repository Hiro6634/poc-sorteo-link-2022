let count = 0;
let TimerId;
export const startWorking = () => {
    TimerId = setTimeout(()=>{
        console.log("TIMMER: " +count++);
    }, 1000);
}
export const endWorking = () => {
    clearTimeout(TimerId);
}