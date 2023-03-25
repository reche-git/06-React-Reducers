import { useReducer } from "react";

const initialState = { counter: 0 };

const init = (initialState) => {
  return {
    counter: initialState.counter + 100
  }
}

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { counter: state.counter + 1 };
    case TYPES.INCREMENT_5:
      return { counter: state.counter + action.payload };
    case TYPES.DECREMENT:
      return { counter: state.counter - 1 };
    case TYPES.DECREMENT_5:
      return { counter: state.counter - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  //   const add = () => setCount(count + 1);
  const add = () => dispatch({ type: TYPES.INCREMENT });
  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  //   const subtract = () => setCount(count - 1);
  const subtract = () => dispatch({ type: TYPES.DECREMENT });
  const subtract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter</h2>
      <nav>
        <button onClick={subtract}>-</button>
        <button onClick={subtract5}>-5</button>
        <button onClick={reset}>0</button>
        <button onClick={add}>+</button>
        <button onClick={add5}>+5</button>
      </nav>
      <h3>{state.counter}</h3>
    </div>
  );
};

export default Counter;
