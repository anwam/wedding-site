import Countdown from "./components/Countdown";
import image from "./assets/gallery/1-resize.jpg";
import { Link } from "react-router";

function App() {
  const date = new Date("2025-03-15T00:00:00Z");
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center">
      <div className="flex flex-col items-center w-full aspect-[21/5] justify-center py-10">
        <h1 className="text-2xl text-primary text-bold">
          Boondariga & Anuwong
        </h1>
        <p className="text-primary text-bold">We're getting married</p>
        <p className="mt-16 text-3xl text-secondary">15 March 2025</p>
        <Countdown date={date} />
      </div>
      <div className="p-8 md:p-0">
        <img
          src={image}
          alt=""
          className="overflow-hidden md:max-w-xl rounded-2xl aspect-[6/5] object-cover object-[0px_40%]"
        />
      </div>
      <div className="flex flex-col items-center py-10 aspect-[21/10]">
        <p className="font-semibold font-thai">สถานที่</p>
        <p className="text-lg">Starwell Bali Resort</p>
        <p className="text-sm font-thai">สตาร์เวลล์บาหลี รีสอร์ท</p>
        <Link
          to={"/map"}
          className="px-2 py-1 mt-2 text-sm text-white rounded bg-secondary font-thai"
        >
          ดูแผนที่
        </Link>
      </div>
      <div className="w-full aspect-[21/9] flex flex-col items-center py-10 bg-secondary text-white">
        <p className="font-semibold font-thai">รู้จักเจ้าบ่าว - เจ้าสาว</p>
      </div>
      <div className="w-full aspect-[21/9] flex flex-col items-center py-10">
        <p className="font-semibold">Gallery</p>
      </div>
      <div className="w-full aspect-[21/9] flex flex-col items-center py-10">
        <p className="font-semibold font-thai">อวยพรเรา</p>
      </div>
    </div>
  );
}

export default App;
