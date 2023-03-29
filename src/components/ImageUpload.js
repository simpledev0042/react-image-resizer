import "./ImageUpload.css";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Button, TextField, InputAdornment } from "@mui/material";
import { Center } from "@chakra-ui/react";
import LinkIcon from "@mui/icons-material/Link";
import { setImage } from "../redux/Image/image.actions";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { setDimensions } from "../redux/Dimensions/dimensions.actions";
import CircularProgress from "@mui/material/CircularProgress";

function ImageUpload() {
  const images = useSelector((state) => state.imageReducer.images);
  const image = images.inputImage;
  const dispatch = useDispatch();
  const dimensions = useSelector((state) => state.dimensionsReducer.dimensions);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const onFileUploadHandler = (file) => {
    const imgURL = URL.createObjectURL(file);
    dispatch(
      setImage({
        ...images,
        inputImage: imgURL,
        outputImage: imgURL,
      })
    );

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  function onImgLoad({ target: img }) {
    setSuccess(true);
    dispatch(
      setDimensions({
        ...dimensions,
        height: img.offsetHeight,
        width: img.offsetWidth,
      })
    );
    document.getElementById("srcImage").hidden = true;
  }

  function DeleteImageHandler() {
    dispatch(
      setImage({
        ...images,
        inputImage: "",
        outputImage: "",
      })
    );
  }

  const [imageURL, setImageURL] = useState("");
  const [isURLError, setIsURLError] = useState(false);

  function ImageURLChangeHandler(e) {
    setImageURL(e.target.value);
  }

  function URLimageUploader() {
    if (
      imageURL === ""
      // || !imageURL.match(/\.(jpeg|jpg|gif|png)$/)
      // || !imageURL.includes("jpg") ||
      // !imageURL.includes("jpeg") ||
      // !imageURL.includes("png") ||
      // !imageURL.includes("gif")
    ) {
      setIsURLError(true);
    } else {
      setIsURLError(false);
      toDataURL(imageURL).then((dataUrl) => {
        var filename = imageURL.split("/").pop().split("#")[0].split("?")[0];
        var fileData = dataURLtoFile(dataUrl, filename);
        onFileUploadHandler(fileData);
      });
    }
  }

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  return (
    <div className="Image-upload-area">
      <div className="upload-image-button-container">
        <TextField
          label="Image URL"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "32ch" }}
          onChange={ImageURLChangeHandler}
          placeholder="https://"
          error={isURLError}
          helperText={isURLError && "Enter Valid URL"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
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
        <Button
          variant="contained"
          onClick={URLimageUploader}
          style={{
            height: "50px",
            marginTop: "10px",
            marginLeft: "10px",
            fontFamily: "Poppins",
          }}
        >
          Go
        </Button>
      </div>
      <p
        style={{
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        OR
      </p>
      <div className="Image-upload-border">
        <div className="Image-upload-box">
          <Dropzone
            id="image-dropzone"
            onDrop={(acceptedFiles) => onFileUploadHandler(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    accept="image/png, image/jpg, image/jpeg"
                  />
                  <Button
                    size="large"
                    variant="contained"
                    style={{
                      fontFamily: "Poppins",
                      marginTop: "6px",
                      marginBottom: "20px",
                    }}
                  >
                    {image ? "Change Image" : "Upload Image"}
                  </Button>
                  {!image && <p>or, drag and drop your image here</p>}
                  <Center>
                    {loading && <CircularProgress size={50} />}
                    {success && <img className="Uploaded-image" src={image} />}
                  </Center>
                </div>
              </section>
            )}
          </Dropzone>
          {image && (
            <Button
              onClick={DeleteImageHandler}
              style={{ fontFamily: "Poppins" }}
            >
              <DeleteIcon style={{ marginRight: "10px" }} />
              Delete
            </Button>
          )}
          <img id="srcImage" onLoad={onImgLoad} src={image} />
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
