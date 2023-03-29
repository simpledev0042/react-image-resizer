import CodeForm from "./CodeForm";
import "./Content.css";
import ImageLists from "./ImageLists";
import Tiles from "./Tiles";

const Content = () => {
	return (
		<div className="content">
			<div className="content__heading">
				<h1 style={{ fontFamily: "Recursive" }}>IMAGE RESIZER</h1>
				<hr className="new1" />
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum."
				</p>
			</div>

			<a className="content__link" href="#imageForm">
				<h2>Upload and resize</h2>
			</a>
			<Tiles />
			<CodeForm />
			<ImageLists />

			<div className="content__segment">
				<h2>WHAT IS AN IMAGE RESIZER?</h2>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum."
				</p>
			</div>

			<div className="content__segment">
				<h2>HOW TO USE IMAGE RESIZER?</h2>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum."
				</p>
				
			</div>

			<div className="content__segment">
				<h2>WHY RESIZING IMAGES ARE IMPORTANT?</h2>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum."
				</p>
			</div>
		</div>
	);
};
export default Content;