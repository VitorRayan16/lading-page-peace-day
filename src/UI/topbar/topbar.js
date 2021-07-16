import React from "react";
import classes from "./topbar.module.scss";
import { HiSearch } from "react-icons/hi";
import { FaPeace } from "react-icons/fa";
import { IconContext } from "react-icons";
import { COLORS } from "../../constants";

const Topbar = (props) => {
	const searchIcon = (
		<IconContext.Provider
			value={{ color: COLORS.main, className: classes.Icon, size: "1.6rem" }}
		>
			<div>
				<HiSearch />
			</div>
		</IconContext.Provider>
	);

	const peaceIcon = (
		<IconContext.Provider
			value={{
				color: COLORS.main,
				className: classes.IconPeace,
				size: "4.5rem",
			}}
		>
			<div>
				<FaPeace />
			</div>
		</IconContext.Provider>
	);

	return (
		<header className={classes.TopBar}>
			<div className={classes.Logo}>
				{peaceIcon}
				<h1> Peace Day</h1>
			</div>
			<ul>
				<li>HOME</li>
				<li>ABOUT</li>
				<li>EVENT</li>
				<li>CONTACT</li>
			</ul>
			<div className={classes.SearchWrapper}>
				<input type="text" className={classes.SearchBar} name="search" />
				{searchIcon}
			</div>
		</header>
	);
};

export default Topbar;
