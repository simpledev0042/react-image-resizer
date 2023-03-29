import './ImageProcessing.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../redux/Image/image.actions'
import { Checkbox, Slider, TextField, Button } from '@mui/material';
import FlipSharpIcon from '@mui/icons-material/FlipSharp';
import Draggable from 'react-draggable';

async function ResizeImage(image, newHeight, newWidth, flip) {

  // fetch the input image and get its content bytes
  const fetchedSourceImage = await fetch(image);
  const sourceBytes = new Uint8Array(await fetchedSourceImage.arrayBuffer());

  // calling ImageMagick with one source image, and command to rotate & resize image
  const inputFiles = [{ name: 'srcFile.png', content: sourceBytes }];
  let command = [];
  if (!flip) {
    command = JSON.parse('[ "convert", "srcFile.png", "-resize","' + newWidth + "x" + newHeight + '!", "out.png" ]')
  } else {
    command = JSON.parse('[ "convert", "srcFile.png", "-flop", "out.png" ]');
  }

  //debugger;
  const processedFiles = await window.magick.Call(inputFiles, command);

  // response can be multiple files (example split) here we know we just have one
  const firstOutputImage = processedFiles[0];
  const url = URL.createObjectURL(firstOutputImage['blob']);
  return url
}

function ImageProcessing() {

  const images = useSelector((state) => state.imageReducer.images)
  const image = images.inputImage
  const outputImage = images.outputImage
  const dimensions = useSelector((state) => state.dimensionsReducer.dimensions)

  const dispatch = useDispatch()
  const [outputImageSrc, setOutputImageSrc] = useState(image)

  const scale = Math.max(
    450 / dimensions.width,
    300 / dimensions.height
  );

  const ResizeHandler = async (newHeight, newWidth, flip = false) => {
    let imgURL
    if (!flip) {
      imgURL = await ResizeImage(image, newHeight, newWidth, flip)
      dispatch(setImage({
        ...images,
        outputImage: imgURL
      }));
    } else {
      let inputImgURL = await ResizeImage(outputImage, newHeight, newWidth, flip)
      imgURL = await ResizeImage(outputImage, newHeight, newWidth, flip)
      dispatch(setImage({
        ...images,
        inputImage: inputImgURL,
        outputImage: imgURL
      }));
    }

    setOutputImageSrc(imgURL);
  }

  const [imageDimensions, setImageDimensions] = React.useState(dimensions);

  const [percentDimensions, setPercentDimensions] = React.useState({
    height: 100,
    width: 100
  });

  const [zoom, setZoom] = useState(0)

  const [displayDimensions, setDisplayDimensions] = React.useState({
    height: dimensions.height * scale * ((zoom / 1000) + 1),
    width: dimensions.width * scale * ((zoom / 1000) + 1)
  });

  function HeightChangeHandler(event) {
    let newYScale = (event.target.value / imageDimensions.height) * percentDimensions.height
    let newWidth = imageDimensions.width
    let newXScale = percentDimensions.width

    if (lockAspectRatio) {
      newWidth = (event.target.value / imageDimensions.height) * imageDimensions.width
      newXScale = (newWidth / imageDimensions.width) * percentDimensions.width
    }

    setImageDimensions({
      height: event.target.value,
      width: newWidth
    })

    setDisplayDimensions({
      height: event.target.value * scale * ((zoom / 1000) + 1),
      width: newWidth * scale * ((zoom / 1000) + 1)
    })

    setPercentDimensions({
      height: newYScale,
      width: newXScale
    })

    ResizeHandler(event.target.value, newWidth)
  }

  function WidthChangeHandler(event) {
    let newHeight = imageDimensions.height
    let newXScale = (event.target.value / imageDimensions.width) * percentDimensions.width
    let newYScale = percentDimensions.height

    if (lockAspectRatio) {
      newHeight = (event.target.value / imageDimensions.width) * imageDimensions.height
      newYScale = (newHeight / imageDimensions.height) * percentDimensions.height
    }

    setImageDimensions({
      width: event.target.value,
      height: newHeight
    })

    setDisplayDimensions({
      height: newHeight * scale * ((zoom / 1000) + 1),
      width: event.target.value * scale * ((zoom / 1000) + 1)
    })

    setPercentDimensions({
      height: newYScale,
      width: newXScale
    })

    ResizeHandler(newHeight, event.target.value)
  }

  function XScaleChangeHandler(event) {
    let newWidth = (imageDimensions.width / percentDimensions.width) * event.target.value
    let newHeight = imageDimensions.height
    let newYScale = percentDimensions.height

    if (lockAspectRatio) {
      newHeight = (event.target.value / percentDimensions.width) * imageDimensions.height
      newYScale = event.target.value
    }

    setPercentDimensions({
      width: event.target.value,
      height: newYScale
    })

    setImageDimensions({
      width: newWidth,
      height: newHeight
    })

    setDisplayDimensions({
      height: newHeight * scale * ((zoom / 1000) + 1),
      width: newWidth * scale * ((zoom / 1000) + 1)
    })

    ResizeHandler(newHeight, newWidth)
  }

  function YScaleChangeHandler(event) {
    let newHeight = (imageDimensions.height / percentDimensions.height) * event.target.value
    let newWidth = imageDimensions.width
    let newXScale = percentDimensions.width

    if (lockAspectRatio) {
      newWidth = (event.target.value / percentDimensions.height) * imageDimensions.width
      newXScale = event.target.value
    }

    setPercentDimensions({
      height: event.target.value,
      width: newXScale
    })

    setImageDimensions({
      width: newWidth,
      height: newHeight
    })

    setDisplayDimensions({
      height: newHeight * scale * ((zoom / 1000) + 1),
      width: newWidth * scale * ((zoom / 1000) + 1)
    })

    ResizeHandler(newHeight, newWidth)
  }

  function ZoomChangeHandler(event) {
    setZoom(event.target.value)
    setDisplayDimensions({
      height: imageDimensions.height * scale * (event.target.value + 1),
      width: imageDimensions.width * scale * (event.target.value + 1)
    })
  }

  const [lockAspectRatio, setLockAspectRatio] = useState(true)

  function LockAspectRatioChangeHandler() {
    let currBool = lockAspectRatio
    setLockAspectRatio(!currBool)
  }

  function FlipHandler() {
    ResizeHandler(imageDimensions.height, imageDimensions.width, true)
  }

  return (
    <div className="Processing-container">
      <div className="Subcontainer">
        <div className="Image-container">
          <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[25, 25]}
            scale={1}
          >
            <img
              id="editedImage"
              src={outputImageSrc}
              className="handle"
              style={{ zIndex: "-1", width: displayDimensions.width, height: displayDimensions.height }}
              draggable="false"
            />
          </Draggable>
        </div>
        <br />
        <Slider
          aria-label="Volume"
          id="Slider-zoom"
          value={zoom}
          max={20}
          onChange={ZoomChangeHandler}
        />
      </div>
      <br />
      <br />
      <div className="Edit-image-div Subcontainer">
        <Button
          id="Flip-button"
          size="small"
          color="primary"
          aria-label="add"
          variant="contained"
          onClick={FlipHandler}
          style={{ fontFamily: "Poppins" }}
        >
          <FlipSharpIcon
            sx={{ mr: 1 }}
          />
          Horizontal Flip
        </Button>
        <br />
        <TextField
          label="Width"
          id="width-px-textfield"
          sx={{ m: 1, width: '12ch' }}
          onChange={WidthChangeHandler}
          value={imageDimensions.width}
          InputProps={{
            endAdornment: "px",
            style: {
              fontFamily: "Poppins",
            },
          }}
          InputLabelProps={{
            style: {
              fontFamily: "Poppins",
            },
          }}
        />
        <TextField
          label="Height"
          id="height-px-textfield"
          sx={{ m: 1, width: '12ch' }}
          onChange={HeightChangeHandler}
          value={imageDimensions.height}
          InputProps={{
            endAdornment: "px",
            style: {
              fontFamily: "Poppins",
            },
          }}
          InputLabelProps={{
            style: {
              fontFamily: "Poppins",
            },
          }}
        />

        <br />
        <br />

        <TextField
          label="X Scale"
          id="height-textfield"
          sx={{ m: 1, width: '12ch' }}
          onChange={XScaleChangeHandler}
          value={percentDimensions.height}
          InputProps={{
            endAdornment: "%",
            style: {
              fontFamily: "Poppins",
            },
          }}
          InputLabelProps={{
            style: {
              fontFamily: "Poppins",
            },
          }}
        />
        <TextField
          label="Y Scale"
          id="width-textfield"
          sx={{ m: 1, width: '12ch' }}
          onChange={YScaleChangeHandler}
          value={percentDimensions.width}
          InputProps={{
            endAdornment: "%",
            style: {
              fontFamily: "Poppins",
            },
          }}
          InputLabelProps={{
            style: {
              fontFamily: "Poppins",
            },
          }}
        />
        <br />
        <div
          className="Aspect-ratio-div"
          style={{ display: "flex" }}
        >
          <Checkbox
            checked={lockAspectRatio}
            onChange={LockAspectRatioChangeHandler}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <p>Lock Aspect Ratio</p>
        </div>
      </div>
    </div >
  );
}

export default ImageProcessing;
