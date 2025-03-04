const Map = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center pl-6 pr-6 pb-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1741099907734!6m8!1m7!1sWQ5M64JO1ykiDk3PlaNVug!2m2!1d-33.09785626178567!2d-68.47944123056546!3f219.85067520673508!4f-3.701493091021476!5f1.7109488099414079"
        width="100%"
        height="110%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
