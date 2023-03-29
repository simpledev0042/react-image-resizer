import React from "react";
import "./ImageLists.css";
import { Button } from '@mui/material';
import { facebookSizes, instagramSizes, youtubeSizes, websiteSizes, twitterSizes, linkedinSizes, facebookAdsSizes, googleAdsSizes, snapchatSizes, youtubeChannelArtSizes, tiktokSizes, pinterestSizes, emailSizes } from './ImageListsHelper'
import InstagramIcon from '@mui/icons-material/Instagram';
import ImageListSubpart from "./ImageListSubpart";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import SnapchatIcon from '../../assets/SnapchatLogo.png'
import TiktokIcon from '../../assets/TikTokLogo.png'
import GoogleIcon from '../../assets/google.png'
import { useSelector, useDispatch } from 'react-redux';
import { setImage } from '../../redux/Image/image.actions'

function ImageLists() {

	const images = useSelector((state) => state.imageReducer.images)
	const image = images.inputImage
	const dispatch = useDispatch()

	function ImageUploadHandler() {
		document.getElementById("image-list-file-input").click()
	}

	const onFileUploadHandler = (file) => {
		const imgURL = URL.createObjectURL(file)
		dispatch(setImage({
			...images,
			inputImage: imgURL,
			outputImage: imgURL
		}));
	};

	return (
		<React.Fragment>
			<div id="Facebook-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<FacebookIcon
										style={{ fontSize: "2.5rem", color: "#1877F2", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Facebook
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={facebookSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Instagram-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<InstagramIcon
										style={{ fontSize: "2.5rem", color: "#F00075", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Instagram
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={instagramSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Youtube-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<YouTubeIcon
										style={{ fontSize: "2.5rem", color: "#FF0000", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for YouTube Banner
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={youtubeSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Website-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<LanguageIcon
										style={{ fontSize: "2.5rem", color: "black", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Website
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={websiteSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Linkedin-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<LinkedInIcon
										style={{ fontSize: "2.5rem", color: "#0A66C2", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for LinkedIn
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={linkedinSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Youtube-art-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<YouTubeIcon
										style={{ fontSize: "2.5rem", color: "#FF0000", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for YouTube Channel
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={youtubeChannelArtSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Facebook-ads-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<FacebookIcon
										style={{ fontSize: "2.5rem", color: "#1877F2", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Facebook Ads
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={facebookAdsSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Email-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<MailIcon
										style={{ fontSize: "2.5rem", color: "black", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Email
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={emailSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Twitter-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<TwitterIcon
										style={{ fontSize: "2.5rem", color: "#1DA1F2", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Twitter
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={twitterSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Snapchat-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<img
										src={SnapchatIcon}
										style={{ height: "38px", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Snapchat
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={snapchatSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Tiktok-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<img
										src={TiktokIcon}
										style={{ height: "2.5rem", color: "#1DA1F2", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for TikTok
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={tiktokSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Pinterest-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<PinterestIcon
										style={{ fontSize: "2.5rem", color: "#BD081C", marginRight: "1rem", marginTop: "15px" }}
									/>
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Pinterest
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={pinterestSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

			<div id="Google-ads-image-list" className="Image-list-container">
				<div className="card" style={{ maxWidth: "1200px" }}>
					<div className="card__content">
						<div className="card__form">
							<div className="Container">
								<div style={{ display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
									<img src={GoogleIcon} style={{ height: "2.5rem", marginRight: "1rem", marginTop: "15px" }} />
									<div className="image-list-header-div">
										<h2 style={{ color: "black" }}>
											Resize Image for Google Ads
										</h2>
										<input
											accept="image/png, image/jpg, image/jpeg"
											id="image-list-file-input"
											type="file"
											style={{ display: "none" }}
											onChange={e => onFileUploadHandler(e.target.files[0])}
										/>
										<Button
											variant="outlined"
											className="image-list-button"
											onClick={ImageUploadHandler}
											style={{ fontFamily: "Poppins" }}
										>
											{image ? "Change Image" : "Upload Image"}
										</Button>
									</div>
								</div>
								<div style={{ marginLeft: "4.5rem", marginRight: "3rem" }}>
									
								</div>
							</div>
							{image &&
								<ImageListSubpart
									sizes={googleAdsSizes}
								/>
							}
						</div>
					</div>
				</div>
			</div>

		</React.Fragment>
	);
};

export default ImageLists;