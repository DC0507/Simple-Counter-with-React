import React from "react";
import { CardDeck } from "./cards";

export const Container = () => {
	return (
		<div
			className="container card bg-dark mt-5 p-3"
			style={{ width: "50rem" }}>
			<CardDeck />
		</div>
	);
};
