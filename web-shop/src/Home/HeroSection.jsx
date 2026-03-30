import logo from "../assets/images/logo.png";
function HeroSection() {
  return (
    <section className="bg-white">
      <div className="relative max-w-300 mx-auto rounded-lg overflow-hidden">
        <div
          className="z-0 w-full bg-cover bg-center h-100 "
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="z-10 absolute top-10 left-10">
          <div>
            <h1 className="text-white text-5xl max-w-300 mb-4">
              Elevate Your <br />
              <span>Academic Journey</span>
            </h1>
            <p className="text-white max-w-100 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, soluta?
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 shadow-blue-500/50 py-3 px-8 rounded-md text-white">
              Shop now
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2  flex space-x-2 bottom-4">
          <span className="rounded-full w-3 h-3 bg-white"></span>
          <span className="rounded-full w-3 h-3 bg-white/50"></span>
          <span className="rounded-full w-3 h-3 bg-white/50"></span>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
