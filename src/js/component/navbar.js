import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="navLine">
			<div className="navbar navbar-light bg-light cole">
				<Link className="navbar-brand" to="">
					<img
						className="logo"
						src="https://d2i9ogginaqdr5.cloudfront.net/cmsstatic/lego-star-wars-256.png"
					/>
				</Link>
				<DropdownButton id="dropdown-item-button-Warning " title={" Favorite " + store.favorites.length}>
					{store.favorites.length > 0 ? (
						store.favorites.map((fav, index) => {
							return (
								<Dropdown.Item key={index}>
									<p>{fav}</p>
									<i
										className="far fa-trash-alt"
										onClick={() => {
											actions.deleteFavorite(fav);
										}}
									/>
								</Dropdown.Item>
							);
						})
					) : (
						<Dropdown.Item>Add some</Dropdown.Item>
					)}
				</DropdownButton>
			</div>
		</div>
	);
};
