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
import ConditionalRendering from './Component/ConditionalRendering';
import Stylesheet from './Component/Stylesheet';
import InlineStyle from './Component/InlineStyle';
import './simple.css';
import styles from './style.module.css';
import Table from './Component/Table';
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
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

      {/* <ListRendering /> */}

      {/* <ConditionalRendering /> */}

      {/* <Stylesheet isPrimary={true}/> */}

      {/* <InlineStyle /> */}

      <Table/>
    </div>
  );
}

export default App;
