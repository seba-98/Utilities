
export const cartReducer = (state=[], action) => {


    switch (action.type) {

        case 'add':{
            const newItem= action.payload;
            let itemInCart = state.find(item=>item.id === newItem.id); //itemIncart es solo para iniciar el operador ternario
            
            return itemInCart ?  //si existe itemInCart hacemos el map, para devolver de nuevo el item con la propiedad cantidad incrementada +1
            
            state.map((item)=>                                
                item.id === newItem.id 
                ?                                           //Cuando coincide el id
                {...item, cantidad: item.cantidad+1} // devolvemos un objeto igual pero con la propiedad cantidad incrementada
                :
                item                                   //cuando no coincide, solo devolvemos el objeto
            )
            :
            [...state,{         //si itemInCart no existe en el estado, devolvemos el array con su contenido, mas 
                ...newItem,     //el nuevo item con la propiedad cantidad inicializada en 1 unidad
                cantidad: 1
            }]
        }


        case 'remove':{

            let itemDelete=state.find(item=> item.id === action.payload.id) //Obtenemos el item a eliminar

            return itemDelete.cantidad > 1 ?            //SI LA CANTIDAD ES MAYOR A 1

            state.map((item)=>
                item.id === action.payload.id  ?            
                   {...item, cantidad: item.cantidad-1}         //cuando lo encontramos en el map, decrementamos una unidad
                :                                           
                item                                         //cuando no lo encontramos devolvemos el item
            )
            :
            state.filter(item=>item.id !== action.payload.id)  //AHORA, SI ES MENOR O IGUAL A 1, FILTRAMOS DEVOLVIENDO SOLO LOS ITEMS QUE
                                                               // NO COINCIDAN CON EL ID, YA QUE ESTAMOS BORRANDO EL ITEM DEL CARRITO
        }

    default:
        return state        
    }  


}

