import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ReactStyle from './Component/12-Style/ReactStyle';
import FormHandling from './Component/13-Form-Handling/FormHandling';
import FragmentDemo from './Component/14-Fragment/FragmentDemo';

import Constructor from './Component/16-Lifecycle-Method/Constructor';
import ComponentDidMount from './Component/16-Lifecycle-Method/ComponentDidMount';
import ComponentDidUpdate from './Component/16-Lifecycle-Method/ComponentDidUpdate';
import LearnUseState from './Component/17-Hooks/LearnUseState';
import LearnUseEffect1 from './Component/17-Hooks/LearnUseEffect1';
import LearnUseEffect2 from './Component/17-Hooks/LearnUseEffect2';
import BootStrapButton from './Component/18-Bootstrap/BootStrapButton';
import BootstrapForm from './Component/18-Bootstrap/BootstrapForm';
import AllCollapseExample from './Component/18-Bootstrap/AllCollapseExample';
import TableRendering from './Component/19-Array-Rendering-Bootstrap/TableRendering';
import ReactPureComponents from './Component/15-Pure-Component/ReactPureComponent';
import SimpleComponent from './Component/15-Pure-Component/SimpleComponent';
import LearnUseMemo from './Component/17-Hooks/LearnUseMemo';


function App() {
  return (
    <div className='App'>
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

      {/* <FunctionClick />

      <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <Parent /> */}

      {/* <ConditionalRendering /> */}
      
      {/* <ListRendering /> */}

      {/* <FormHandling /> */}

      {/* <FragmentDemo /> */}

      

      {/* <Constructor /> */}

      {/* <ComponentDidMount /> */}

      {/* <ComponentDidUpdate /> */}

      {/* <LearnUseEffect1 /> */}

      {/* <LearnUseEffect2 /> */}

      {/* <ReactStyle /> */}

      {/* <BootStrapButton /> */}

      {/* <BootstrapForm /> */}

      {/* <AllCollapseExample /> */}

      {/* <TableRendering /> */}

      {/* <ReactPureComponents />
      <SimpleComponent /> */}

      <LearnUseMemo />
    </div>
  );
}

export default App;
