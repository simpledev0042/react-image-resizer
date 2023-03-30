import React from "react";
import "./ImageLists.css";
import { useState } from "react";
import {
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { setSelected } from "../../redux/Selected/selected.actions";
import { setSelectedImages } from "../../redux/Selected Images/selected.images.actions";

async function ResizeImage(image, newHeight, newWidth) {
  // fetch the input image and get its content bytes
  const fetchedSourceImage = await fetch(image);
  const sourceBytes = new Uint8Array(await fetchedSourceImage.arrayBuffer());

  // calling ImageMagick with one source image, and command to rotate & resize image
  const inputFiles = [{ name: "srcFile.png", content: sourceBytes }];
  let command = [];
  command = JSON.parse(
    '[ "convert", "srcFile.png", "-resize","' + newWidth + '", "out.png" ]'
  );
  const processedFiles = await window.magick.Call(inputFiles, command);

  // response can be multiple files (example split) here we know we just have one
  const firstOutputImage = processedFiles[0];
  const url = URL.createObjectURL(firstOutputImage["blob"]);
  return url;
}

async function CropImage(image, newHeight, newWidth) {
  // fetch the input image and get its content bytes
  const fetchedSourceImage = await fetch(image);
  const sourceBytes = new Uint8Array(await fetchedSourceImage.arrayBuffer());

  // calling ImageMagick with one source image, and command to rotate & resize image
  const inputFiles = [{ name: "srcFile.png", content: sourceBytes }];
  let command = [];
  command = JSON.parse(
    '[ "convert", "srcFile.png", "-crop","' +
      newWidth +
      "x" +
      newHeight +
      '+0+0", "out.png" ]'
  );
  const processedFiles = await window.magick.Call(inputFiles, command);

  // response can be multiple files (example split) here we know we just have one
  const firstOutputImage = processedFiles[0];
  // const url = URL.createObjectURL(firstOutputImage["blob"]);
  const url = firstOutputImage["blob"];
  return url;
}

function ImageListPart(props) {
  const { item } = props;
  const images = useSelector((state) => state.imageReducer.images);
  const image = images.inputImage;
  const dimensions = useSelector((state) => state.dimensionsReducer.dimensions);
  const selected = useSelector((state) => state.selectedReducer.selected);
  const selectedImages = useSelector(
    (state) => state.selectedImagesReducer.selectedImages
  );

  const [ticked, setTicked] = useState(false);
  const dispatch = useDispatch();

  const DownloadImage = async (label, newHeight, newWidth) => {
    let imgName = label + "_" + newWidth + "x" + newHeight + ".png";

    if (newHeight / newWidth < dimensions.height / dimensions.width) {
      const imgURL = await ResizeImage(image, newHeight, newWidth);
      const imgURL2 = await CropImage(imgURL, newHeight, newWidth);

      let newImage = { name: imgName, file: imgURL2 };
      let newSelectedImages = [...selectedImages, newImage];
      dispatch(setSelectedImages(newSelectedImages));
    } else {
      let resizeWidth = (newHeight / dimensions.height) * dimensions.width;
      const imgURL = await ResizeImage(image, newHeight, resizeWidth);
      const imgURL2 = await CropImage(imgURL, newHeight, newWidth);

      let newImage = { name: imgName, file: imgURL2 };
      let newSelectedImages = [...selectedImages, newImage];
      dispatch(setSelectedImages(newSelectedImages));
    }
  };

  function RemoveImage(label, newHeight, newWidth) {
    let imgName = label + "_" + newWidth + "x" + newHeight + ".png";
    for (var i = 0; i < selectedImages.length; i++) {
      if (selectedImages[i].name === imgName) {
        selectedImages.splice(i, 1);
      }
    }
  }

  function SelectedHandler(label, newHeight, newWidth) {
    const ss = selectedImages;
    if (ticked) {
      let newSelected = selected - 1;
      dispatch(setSelected(newSelected));
      setTicked(false);
      RemoveImage(label, newHeight, newWidth);
    } else {
      let newSelected = selected + 1;
      dispatch(setSelected(newSelected));
      setTicked(true);
      DownloadImage(label, newHeight, newWidth);
    }
  }

  return (
    <ImageListItem key={image}>
      <img
        src={image}
        style={{
          width: item.width,
          height: item.height,
          borderRadius: "8px",
        }}
        alt={item.label}
        loading="lazy"
      />
      <ImageListItemBar
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
            "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        }}
        position="top"
        actionIcon={
          <IconButton
            sx={{ color: "white" }}
            aria-label={`star ${item.title}`}
            onClick={(e) => {
              SelectedHandler(item.label, item.actualHeight, item.actualWidth);
            }}
          >
            {ticked ? <CheckCircleRoundedIcon /> : <CircleOutlinedIcon />}
          </IconButton>
        }
      />
      <Accordion style={{ width: "248px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ImageListItemBar
            position="below"
            title={item.label}
            style={{ fontFamily: "Poppins" }}
            subtitle={item.actualWidth + "x" + item.actualHeight}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ fontFamily: "Poppins", fontSize: "14px" }}>
            {item.desc}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ImageListItem>
  );
}

export default ImageListPart;
