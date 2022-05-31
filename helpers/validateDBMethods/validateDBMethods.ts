import type { NextApiResponse } from 'next'

type data = {message:string};
type func= Promise<void>


const catchBDErrors=async(func:func, res:NextApiResponse<data>)=>{

    try {
        await func
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error en la base de datos, estamos trabajando en ello'})
    }

}

export default catchBDErrors;