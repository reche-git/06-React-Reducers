import Counter from "./components/Counter";
import CounterStructured from "./components/CounterStructured";
import Modal from "./components/Modal";
// import { CrudApi } from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";
import { useModal } from "./hooks/useModal";

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
      {/* Modal */}
      <button className="btnModal" onClick={openModal}>
        <h1 style={{ fontSize: "35px" }}>useReducer</h1>
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="ExplinationModal">
          <h3>React Reducer</h3>
          <p style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#000",
                fontSize: "16px",
                padding: "1rem",
                borderRadius: "15px",
              }}
            >
              <span style={{ color: "#1672D6" }}>const</span>{" "}
              <span style={{ color: "#DA5E98" }}>[</span>
              <span style={{ color: "#9CDCFE" }}>state</span>
              <span>,</span> <span style={{ color: "#9CDCFE" }}>dispatch</span>
              <span style={{ color: "#DA5E98" }}>]</span> ={" "}
              <span style={{ color: "#DCDC84" }}>useReducer</span>
              <span style={{ color: "#DA5E98" }}>(</span>
              <span style={{ color: "#9CDCFE" }}>reducer</span>
              <span>,</span>{" "}
              <span style={{ color: "#9CDCFE" }}>initialArg</span>
              <span>,</span> <span style={{ color: "#9CDCFE" }}>init</span>
              <span style={{ color: "#DA5E98" }}>)</span>
            </div>
          </p>
          <p>
            Reducers, as the name suggests, take in two things: previous state
            and an action. Then they reduce it (read it return) to one entity:
            the new updated instance of state. So reducers are basically pure JS
            functions which take in the previous state and an action and return
            the newly updated state.
          </p>
          <p>You can pass three parameters to this funtion:</p>
          <ul>
            <li>
              reducer: The reducer function that specifies how the state gets
              updated.
            </li>
            <li>
              initialArg: The value from which the initial state is calculated.
              It can be a value of any type.
            </li>
            <li>
              init: This is function value is optional. and it should return the
              result of calling init(initialArg).
            </li>
          </ul>
          <p>
            The{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/components/Counter.js"
              rel="noreferrer"
              target="_blank"
            >
              Counter
            </a>{" "}
            component shows the logic behind a counter using reducers all in one
            file, while the{" "}
            <a
              href="https://github.com/reche-git/06-React-Reducers/blob/master/src/components/CounterStructured.js"
              rel="noreferrer"
              target="_blank"
            >
              Counter whit folder structure
            </a>{" "}
            shows the same logic but structured in a way that would be used in a
            company.
          </p>
        </div>
      </Modal>
      {/* Modal */}
      {/* <hr /> */}
      {/* <CrudApi /> */}
      <hr />
      <Counter />
      <hr />
      <CounterStructured />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;
