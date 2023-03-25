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
           ...
          </p>
          <p>
           ...
          </p>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
          <p style={{ textAlign: "center" }}>
            ...
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
