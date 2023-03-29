import './ImageUpload.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { Button } from '@mui/material'
import { Center } from '@chakra-ui/react';
import DownloadIcon from '@mui/icons-material/Download';

function ImageDownload() {

    const images = useSelector((state) => state.imageReducer.images)
    const image = images.outputImage

    function DownloadImage() {
        const FileSaver = require('file-saver');
        FileSaver.saveAs(image, "image.png");
    }

    return (
        <div className="Image-upload-area">
            <div style={{ width: "100%" }}>
                <Center>
                    {image && <img
                        className="Uploaded-image"
                        src={image}
                    />}
                </Center>
            </div>
            <Button
                style={{ marginTop: "30px", height: "70px" }}
                variant="contained"
                onClick={DownloadImage}
            >
                <DownloadIcon
                    style={{ marginRight: "10px", fontSize: "28px" }}
                />
                <p
                    style={{ fontSize: "20px", fontFamily: "Poppins" }}
                >Download</p>
            </Button>
        </div >
    );
}

export default ImageDownload;
