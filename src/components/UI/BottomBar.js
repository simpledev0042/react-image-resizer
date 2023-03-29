import React from "react";
import "./BottomBar.css";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useSelector } from "react-redux";
import { sizesArray } from "../MainScreen/ImageListsHelper";
import CircularProgress from "@mui/material/CircularProgress";

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

function BottomBar() {
  const images = useSelector((state) => state.imageReducer.images);
  const image = images.inputImage;
  const dimensions = useSelector((state) => state.dimensionsReducer.dimensions);
  const selected = useSelector((state) => state.selectedReducer.selected);
  const selectedImages = useSelector(
    (state) => state.selectedImagesReducer.selectedImages
  );

  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  async function DownloadAllImages() {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setLoading(false);
      }, 120000);
    }

    const zip = require("jszip")();
    const FileSaver = require("file-saver");

    for (var i = 0; i < sizesArray.length; i++) {
      let currArray = sizesArray[i];
      for (var j = 0; j < currArray.length; j++) {
        let imgName =
          currArray[j].label +
          "_" +
          currArray[j].actualWidth +
          "x" +
          currArray[j].actualHeight +
          ".png";

        if (
          currArray[j].actualHeight / currArray[j].actualWidth <
          dimensions.height / dimensions.width
        ) {
          const imgURL = await ResizeImage(
            image,
            currArray[j].actualHeight,
            currArray[j].actualWidth
          );
          const imgURL2 = await CropImage(
            imgURL,
            currArray[j].actualHeight,
            currArray[j].actualWidth
          );

          zip.file(imgName, imgURL2);
        } else {
          let resizeWidth =
            (currArray[j].actualHeight / dimensions.height) * dimensions.width;
          const imgURL = await ResizeImage(
            image,
            currArray[j].actualHeight,
            resizeWidth
          );
          const imgURL2 = await CropImage(
            imgURL,
            currArray[j].actualHeight,
            currArray[j].actualWidth
          );
          zip.file(imgName, imgURL2);
        }
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      FileSaver.saveAs(content, "images.zip");
    });
  }

  function DownloadSelectedImages() {
    const zip = require("jszip")();
    const FileSaver = require("file-saver");

    for (var i = 0; i < selectedImages.length; i++) {
      zip.file(selectedImages[i].name, selectedImages[i].file);
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      FileSaver.saveAs(content, "images.zip");
    });
  }

  return (
    <div className="bottom-bar">
      <h1>{selected}</h1>
      <div style={{ flexDirection: "column", marginLeft: "15px" }}>
        <p style={{ margin: "0" }}>Images</p>
        <p style={{ margin: "0" }}>Selected</p>
      </div>
      <div className="buttons-div">
        <Button
          variant="contained"
          className="bottom-buttons"
          onClick={DownloadAllImages}
        >
          {loading && (
            <CircularProgress
              style={{ color: "white", marginRight: "5px" }}
              size={20}
            />
          )}
          <DownloadIcon style={{ marginRight: "5px" }} /> All
        </Button>
        <Button
          variant="contained"
          className="bottom-buttons"
          onClick={DownloadSelectedImages}
        >
          <DownloadIcon style={{ marginRight: "5px" }} /> Selected
        </Button>
      </div>
    </div>
  );
}

export default BottomBar;
