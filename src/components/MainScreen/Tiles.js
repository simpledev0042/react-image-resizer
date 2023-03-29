import UploadIcon from '@mui/icons-material/Upload';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import DownloadIcon from '@mui/icons-material/Download';

import "./Tiles.css";

const Tiles = () => {
	return (
		<div
			style={{
				marginTop: "3rem",
				marginBottom: "3rem"
			}}
		>
			<h1 style={{ textAlign: 'center', color: "black", marginTop: "3vh" }}>
				Resize images and download them
			</h1>

			<div className="customQr-container">
				<div className="tile">
					<div className="tile--image">
						<UploadIcon sx={{ fontSize: 40, color: "#0385DB" }} />
					</div>

					<div>
						<span>STEP 1</span>
						<h2>Upload an Image.</h2>
					</div>
					<div className="tile--content">
						<p>
							Upload your image
						</p>
					</div>
				</div>

				<div className="tile">
					<div className="tile--image">
						<AspectRatioIcon sx={{ fontSize: 40, color: "#FD9D00" }} />
					</div>

					<div>
						<span>STEP 2</span>
						<h2>Select Size</h2>
					</div>
					<div className="tile--content">
						<p>
							Choose a size template or add your own.
						</p>
					</div>
				</div>

				<div className="tile">
					<div className="tile--image">
						<DownloadIcon sx={{ fontSize: 40, color: "#359B27" }} />
					</div>

					<div>
						<span>STEP 3</span>
						<h2>Download Image</h2>
					</div>
					<div className="tile--content">
						<p>
							Instantly download your image.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tiles;