import matchers from "@testing-library/jest-dom/matchers";

const Basics3 = () =>{

    const planets = [
{ name: "Mars" , isGasPlanet: false},
{ name: "Earth", isGasPlanet: false},
{ name: "Jupiter", isGasPlanet: true},
{ name: "Pluto", isGasPlanet: false},
{ name: "Neptune", isGasPlanet: true},
];
    return(
<div>
    {planets.map((planet, key) => {
        if(planet.isGasPlanet) return <h1>{planet.name}</h1>;
    })}
</div>
    );
}

export default Basics3;