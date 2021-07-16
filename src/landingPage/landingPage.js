import React from "react";
import classes from "./landingPage.module.scss";
import TextArea from "./textArea/textArea";
import { ReactComponent as YellowCurve } from "../assets/Shape.svg";
import { ReactComponent as GreenCurve } from "../assets/GreenShape.svg";
import { ReactComponent as WhitePlant } from "../assets/WhitePlant.svg";
import { ReactComponent as YellowPlant } from "../assets/YellowPlant.svg";
import peaceImg from "../assets/peaceImg.jpg";
import Arrows from "./arrows/arrows";
import PeaceText from "./peaceText/peaceText";

const LandingPage = (props) => {
	return (
		<main className={classes.Main}>
			<div className={classes.GreenCircle}>
				<TextArea />
			</div>
			<div className={classes.OrangeCircle}></div>
			<div className={classes.WhiteOuterCircle}>
				<div className={classes.WhiteInnerCircle}>
					<img src={peaceImg} />
				</div>
			</div>
			<div className={classes.YellowPlant}>
				<YellowPlant />
			</div>
			<Arrows color="white" style={classes.WhiteArrow} />
			<Arrows color="green" style={classes.GreenArrow} />
			<div className={classes.YellowCurve}>
				<YellowCurve />
			</div>
			<div className={classes.GreenCurve}>
				<GreenCurve />
			</div>
			<div className={classes.WhitePlant}>
				<WhitePlant />
			</div>
			<PeaceText />
		</main>
	);
};

export default LandingPage;
