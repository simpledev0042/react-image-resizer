import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import ImageUpload from './ImageUpload';
import ImageDownload from './ImageDownload';
import ImageProcessing from './ImageProcessing';

export default function ImageResizer() {

    // Stepper Functions

    const steps = ['Upload an image', 'Select size', 'Download image'];
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="Image-upload-area">
            <Box sx={{ width: '100%', margin: "0 30px" }}>
                <h1 style={{ width: '100%', textAlign: 'center', color: "black", margin: "1vh 0", fontSize: "50px" }}>
                    Image Resizer
                </h1>
                <h2 style={{ width: '100%', textAlign: 'center', color: "black", margin: "2vh 0 10vh 0" }}>
                    Easily resize images.
                </h2>
                <Stepper
                    activeStep={activeStep}
                >
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel
                                    {...labelProps}
                                >
                                    <p style={{ fontFamily: "Poppins" }}>{label}</p>
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <React.Fragment>
                    <br />
                    {activeStep === 0 && <ImageUpload />}
                    {activeStep === 1 && <ImageProcessing />}
                    {activeStep === 2 && <ImageDownload />}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1, fontFamily: "Poppins" }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {activeStep === steps.length - 1 ? (
                            <Button
                                onClick={handleReset}
                                style={{ fontFamily: "Poppins" }}
                            >
                                Reset
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                style={{ fontFamily: "Poppins" }}
                            >
                                Next
                            </Button>
                        )}
                    </Box>
                </React.Fragment>
            </Box>
        </div>
    );
}