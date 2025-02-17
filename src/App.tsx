import Countdown from "./components/Countdown";
import mainImage from "./assets/gallery/main.jpg";
import groomImage from "./assets/gallery/groom.jpg";
import brideImage from "./assets/gallery/bride.jpg";
import { useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  const date = new Date("2025-03-15T00:00:00Z");
  const [showMap, setShowMap] = useState(false);
  const toggleMap = () => {
    setShowMap(!showMap);
  };
  return (
    <div className="flex flex-col flex-1 gap-y-4 justify-center items-center">
      <div className="flex flex-col items-center w-full aspect-[21/5] justify-center py-8">
        <h1 className="text-2xl text-primary text-bold">
          Boondariga & Anuwong
        </h1>
        <p className="text-primary text-bold">We're getting married</p>
        <div className="flex justify-center items-center p-8 md:p-0 md:py-4">
          <img
            src={mainImage}
            alt=""
            className="w-full rounded-2xl md:w-1/2 md:max-w-xl lg:max-w-2xl"
          />
        </div>
        <p className="mt-12 mb-4 text-3xl text-secondary">15 March 2025</p>
        <Countdown date={date} />
      </div>
      <div className="flex flex-col items-center py-10 aspect-[21/10]">
        <p className="font-semibold font-thai">สถานที่</p>
        <p className="text-lg">Starwell Convention Center</p>
        <p className="text-sm font-thai">ศูนย์ประชุมสตาร์เวลล์บาหลี</p>

        <button
          className="px-2 py-1 mt-2 text-sm text-white rounded bg-secondary font-thai"
          onClick={toggleMap}
        >
          ดูแผนที่
        </button>
        {showMap && (
          <div className="mt-4 [&_iframe]:w-full [&_iframe]:aspect-[4/3] w-fit">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.4659294745793!2d102.07366994033944!3d15.02232348557571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194b81d9998de3%3A0x363f33552a839629!2sStarwell%20Bali%20Resort!5e0!3m2!1sen!2sth!4v1739182946668!5m2!1sen!2sth"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
      <div className="w-full aspect-[21/9] flex flex-col items-center py-8 bg-secondary/25 text-gray-700">
        <p className="font-semibold font-thai">รู้จักเจ้าบ่าว - เจ้าสาว</p>
        <div className="flex flex-col gap-x-4 gap-y-8 p-4 px-8 lg:flex-row">
          <div className="flex flex-col gap-y-2 justify-center items-center p-4 bg-gray-50 rounded-xl font-thai">
            <p className="font-bold">เจ้าสาว</p>
            <p>โบว์ - บุณฑริกา ศรีวัฒนพันธุ์</p>
            <div className="overflow-hidden rounded">
              <img src={brideImage} alt="Groom" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 justify-center items-center p-4 bg-gray-50 rounded-xl font-thai">
            <p className="font-bold">เจ้าบ่าว</p>
            <p>บิล - อนุวงศ์ มงคุดครบุรี</p>
            <div className="overflow-hidden rounded">
              <img src={groomImage} alt="Groom" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 items-center px-2 py-10">
        <p className="mb-4 text-xl font-semibold text-primary">Gallery</p>
        <Gallery />
      </div>
      {/* <div className="w-full aspect-[21/9] flex flex-col items-center py-10">
        <p className="font-semibold font-thai">อวยพรเรา</p>
      </div> */}
    </div>
  );
}

export default App;
