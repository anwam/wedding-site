type LocationDetail = {
  name: string;
  url?: string;
  recommended?: boolean;
};
const hotels: Array<LocationDetail> = [
  {
    name: "Starwell Bali Resort",
    url: "https://maps.app.goo.gl/XVq6CNKkAgUAMixC8",
  },
  {
    name: "B2 Korat Premium Hotel",
    url: "https://maps.app.goo.gl/98N2ya8QA4gYpasy9",
  },
  {
    name: "KIO Hotel Korat",
    url: "https://maps.app.goo.gl/Qa1y2CLKdkrVUV1EA",
  },
  { name: "Centara Korat", url: "https://maps.app.goo.gl/wPLA381RHB1RVcc19" },
  {
    name: "Koranaree Courtyard Boutique Hotel",
    url: "https://maps.app.goo.gl/fz6r2muiXtpUddJb9",
  },
  {
    name: "Kantary Hotel Korat",
    url: "https://maps.app.goo.gl/QuAUphBEZPVcNXDK7",
  },
  {
    name: "Centre Point Hotel Terminal21 Korat",
    url: "https://maps.app.goo.gl/gP1X51o9uUawaS1v6",
  },
  {
    name: "Hop Inn Korat",
    url: "https://maps.app.goo.gl/dcNdpqCSj4MjSJxa6",
  },
];

const cafeList: Array<LocationDetail> = [
  {
    name: "PHASE",
    url: "https://www.facebook.com/Phasetheofficial",
  },
  {
    name: "S-Curve Specialty Coffee",
    url: "https://maps.app.goo.gl/AiH9tukN6gox5tsb7",
  },
  {
    name: "ครูยอดขนมจีนประโดก",
    url: "https://www.facebook.com/Krooyordrestaurant",
  },
  {
    name: "ราดหน้าปิยะ",
    url: "https://maps.app.goo.gl/YwKgV6LkCLWbqcpE7",
  },
  {
    name: "ขึ้นชื่อ ก๋วยเตี๋ยวเรือ",
    url: "https://maps.app.goo.gl/W2oFnXAuWRj4N4M66",
  },
  {
    name: "8 Dining - Fine dining",
    url: "https://maps.app.goo.gl/zvJatjtLUajEFVVj7",
  },
  {
    name: "ครัวสุวิมล",
    url: "https://maps.app.goo.gl/m1EQUrwEMhPpR76o7",
  },
  {
    name: "โกปี๊ฮับ โคราช",
    url: "https://maps.app.goo.gl/ZRFCL8odebUDVf137",
  },
  {
    name: "ยูโทเปีย Bar B Q",
    url: "https://maps.app.goo.gl/wWyyixDwHUG1LvT17",
  },
  {
    name: "มีแฮง",
    url: "https://maps.app.goo.gl/DQkufxLyrci3tRc99",
  },
];

function Recommended() {
  return (
    <div className="p-4 lg:p-0 font-thai">
      <h2 className="mt-4 mb-4 text-3xl font-semibold">สถานที่แนะนำ</h2>
      <div className="flex flex-col mb-4">
        <h3 className="mb-1 font-bold">โรงแรม</h3>
        <ul className="">
          {hotels.map((hotel, index) => (
            <li
              key={`${hotel.name}${index}`}
              className="list-item gap-x-2 w-fit"
            >
              <a
                target="_blank"
                href={hotel.url}
                className="text-blue-400 underline"
              >
                <h4>{hotel.name}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="mb-1 font-bold">ร้านอาหาร & คาเฟ่</h3>
        <ul>
          {cafeList.map((cafe, index) => (
            <li
              key={`${cafe.name}${index}`}
              className="list-item gap-x-2 w-fit"
            >
              <a
                target="_blank"
                href={cafe.url}
                className="text-blue-400 underline"
              >
                <h4>{cafe.name}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4" />
      <h3 className="text-xl font-bold">Our Picks</h3>
      <a
        target="_blank"
        href="https://maps.app.goo.gl/E91MnMumCZ486mHb7"
        className="font-bold text-blue-400 underline"
      >
        ร้านมวลสารความอร่อย จ. ขอนแก่น
      </a>
      {/* <div>
        <h3 className="mb-1 font-bold">พักผ่อน & Entertainment</h3>
        <p>WIP</p>
      </div> */}
    </div>
  );
}

export default Recommended;
