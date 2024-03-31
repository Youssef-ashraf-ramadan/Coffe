import "./preloader.css";

const PreLoader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style = "opacity: 0; z-index: -999;";
  }, 2500);
  return (
    <div className="preloader">
      <div className="cup">
        <div className="handle"></div>
      </div>
    </div>
  );
};

export default PreLoader;
