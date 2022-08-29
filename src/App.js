import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import ClassComponent from './Component/ClassComponent';
import NoJSX from './Component/NoJSX';
import Props from './Component/Props';
import ClassProps from './Component/ClassProps';
import State from './Component/State';
import Counter from './Component/Counter';
import Destructuring from './Component/Destructuring';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import DestructuringClass from './Component/DestructuringClass';
import EventBind from './Component/EventBind';
import Parent from './Component/Parent';
import ListRendering from './Component/ListRendering';
function App() {
  return (
    <div className="App">
      {/* <Greet /> */}

      {/* <ClassComponent /> */}

      {/* <NoJSX /> */}

      {/* <Props name="Akash">
        <p>This is Children Props</p>
        <p>This is Children2 Props</p>
      </Props> */}

      {/* <ClassProps name='Akash'/> */}

      {/* <State /> */}

      {/* <Counter /> */}

      {/* <Destructuring name='Akash' sname='Karle'>
      <p>This is Children</p>
      </Destructuring> */}

      {/* <DestructuringClass name='Akash' sname='Karle'/> */}

      {/* <FunctionClick /> */}

      {/* <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <Parent /> */}

      <ListRendering />
    </div>
  );
}

export default App;
