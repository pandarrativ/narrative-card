import "./card-homepage.css"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "../../reducers/exampleSlicer";

function CardHomePage() {
    const count = useSelector(state => state.example.value)
    const dispatch = useDispatch();


    return ( 
        <div className="card-homepage">
            <h1 className="text-3xl font-bold underline text-center">
                Hello, this is styled by Tailwind css!
            </h1>

            <button className="btn btn-neutral">Button styled by DaisyUI & Taildwind</button>

            <button>
                button with Heroicon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
            </button>

            <div>{`Current Count ${count}`}</div>
            <button onClick={() => dispatch(increment())}>Add 1</button>
            <button onClick={() => dispatch(decrement())}>De 1</button>
            <button onClick={() => dispatch(incrementByAmount(3))}>Add 3</button>


        </div>
     );
}

export default CardHomePage;