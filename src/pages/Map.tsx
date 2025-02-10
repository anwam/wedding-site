function Map() {
  return (
    <div className="p-4">
      <p>แผนที่</p>
      <p className="text-lg">Starwell Bali Resort</p>
      <p className="text-sm">สตาร์เวลล์บาหลี รีสอร์ท</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.4659294745793!2d102.07366994033944!3d15.02232348557571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194b81d9998de3%3A0x363f33552a839629!2sStarwell%20Bali%20Resort!5e0!3m2!1sen!2sth!4v1739182946668!5m2!1sen!2sth"
        width="300"
        height="200"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
