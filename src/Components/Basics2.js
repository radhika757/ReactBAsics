import '../Styles/Basics2.css';

const Basics2 = () =>{
    let age = 19;
    let isJunior = false;
    return(
<div className='Bas'>
    <h3 className='con'>Conditional rendering</h3>
    {/* Conditional rendering is basically done with the help of if else or ternary operators. */}
{age <= 24 ? <h5>Junior developer</h5> : <h5>Senior developer</h5>}
<h5 style={{ color: isJunior ? "green" : "red"}}> Developer</h5>
<h2 style={{color: "pink"}}>Lists</h2>


</div>
    );
}

export default Basics2;