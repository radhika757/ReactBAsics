import { useState } from "react";

//  The useState basically triggers react to re-render the component.
const Basics4 = () => {
  const [age, setAge] = useState(10);
  const[input, setInput] = useState("");
const[showText, setShowText] = useState(true);

  const changeAge = () => {
    setAge(age + 1);
  };

  const inputEventHandler =(event) =>{
    setInput(event.target.value);
  }


  return (
    <div>
      <h2>UseState Hook</h2>
      <h1>Hey! I am {age} year's old</h1>
      <button
        style={{ padding: "10px", border: "0px", marginLeft: "20px" }}
        onClick={changeAge}
      >
        Click me
      </button>
      <div>
        <br />
        <input type={"text"} onChange={inputEventHandler} />
        {input}
      </div>

      <div>
        <br></br>
        <button onClick={() =>{
            setShowText(!showText);
        }}> Show/ Hide</button>
        {showText && <h1>Hey, My name is Radhika !</h1>}
      </div>
    </div>
  );
};

export default Basics4;
