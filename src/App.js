import logo from './logo.svg';
import './App.css';
import Greet from './Component/1-Functional-Component/Greet';
import ClassComponent from './Component/2-Class-Component/ClassComponent';
import NoJSX from './Component/0-Without-JSX/NoJSX';
import Props from './Component/3-Functional-Props/Props';
import ClassProps from './Component/4-Class-Props/ClassProps'
import State from './Component/5-State/State';
import Counter from './Component/5-State/Counter';
import Destructuring from './Component/6-Destructuring/Destructuring';
import FunctionClick from './Component/7-Event-Handling/FunctionClick';
import ClassClick from './Component/7-Event-Handling/ClassClick';
import DestructuringClass from './Component/6-Destructuring/DestructuringClass';
import EventBind from './Component/8-Event-Binding/EventBind';
import Parent from './Component/9-Method-as-Props/Parent';
import ConditionalRendering from './Component/10-Conditional-Rendering/ConditionalRendering';
import ListRendering from './Component/11-List-Rendering/ListRendering';
import Stylesheet from './Component/12-Style/Stylesheet';
import InlineStyle from './Component/12-Style/InlineStyle';
import './simple.css';
import styles from './style.module.css';

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

      {/* <State />

      <Counter /> */}

      {/* <Destructuring name='Akash' sname='Karle'>
      <p>This is Children</p>
      </Destructuring>

      <DestructuringClass name='Akash' sname='Karle'/> */}

      {/* <FunctionClick />

      <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <Parent /> */}

      {/* <ConditionalRendering /> */}
      
      {/* <ListRendering /> */}

      {/* <Stylesheet isPrimary={true} /> */}

      <InlineStyle />

      {/* simple css class */}
      {/* <h1 className='error'>Error</h1> */}

      {/* style module class */}
      {/* <h1 className={styles.success}>Success</h1> */}
    </div>
  );
}

export default App;
