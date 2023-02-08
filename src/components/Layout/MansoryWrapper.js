import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import image1 from "../../assets/photos/1.jpg"
import image2 from "../../assets/photos/2.jpg"
import image3 from "../../assets/photos/3.jpg"
import image4 from "../../assets/photos/4.jpg"
import image5 from "../../assets/photos/5.jpg"
import image6 from "../../assets/photos/6.jpg"
import image7 from "../../assets/photos/7.jpg"
import image8 from "../../assets/photos/8.jpg"
import image9 from "../../assets/photos/9.jpg"
import image10 from "../../assets/photos/10.jpg"
import image11 from "../../assets/photos/11.jpg"
import image12 from "../../assets/photos/12.jpg"
import image13 from "../../assets/photos/13.jpg"
import image14 from "../../assets/photos/14.jpg"
import image15 from "../../assets/photos/15.jpg"
import image16 from "../../assets/photos/16.jpg"

const images = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    alt: "Image 4",
  },
  {
    src: image5,
    alt: "Image 5",
  },
  {
    src: image6,
    alt: "Image 6",
  },
  {
    src: image7,
    alt: "Image 7",
  },
  {
    src: image8,
    alt: "Image 8",
  },
  {
    src: image9,
    alt: "Image 9",
  },
  {
    src: image10,
    alt: "Image 10",
  },
  {
    src: image11,
    alt: "Image 11",
  },
  {
    src: image12,
    alt: "Image 12",
  },
  {
    src: image13,
    alt: "Image 13",
  },
  {
    src: image14,
    alt: "Image 14",
  },
  {
    src: image15,
    alt: "Image 15",
  },
  {
    src: image16,
    alt: "Image 16",
  },
 
];

const MansoryWrapper = () => {
  const [gridImages, setGridImages] = useState(images.slice(0, 9));


  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setGridImages((prevImages) => [
        ...prevImages,
        ...images.slice(prevImages.length, prevImages.length + 9),
      ]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images]);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="35px">
        {gridImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MansoryWrapper;
