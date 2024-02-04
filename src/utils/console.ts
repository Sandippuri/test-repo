export function log<T>(message:T) {
    const isDebug = true;
    if(isDebug){
      console.log(message);
    }
  }