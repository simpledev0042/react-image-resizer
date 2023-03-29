import Content from "./components/MainScreen/Content";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import BottomBar from "./components/UI/BottomBar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./App.css";
import Share from "./components/MainScreen/Share";
import SideBar from "./components/UI/SideBar";

function App() {
	return (
		<div className="App">
			<Header />
			<SideBar />
			<BottomBar />
			<div className="breadcrumb-main">
				<Breadcrumbs
					style={{ fontFamily: "Poppins" }}
					aria-label="breadcrumb"
				>
					<Link underline="hover" color="inherit" href="/">
						<span className="breadcrumb-link">Home</span>
					</Link>
					<Link
						underline="hover"
						color="inherit"
						href="#"
					>
						<span className="breadcrumb-link">Graphic Tools</span>
					</Link>
					<Typography
						style={{ fontFamily: "Poppins" }}
						color="text.primary"
					>
						<span className="breadcrumb-link">
							<b>Image Resizer</b>
						</span>
					</Typography>
				</Breadcrumbs>
			</div>
			<div>
				<Content />
				
	
				
			</div>
			
			<Share /> 
			<Footer />
		</div>
	);
}

export default App;