type LocationDetail = {
  name: string;
  url?: string;
};
const hotels: Array<LocationDetail> = [
  { name: "Starwell Bali Resort" },
  { name: "Centara Korat" },
  { name: "Koranaree Courtyard Boutique Hotel" },
  { name: "Kantary Hotel Korat" },
  { name: "Centre Point Hotel Terminal21 Korat" },
];

const cafeList: Array<LocationDetail> = [
  {
    name: "PHASE",
    url: "https://www.facebook.com/Phasetheofficial",
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
    <div className="flex flex-col gap-y-4 p-4 lg:p-0 font-thai">
      <h2 className="font-semibold">แนะนำสถานที่</h2>
      <div>
        <h3 className="mb-1 font-bold">โรงแรม</h3>
        <ul>
          {hotels.map((hotel, index) => (
            <li key={`${hotel.name}${index}`} className="list-item gap-x-2">
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
      <div>
        <h3 className="mb-1 font-bold">ร้านอาหาร & คาเฟ่</h3>
        <ul>
          {cafeList.map((cafe, index) => (
            <li key={`${cafe.name}${index}`} className="flex gap-x-2">
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
      {/* <div>
        <h3 className="mb-1 font-bold">พักผ่อน & Entertainment</h3>
        <p>WIP</p>
      </div> */}
    </div>
  );
}

export default Recommended;
