import React from "react";

const RotatingImages = () => {
  return (
    <>
      <style>
        {`
          @media(max-width: 500px) {
            .outer_1 {
              width: 400px;
            }
            .inner_2 {
              width: 295px !important;
            }
            .core_3 {
              width: 180px;
            }
          }
          @media(max-width: 370px) {
            .outer_1 {
              width: 300px !important;
            }
            .inner_2 {
              width: 210px !important;
            }
            .core_3 {
              width: 120px !important;
            }
          }
          html, body {
            margin: 0;
            height: 100%;
          }

          .outer_1, .inner_2, .core_3 {
            position: absolute;
            border-radius: 50%;
          }
          .outer_1 {
            z-index: 0;
            animation: clock 50s linear infinite;
          }
          .inner_2 {
            width: 360px;
            z-index: 1;
            animation: anti-clock 50s linear infinite;
          }
          .core_3 {
            z-index: 2;
          }

          .image {
            position: relative;
            height: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @keyframes clock {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes anti-clock {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
      <div className="image">
        <img
          className="outer_1"
          src="https://aec.edu.in/relieving_appointment/outer.png"
          alt="outer_1"
        />
        <img
          className="inner_2"
          src="https://aec.edu.in/relieving_appointment/inner.png"
          alt="inner_2"
        />
        <img
          className="core_3"
          src="https://aec.edu.in/relieving_appointment/aditya.png"
          alt="core_3"
        />
      </div>
    </>
  );
};

export default RotatingImages;
