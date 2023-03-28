import { useReducer } from "react";
import { TYPES } from "../actions/counterActions";
import { useModal } from "../hooks/useModal";
import {
  counterInit,
  counterInitialState,
  CounterReducer,
} from "../reducers/counterReducer";
import Modal from "./Modal";

const CounterStructured = () => {
  const [isOpen, openModal, closeModal] = useModal(false);

  const [state, dispatch] = useReducer(
    CounterReducer,
    counterInitialState,
    counterInit
  );

  const add = () => dispatch({ type: TYPES.INCREMENT });

  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });

  const subtract = () => dispatch({ type: TYPES.DECREMENT });

  const subtract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <>
      {/* Modal */}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>Counter Folder Structured</h3>
          <p>
            While the UI is inside the{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/components/CounterStructured.js"
              rel="noreferrer"
              target="_blank"
            >
              CounterStructured
            </a>{" "}
            component, the logic behind the state is in a different folder
            called{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/tree/master/src/reducers"
              rel="noreferrer"
              target="_blank"
            >
              reducers
            </a>{" "}
            where you can find{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/reducers/counterReducer.js"
              rel="noreferrer"
              target="_blank"
            >
              counterReducer
            </a>{" "}
            with all the logic behind the manipulation of the state.
          </p>
          <p>
            Additionally, the actions are in a different folder under the name{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/tree/master/src/actions"
              rel="noreferrer"
              target="_blank"
            >
              actions
            </a>
            . Check the TYPES object on{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/actions/counterActions.js"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            !
          </p>
        </div>
      </Modal>
      {/* Modal */}
      <div className="counter-container">
        <button className="btnModal" onClick={openModal}>
          <h2 className="key-title">Counter with Folder Structure</h2>
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
      </div>
    </>
  );
};

export default CounterStructured;
