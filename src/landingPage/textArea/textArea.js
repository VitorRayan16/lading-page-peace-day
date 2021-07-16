import React, { useEffect, useRef } from "react";
import {
	FaTwitter,
	FaFacebookF,
	FaWhatsapp,
	FaInstagram,
} from "react-icons/fa";

import { COLORS, ANIMATION_TIME } from "../../constants";

import classes from "./textArea.module.scss";

const ICON_SIZES = "1rem";

const TextArea = (props) => {
	const animate = useRef(null);
	useEffect(() => {
		const timer = setTimeout(() => {
			animate.current.classList.add(classes.Move);
		}, ANIMATION_TIME + 1800);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={classes.Wrapper} ref={animate}>
			<h1>International peace day</h1>
			<h2>21 september 2022</h2>
			<button>More</button>
			<p>
				default text default text default text default text default text default
				text default text default text default text default text default text
				default text
			</p>
			<a>www.peace.com</a>
			<ul>
				<li>
					<FaInstagram size={ICON_SIZES} color={COLORS.main} />
				</li>
				<li>
					<FaFacebookF size={ICON_SIZES} color={COLORS.main} />
				</li>
				<li>
					<FaTwitter size={ICON_SIZES} color={COLORS.main} />
				</li>
				<li>
					<FaWhatsapp size={ICON_SIZES} color={COLORS.main} />
				</li>
			</ul>
		</div>
	);
};

export default TextArea;
