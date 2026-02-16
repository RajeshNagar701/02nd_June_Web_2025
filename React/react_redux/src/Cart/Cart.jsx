import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from './Image';
import { change, Hide, Minus, Plus, Show, Toggle } from '../app/cartSlice';

function Cart() {

    // by useSelecter we can access all slice state
    const { number, name, Isimage } = useSelector((state) => state.cart);

    // by useDispatch we can access all slice actions
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(change())}>Change</button>
            <h1>Hi my name is : {name}</h1>

            <hr />

            <button onClick={()=>dispatch(Plus())}>+</button>
            <h1>{number}</h1>
            <button onClick={()=>dispatch(Minus())}>-</button>

            <hr />
            <br />
            <button onClick={()=>dispatch(Hide())}>Hide</button>
            <button onClick={()=>dispatch(Show())}>Show</button>
            <button onClick={()=>dispatch(Toggle())}>Toggle</button>

            {
                Isimage ? <Image /> : null
            }
            <br />
            <br />
            <br />
        </div>
    )
}

export default Cart