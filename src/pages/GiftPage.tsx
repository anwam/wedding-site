import QRCode from "@/assets/images/gallery/qr-code.jpg";

function GiftPage() {
  return (
    <div className="p-4 font-thai">
      <h1 className="font-semibold">ให้ของขวัญเรา</h1>
      <p className="mb-4 max-w-xl text-xl">
        สำหรับท่านที่ไม่สะดวกมาร่วมงาน แต่อยากมอบของขวัญให้บ่าว-สาว
        สามารถส่งของขวัญได้ผ่านทางเลขบัญชีหรือ QR Code ด้านล่างนี้
      </p>
      <p>
        ชื่อบัญชี <span className="font-bold">น.ส. บุณฑริกา ศรีวัฒนพันธุ์</span>
      </p>
      <p>
        พร้อมเพย์ <span className="font-bold">088-3564336</span>
      </p>
      <p>
        เลขบัญชี <span className="font-bold">982-5-46558-1</span>
      </p>
      <p>
        <span className="font-bold">ธนาคารกรุงไทย</span>
      </p>

      <hr className="my-4" />
      <img src={QRCode} alt="qr-code" className="mx-auto w-4/5" />
    </div>
  );
}

export default GiftPage;
