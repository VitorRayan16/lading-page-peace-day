import React, { useEffect, useRef } from "react";

import { COLORS, ANIMATION_TIME } from "../../../constants";
import classes from "./arrow.module.scss";

const Arrow = (props) => {
	const arrow = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			arrow.current.classList.add(classes.Animation);
		}, ANIMATION_TIME);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={`${classes.Arrow} ${props.transition}`} ref={arrow}>
			<div
				className={classes.Point1}
				style={{
					background: props.color === "white" ? COLORS.white : COLORS.main,
				}}
			></div>
			<div
				className={classes.Point2}
				style={{
					background: props.color === "white" ? COLORS.white : COLORS.main,
				}}
			></div>
			<div
				className={classes.Point3}
				style={{
					background: props.color === "white" ? COLORS.white : COLORS.main,
				}}
			></div>
			<div
				className={classes.Point4}
				style={{
					background: props.color === "white" ? COLORS.white : COLORS.main,
				}}
			></div>
			<div
				className={classes.Point5}
				style={{
					background: props.color === "white" ? COLORS.white : COLORS.main,
				}}
			></div>
		</div>
	);
};

export default Arrow;
