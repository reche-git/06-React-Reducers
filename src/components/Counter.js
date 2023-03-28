import { useReducer } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import joke from "../assets/joke.png";
import joke2 from "../assets/joke2.png";

const initialState = { counter: 0 };

const init = (initialState) => {
  return {
    counter: initialState.counter + 100,
  };
};

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
  const [isOpen, openModal, closeModal] = useModal(false);
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
    <>
      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>
            What can I find in this{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/components/Counter.js"
              rel="noreferrer"
              target="_blank"
            >
              component
            </a>
            ?
          </h3>
          <ul>
            <li>The initial state of our counter as "initialState".</li>
            <li>The initializer function that adds 100 to the state.</li>
            <li>
              An object named "TYPES" with the type of actions that are
              available.
            </li>
            <li>The function reducer that holds the logic of our state.</li>
            <li>The counter interface.</li>
          </ul>
          <p>Try to get to 37 and see what happens! Or maybe -27...</p>
        </div>
      </Modal>
      {/* Modal */}

      <div className="counter-container">
        {state.counter === -27 && (
          <img src={joke2} className="jokeImg2" alt="-27!" />
        )}
        <button className="btnModal" onClick={openModal}>
          <h2 className="key-title">Counter</h2>
        </button>
        <div className="counter purple">
          <div className="counter-icon"></div>
          <div className="counter-content">
            <h3>Let's count!</h3>
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
            <h3 className="counter-value">{state.counter}</h3>
          </div>
        </div>
        {state.counter === 37 && (
          <img src={joke} className="jokeImg" alt="37!" />
        )}
      </div>
    </>
  );
};

export default Counter;
