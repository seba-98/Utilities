import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const [state, setState] = useState({data:null, loading: true, error:null});
     const isMounted = useRef(true)

     useEffect(() => { 
        return () => {
            isMounted.current=false;

            setState({
                data:null, 
                loading: true, 
                error:null
            })
        }
     }, [])

    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{

            if(isMounted.current){
                setState({
                    data:data, 
                    loading: false, 
                    error:null
                })
            }
        })
        .catch(()=>{
            setState({data:null, loading: false, error:'No se pudo cargar'})
        })
    }, [url])


    return state;
    
}

