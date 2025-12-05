import React from "react";
import Image1 from "./images/components/1.webp";
import Image2 from "./images/components/2.webp";
import Image3 from "./images/components/3.webp";
import Image4 from "./images/components/4.webp";
import Image5 from "./images/components/5.webp";
import Image6 from "./images/components/6.webp";
import Image7 from "./images/components/8.webp";
import Image8 from "./images/components/9.webp";
import Image9 from "./images/components/10.webp";
import Image10 from "./images/components/11.webp";
import Image11 from "./images/components/12.webp";
import Image12 from "./images/components/13.webp";
const rankings = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 },
    { image: Image7 },
    { image: Image8 },
    { image: Image9 },
    { image: Image10 },
    { image: Image11 },
    { image: Image12 },
   
];
const ImageMarquee = () => {
    return (
        <div className="container">
            <div className="marquee-wrapper"><br />
                <div className="marquee">
                    {[...rankings, ...rankings].map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt={`Rank ${index + 1}`}
                            className="marquee-img company_image_border"
                        />
                    ))}
                </div>
            </div><br/>
        </div>
    );
};

export default ImageMarquee;
