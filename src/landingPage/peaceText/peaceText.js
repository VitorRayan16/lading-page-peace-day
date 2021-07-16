import React, { useEffect, useRef } from "react";
import { ANIMATION_TIME } from "../../constants";
import classes from "./peaceText.module.scss";

const PeaceText = (props) => {
	const animate = {
		n1: useRef(null),
		n2: useRef(null),
		n3: useRef(null),
		n4: useRef(null),
		n5: useRef(null),
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			for (const key in animate) {
				animate[key].current.classList.add(classes.Move);
			}
		}, ANIMATION_TIME + 1000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	const TEXT = "peace day";
	return (
		<div className={classes.PeaceText}>
			<h1 ref={animate.n5} className={classes["animate-5"]}>
				{TEXT}
			</h1>
			<h1 ref={animate.n4} className={classes["animate-4"]}>
				{TEXT}
			</h1>
			<h1 ref={animate.n3} className={classes["animate-3"]}>
				{TEXT}
			</h1>
			<h1 ref={animate.n2} className={classes["animate-2"]}>
				{TEXT}
			</h1>
			<h1 ref={animate.n1} className={classes["animate-1"]}>
				{TEXT}
			</h1>
		</div>
	);
};

export default PeaceText;
