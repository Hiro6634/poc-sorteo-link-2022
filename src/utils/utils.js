export const Sleep = (time) => {
    return new Promise((resolve)=>setTimeout(resolve,time))
}

export function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}
