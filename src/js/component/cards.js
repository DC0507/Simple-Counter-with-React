import React from "react";
import PropTypes from "prop-types";
import { Icon } from "./icon.js";
import { Interval } from "./counter.js";

const Card = props => {
	return (
		<div
			className="card text-center bg-info mt-2"
			style={{ height: "9rem", width: "18rem", color: "#35f4c9" }}>
			<p>{props.content}</p>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.element
};

export const CardDeck = () => {
	return (
		<div className="card-deck" style={{ fontSize: "64pt" }}>
			<Icon />
			<Card content={<Interval position={5} />} />
			<Card content={<Interval position={4} />} />
			<Card content={<Interval position={3} />} />
			<Card content={<Interval position={2} />} />
			<Card content={<Interval position={1} />} />
			<Card content={<Interval position={0} />} />
		</div>
	);
};
