import { react } from "react";
import "../Styles/Basics1.css";


const Basics1 = (props) => {

  return (

    <div>
      {/* <div className="comp">
        <h4>1. Sara</h4>
        <h4>2. 22 </h4>
        <h4>3. sara@yahoo.com</h4>
      </div> */}

      <div className="prop">
        <h3>Props</h3>
        <h4> Employee name : {props.name} </h4>
        <h4> Employee ID : {props.number} </h4>
        <h4> Employee age: {props.age} </h4>
        {/* <h4> {{age}>= 20 ? 'adult' : 'underage'}</h4> */}
      </div>
    </div>
  );
};

export default Basics1;
