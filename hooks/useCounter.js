import { useState } from "react"

export const useCounter = (initialState=10) => {

    const [counter, setCounter] = useState(initialState)

    const increment= () => setCounter(c=>c+1);
    const decrement= () => setCounter(c=>c>1? c-1 : 0);    
    const reset= () =>setCounter(initialState);

    return {counter, increment, decrement, reset};
    
   
}


