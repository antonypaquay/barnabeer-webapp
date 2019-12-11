import React from "react";
import "./Header.scss";
import resetImg from "../img/reset.png";

const Header = ({ beersLength, handleClick, logOut }) => {
	return (
		<header>
			<div className="wrapper">
				<button className="btn__reset" onClick={handleClick}>
					<img src={resetImg} alt="reset"/>
				</button>
                <p>Nos bières</p>
				{logOut}
			</div>
		</header>
	);
};

export default Header;
