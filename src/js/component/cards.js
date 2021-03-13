import React from "react";
import PropTypes from "prop-types";
import { Icon } from "./icon.js";
import { Interval } from "./counter.js";

const Card = props => {
	return (
		<div className="card" style={{ width: "18rem;" }}>
			<p>{props.content}</p>
		</div>
	);
};

Card.propTypes = {
	content: PropTypes.element
};

export const CardDeck = () => {
	return (
		<div className="card-deck" style={{ width: "18rem;" }}>
			<Card content={<Icon />} />
			<Card content={<Interval />} />
			<Card content={<Interval />} />
			<Card content={<Interval />} />
			<Card content={<Interval />} />
			<Card content={<Interval />} />
			<Card content={<Interval />} />
		</div>
	);
};
