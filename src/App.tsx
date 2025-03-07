import { useState } from "react";

import Countdown from "@/components/Countdown";
import mainImage from "@/assets/gallery/main.jpg";
import groomImage from "@/assets/gallery/groom.jpg";
import brideImage from "@/assets/gallery/bride.jpg";
import invitationCard from "@/assets/gallery/invitation-card@2x.jpg";
import Gallery from "@/components/Gallery";

function App() {
  const date = new Date("2025-03-15T00:00:00Z");
  const [showMap, setShowMap] = useState(false);
  const toggleMap = () => {
    setShowMap(!showMap);
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-y-4">
      <div className="flex flex-col items-center w-full aspect-[21/5] justify-center py-8">
        <h1 className="font-serif text-3xl text-primary text-bold">
          Boondariga & Anuwong
        </h1>
        <p className="font-normal text-gray-500">We're getting married</p>
        <div className="flex items-center justify-center p-8 md:p-0 md:mt-4 md:py-4">
          <img
            src={mainImage}
            alt=""
            className="w-full rounded-2xl md:w-1/2 md:max-w-xl lg:max-w-4xl"
          />
        </div>
        <p className="mt-12 mb-4 text-3xl font-bold tracking-wider md:mb-6 text-secondary">
          15 MARCH 2025
        </p>
        <Countdown date={date} />
      </div>
      <div className="flex flex-col items-center w-full py-10 text-white bg-primary">
        <p className="font-semibold font-thai">สถานที่จัดงาน</p>
        <p className="text-xl">Starwell Convention Center</p>
        <p className="mb-4 text-sm font-thai">ศูนย์ประชุมสตาร์เวลล์บาหลี</p>

        <button
          className="px-2 py-1 mt-2 text-sm font-bold bg-white rounded shadow text-primary font-thai"
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
      <div className="flex flex-col items-center p-4 gap-y-2">
        <p className="font-bold font-thai">กำหนดการณ์</p>
        <img
          src={invitationCard}
          alt="time-table"
          className="w-full md:max-w-xl lg:max-w-2xl"
        />
      </div>
      <div className="flex flex-col gap-x-4 gap-y-8 md:flex-row">
        <div className="flex flex-col items-center justify-center p-4 gap-y-2 font-thai">
          <p className="">เจ้าสาว</p>
          <div className="overflow-hidden rounded-full aspect-square">
            <img src={brideImage} alt="Groom" />
          </div>
          <p className="mt-4 text-xl font-bold">โบว์</p>
          <p>บุณฑริกา ศรีวัฒนพันธุ์</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-y-2 font-thai">
          <p className="">เจ้าบ่าว</p>
          <div className="overflow-hidden rounded-full aspect-square">
            <img src={groomImage} alt="Groom" />
          </div>
          <p className="mt-4 text-xl font-bold">บิล</p>
          <p>อนุวงศ์ มงคุดครบุรี</p>
        </div>
      </div>
      <div className="flex flex-col items-center px-2 py-10 gap-y-2">
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
