import React, { useState } from "react";


//MAIN COMPONENT
const TrafficLight = () => {
	const [ ActualColor, ChangeColor ] = useState("red");
	return (
		<div className="trafficlight d-flex justify-content-center">
			<div onClick={() => ChangeColor ("red")} className={"light red"+((ActualColor === "red") ? " highlight": "")}></div>
			<div onClick={() => ChangeColor ("yellow")} className={"light yellow"+((ActualColor === "yellow") ? " highlight": "")}></div>
			<div onClick={() => ChangeColor ("green")} className={"light green"+((ActualColor === "green") ? " highlight": "")}></div>
		</div>
	);
};

export default TrafficLight;


//UseEffect -> default en rojo. Llamada a ChangeColor para renderizar nuevo color, mediante click.
