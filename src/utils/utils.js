export const Sleep = (time) => {
    return new Promise((resolve)=>setTimeout(resolve,time))
}

export function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

export function arrayRotate(arr, n) {
    console.log("Start.. "+ n);
    for(let x=0; x<n; x++){
        arr.push(arr.shift());
    }
    return arr;
}