import Counter from "./components/Counter";
import CounterStructured from "./components/CounterStructured";
// import { CrudApi } from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducers</h1>
      <hr />
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
