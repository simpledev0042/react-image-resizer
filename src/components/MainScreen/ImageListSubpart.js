import React from "react";
import "./ImageLists.css";
import { useSelector } from "react-redux";
import Masonry from "@mui/lab/Masonry";
import ImageListPart from "./ImageListPart";

function ImageListSubpart(props) {
  const { sizes } = props;
  const images = useSelector((state) => state.imageReducer.images);
  const image = images.inputImage;

  return (
    <div className="Image-list Container">
      {image && (
        <Masonry
          id="Image-list-div"
          columns={{ md: 3, sm: 2, xs: 1 }}
          spacing={1}
        >
          {sizes.map((item) => (
            <ImageListPart item={item} />
          ))}
        </Masonry>
      )}
    </div>
  );
}

export default ImageListSubpart;
