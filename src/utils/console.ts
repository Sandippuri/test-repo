export function log<T>(message:T) {
    let isDebug = true;
    if(isDebug){
      console.log(message);
    }
  }