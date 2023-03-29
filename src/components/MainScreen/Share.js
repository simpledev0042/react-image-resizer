import BookmarkIcon from "../../assets/bookmark.svg";

import "./Share.css";

const fbRedirect = () => {
	window.open(
		"https://www.facebook.com/sharer/sharer.php?u=#",
		"_blank"
	);
};

const twitterRedirect = () => {
	window.open(
		"https://twitter.com/intent/tweet?url=#",
		"_black"
	);
};

const linkedinRedirect = () => {
	window.open(
		"https://www.linkedin.com/sharing/share-offsite/?url=#",
		"_blank"
	);
};

const Share = () => {
	return (
		<div className="share-container">
			<div className="bookmark">
				<h3>PRESS CTRL / CMD + D TO BOOKMARK</h3>
				<img alt="Bookmark" src={BookmarkIcon} />
			</div>

			<div className="sharecontainer-line"></div>

			<div className="share-links">
				<h3>SHARE ON</h3>
				<div className="share-buttons">
					<i
						onClick={fbRedirect}
						style={{ fontSize: "40px" }}
						className="fab fa-facebook-square"
					></i>
					<i
						onClick={twitterRedirect}
						style={{ fontSize: "40px" }}
						className="fab fa-twitter-square"
					></i>
					<i
						onClick={linkedinRedirect}
						style={{ fontSize: "40px" }}
						className="fab fa-linkedin"
					></i>
				</div>
			</div>
		</div>
	);
};

export default Share;