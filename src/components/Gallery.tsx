import coupleImage from "@/assets/images/gallery/couple.jpg";
import couple2Image from "@/assets/images/gallery/couple-2.jpg";
import kiss from "@/assets/images/gallery/kiss.jpg";
import sit from "@/assets/images/gallery/sit.jpg";
import smile from "@/assets/images/gallery/smile.jpg";
import stand from "@/assets/images/gallery/stand.jpg";
import firstImage from "@/assets/images/gallery/1.jpg";
import secondImage from "@/assets/images/gallery/2.jpg";
import { cn } from "@/lib/utils";
import coupleWithCameras from "@/assets/images/gallery/couple-with-cameras.jpg";
import brideStandHandsIn from "@/assets/images/gallery/bride-stand-hands-in.jpg";
import groomStandCoffee from "@/assets/images/gallery/groom-stand-coffee.jpg";
import camera from "@/assets/images/gallery/camera.jpg";
import laughingBride from "@/assets/images/gallery/laughing-bride.jpg";
import holdingHand from "@/assets/images/gallery/holding-hand-with-ring.jpg";
import dancingBeach from "@/assets/images/gallery/dancing-beach.jpg";
import dancingBeach2 from "@/assets/images/gallery/dancing-beach-2.jpg";
import sweet from "@/assets/images/gallery/sweet-as-hell.jpg";
import lookBack from "@/assets/images/gallery/look-back.jpg";
import veil from "@/assets/images/gallery/bride-veil.jpg";

const imageList: Array<
  Array<{
    image: string;
    landscape: boolean;
    full?: boolean;
    flexAuto?: boolean;
    shrink?: boolean;
  }>
> = [
  [
    {
      image: couple2Image,
      landscape: false,
    },
    {
      image: coupleImage,
      landscape: false,
    },
    {
      image: kiss,
      landscape: false,
    },
  ],
  [
    {
      image: holdingHand,
      landscape: true,
      full: true,
    },
  ],
  [
    {
      image: sit,
      landscape: false,
    },
    {
      image: smile,
      landscape: false,
    },
    {
      image: stand,
      landscape: false,
    },
  ],
  [
    {
      image: firstImage,
      landscape: true,
    },
    {
      image: secondImage,
      landscape: true,
    },
  ],
  [
    {
      image: brideStandHandsIn,
      landscape: false,
    },
    {
      image: laughingBride,
      landscape: false,
    },
    {
      image: groomStandCoffee,
      landscape: false,
    },
  ],
  [
    {
      image: camera,
      landscape: true,
    },
    {
      image: coupleWithCameras,
      landscape: true,
    },
  ],
  [
    {
      image: sweet,
      landscape: true,
    },
    {
      image: dancingBeach2,
      landscape: true,
    },
  ],
  [
    {
      image: dancingBeach,
      landscape: true,
      full: true,
    },
  ],
  [
    {
      image: lookBack,
      landscape: true,
    },
    {
      image: veil,
      landscape: true,
    },
  ],
];

function Gallery() {
  return (
    <>
      {imageList.map((images, index) => (
        <div key={index} className="flex flex-row gap-x-2 gap-y-2 w-full">
          {images.map(
            ({ image, landscape, full, flexAuto, shrink }, imgIndex) => (
              <div
                key={imgIndex}
                className={cn({
                  "basis-1/2": landscape && !flexAuto,
                  "basis-1/3": !landscape && !flexAuto,
                  "basis-full": full,
                  "flex-auto": flexAuto && !shrink,
                  "flex-shrink": shrink,
                })}
              >
                <img
                  src={image}
                  alt=""
                  className={cn("object-contain w-full")}
                />
              </div>
            )
          )}
        </div>
      ))}
    </>
  );
}

export default Gallery;
