import { React } from 'react';
import Basics1 from './Components/Basics1';
import Basics2 from './Components/Basics2';
import Basics3 from './Components/Basics3';
import Basics4 from './Components/Basics4';
import './App.css';


function App() {
  
  return (
    <div className="App">
     <h2> Components and props </h2>
{/* Basically passing values (arguements) to function through element */}
     <Basics1 name="Yukta" number="Y564" age="24"/>
     <Basics1  name="Shravani" number="Y890" age="26" />
     <Basics1 name="Zayn" number="Y762" age="25"   />
   
     <h2>Ternary opeartors</h2>
     <Basics2 />
     <h3>Planets-  lists</h3>
     <Basics3 />
     <h3>UseState Hook</h3>
     <Basics4 />
    </div>
  );
}

export default App;
