import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = () => {
	const [characters, setCharacters] = useState([]);
	const { store, actions } = useContext(Context);

	async function getPj() {
		const response = await fetch("https://www.swapi.tech/api/characters");

		const responseJson = await response.json();
		setCharacters(responseJson.results);
	}
	useEffect(() => {
		getPj();
	}, []);

	return (
		<div className="container">
			<h1>CHARACTERS</h1>
			<div className="row flex-nowrap ">
				{characters.map(pj => {
					return (
						<div className="card col-3 m-4" key={pj.uid}>
							<img
								className="card-img-top"
								src="https://starwarsblog.starwars.com/wp-content/uploads/2021/03/leia-acme-archives-christophe-vacher-tall.jpg"
								alt="Card image cap"
							/>
							<h5>{pj.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									className="fas fa-heart"
									onClick={() => {
										actions.addFav(pj.name);
									}}
								/>
								<Link to="/character_detail">
									<button
										className="details"
										onClick={() => {
											actions.addDetails(pj.url);
										}}>
										Details
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default CharacterCard;
