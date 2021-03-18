import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

export const Interval = props => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <div>{Math.floor(seconds / Math.pow(10, props.position)) % 10}</div>;
};

Interval.propTypes = {
	position: PropTypes.number
};
