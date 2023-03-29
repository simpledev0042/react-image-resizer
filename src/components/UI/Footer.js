import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FacebookLogo from "../../assets/facebook.png";
import TwitterLogo from "../../assets/twitter.png";
import LogoWhite from "../../assets/logo-white.png";
import "./Footer.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Copyright() {
  return (
    <p style={{ fontSize: "12px", padding: "5px", color: "#999" }}>
      Copyright © 2022. All rights reserved.
    </p>
  );
}

export default function Footer() {
  return (
    <Box
      style={{
        bottom: 0,
      }}
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#313131",
      }}
    >
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              paddingBottom: "20px",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "16px",
              }}
            >
              <img height="40px" src={FacebookLogo} alt="" />
              <p
                style={{
                  padding: "16px",
                  color: "#999",
                  fontSize: "14px",
                  fontWeight: "1000",
                  letterSpacing: "1px",
                }}
              >
                Facebook
              </p>
            </div>
            <div
              style={{
                flexWrap: "wrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img height="36px" src={TwitterLogo} alt="" />
              <p
                style={{
                  padding: "16px",
                  color: "#999",
                  fontSize: "14px",
                  fontWeight: "1000",
                  letterSpacing: "1px",
                }}
              >
                Twitter
              </p>
            </div>
          </div>
          <hr
            style={{
              minWidth: "100%",
              border: "none",
              height: "1px",
            }}
            color="#4a4a4a"
          ></hr>
          <br />

          <img height="40px" src={LogoWhite} alt="" />
          <br />
          <ul
            className="footerMenu"
            style={{
              display: "flex",
              marginBotton: "10px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="#">
              <li>Cookie Policy</li>
            </a>
            <a href="#">
              <li>FTC Disclosure</li>
            </a>
            <a href="#">
              <li>Privacy Policy</li>
            </a>
            <a href="#">
              <li>Terms and Conditions</li>
            </a>
            <a href="#">
              <li>Terms of Use</li>
            </a>
          </ul>
          <Copyright />
          <div
            className="topButton"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <KeyboardArrowUpIcon />
              Back to Top
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}