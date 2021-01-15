export const increment = (nr) =>{
    return{
        type:'INCREMENT',
        data:nr
    }
}

export const decrement = () =>{
    return{
        type:'DECREMENT'
    }
}