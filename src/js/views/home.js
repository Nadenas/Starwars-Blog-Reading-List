import React from "react";
import CharacterCard from "../component/CharacterCard.js";
import "../../styles/home.scss";
import PlanetCard from "../component/PlanetsCard.js";

const Home = () => {
	return (
		<div className="container one">
			<CharacterCard /> <PlanetCard />
		</div>
	);
};
export default Home;
