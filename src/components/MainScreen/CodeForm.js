import React from "react";
import "./CodeForm.css";
import ImageResizer from '../ImageResizer';

function CodeForm(props) {

	return (
		<div id="imageForm" className="fullForm">
			<div className="card" style={{ maxWidth: "1200px" }}>
				<div className="card__content">
					<div className="card__form">
						<div className="App-form Container">
							<ImageResizer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeForm;
