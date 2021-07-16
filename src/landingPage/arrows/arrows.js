import React from "react";
import Arrow from "./arrow/arrow";

import classes from "./arrows.module.scss";

const Arrows = (props) => {
	return (
		<div className={`${classes.ArrowGroup} ${props.style}`}>
			<Arrow color={props.color} transition={classes["Transition-3"]} />
			<Arrow color={props.color} transition={classes["Transition-2"]} />
			<Arrow color={props.color} transition={classes["Transition-1"]} />
		</div>
	);
};

export default Arrows;
