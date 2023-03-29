import React, { useState } from "react";
import "./SideBar.css";
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
// import GoogleIcon from '@mui/icons-material/Google';
import GoogleIcon from '../../assets/google.png'
import MailIcon from '@mui/icons-material/Mail';
import SnapchatIcon from '../../assets/SnapchatLogo.png'
import TiktokIcon from '../../assets/TikTokLogo.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slide from '@mui/material/Slide';
import LinkedinIcon from '../../assets/linkedin.png'

function SideBar() {

	const [frame, setFrame] = useState(1);
	const [firstFrame, setFirstFrame] = useState(true);
	const [secondFrame, setSecondFrame] = useState(false);
	const [thirdFrame, setThirdFrame] = useState(false);
	const sidebar = React.useRef(null);


	function UpClickHandler() {
		let newFrame = frame - 1
		setFrame(newFrame)
		if (newFrame === 2) {
			setThirdFrame(false);
			setSecondFrame(true);
		}
		if (newFrame === 1) {
			setSecondFrame(false);
			setFirstFrame(true);
		}
	}

	function DownClickHandler() {
		let newFrame = frame + 1
		setFrame(newFrame)
		if (newFrame === 3) {
			setSecondFrame(false);
			setThirdFrame(true);
		}
		if (newFrame === 2) {
			setFirstFrame(false);
			setSecondFrame(true);
		}
	}

	return (
		<div
			className="sidebar"
			ref={sidebar}
		>
			{frame > 1 &&
				<IconButton
					aria-label="delete"
					color="primary"
					style={{ marginTop: "10px" }}
					onClick={UpClickHandler}
				>
					<KeyboardArrowUpIcon
						style={{ fontSize: "25px", color: "black" }}
					/>
				</IconButton>
			}

			{frame === 1 &&
				<Slide direction="up" in={firstFrame} container={sidebar.current}>
					<IconButton
						aria-label="delete"
						color="primary"
						style={{ marginTop: "10px" }}
					>
						<a href="#Facebook-image-list">
							<FacebookRoundedIcon
								style={{ fontSize: "32px", color: "#1877F2" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 1 &&
				<Slide direction="up" in={firstFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Instagram-image-list">

							<InstagramIcon
								style={{ fontSize: "32px", color: "#F00075" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 1 &&
				<Slide direction="up" in={firstFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Youtube-image-list">
							<YouTubeIcon
								style={{ fontSize: "32px", color: "#FF0000" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 1 &&
				<Slide direction="up" in={firstFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Website-image-list">
							<LanguageIcon
								style={{ fontSize: "30px", color: "black" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 1 &&
				<Slide direction="up" in={firstFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Linkedin-image-list">
							<LinkedInIcon
								style={{ fontSize: "30px", color: "#0A66C2" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 2 &&
				<Slide direction="up" in={secondFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Youtube-art-image-list">
							<YouTubeIcon
								style={{ fontSize: "32px", color: "#FF0000" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 2 &&
				<Slide direction="up" in={secondFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Facebook-ads-image-list">
							<FacebookRoundedIcon
								style={{ fontSize: "32px", color: "#1877F2" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 2 &&
				<Slide direction="up" in={secondFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Email-image-list">
							<MailIcon
								style={{ fontSize: "30px", color: "black" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 2 &&
				<Slide direction="up" in={secondFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Twitter-image-list">
							<TwitterIcon
								style={{ fontSize: "30px", color: "#1DA1F2" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 3 &&
				<Slide direction="up" in={thirdFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Snapchat-image-list">
							<img
								src={SnapchatIcon}
								style={{ height: "30px" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 3 &&
				<Slide direction="up" in={thirdFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Tiktok-image-list">
							<img
								src={TiktokIcon}
								style={{ height: "30px" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 3 &&
				<Slide direction="up" in={thirdFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary">
						<a href="#Pinterest-image-list">
							<PinterestIcon
								style={{ fontSize: "30px", color: "#BD081C" }}
							/>
						</a>
					</IconButton>
				</Slide>
			}

			{frame === 3 &&
				<Slide direction="up" in={thirdFrame} container={sidebar.current}>
					<IconButton aria-label="delete" color="primary" style={{ marginBottom: "60px" }}>
						<a href="#Google-ads-image-list">
							<img src={GoogleIcon} style={{ height: "30px" }} />
						</a>
					</IconButton>
				</Slide>
			}

			{frame < 3 &&
				<IconButton
					aria-label="delete"
					color="primary"
					style={{ marginBottom: "10px" }}
					onClick={DownClickHandler}
				>
					<KeyboardArrowDownIcon
						style={{ fontSize: "25px", color: "black" }}
					/>
				</IconButton>
			}
		</div >
	);
}

export default SideBar;
