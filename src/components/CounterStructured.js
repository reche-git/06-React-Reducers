import { useReducer } from "react";
import { TYPES } from "../actions/counterActions";
import { counterInit, counterInitialState, CounterReducer } from "../reducers/counterReducer";

const CounterStructured = () => {
  const [state, dispatch] = useReducer(CounterReducer, counterInitialState, counterInit);

  const add = () => dispatch({ type: TYPES.INCREMENT });

  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const subtract = () => dispatch({ type: TYPES.DECREMENT });

  const subtract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="key-title">Counter with Folder Structure</h2>
      <nav className="keys">
        <button onClick={subtract5} className="key__button">
          -5
        </button>
        <button onClick={subtract} className="key__button">
          -
        </button>
        <button onClick={reset} className="key__button">
          0
        </button>
        <button onClick={add} className="key__button">
          +
        </button>
        <button onClick={add5} className="key__button">
          +5
        </button>
      </nav>
      <h3 className="key-counter">{state.counter}</h3>
    </div>
  );
};

export default CounterStructured;
