import coupleImage from "@/assets/gallery/couple.jpg";
import couple2Image from "@/assets/gallery/couple-2.jpg";
import kiss from "@/assets/gallery/kiss.jpg";
import sit from "@/assets/gallery/sit.jpg";
import smile from "@/assets/gallery/smile.jpg";
import stand from "@/assets/gallery/stand.jpg";
import firstImage from "@/assets/gallery/1.jpg";
import secondImage from "@/assets/gallery/2.jpg";

const images = [couple2Image, coupleImage, kiss];
const images2 = [firstImage, secondImage];
const images3 = [sit, smile, stand];

function Gallery() {
  return (
    <>
      <div className="flex flex-row gap-x-2 gap-y-2 w-full">
        {images.map((image, index) => (
          <div key={index} className="basis-1/3">
            <img src={image} alt="" className="object-contain w-full" />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-x-2 gap-y-2 w-full">
        {images2.map((image, index) => (
          <div key={index} className="basis-1/2">
            <img src={image} alt="" className="object-contain w-full" />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-x-2 gap-y-2 w-full">
        {images3.map((image, index) => (
          <div key={index} className="basis-1/3">
            <img src={image} alt="" className="object-contain w-full" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
