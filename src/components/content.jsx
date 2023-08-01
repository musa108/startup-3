import photo from "/src/images/Photo.png";
import preview from "/src/images/Preview.png";
import preview_2 from "/src/images/Preview 2.png";
const Content = () => {
  return (
    <>
      <main className="bg-[#2F1893] flex flex-col justify-center items-center font-sans p-4 mt-4">
        <h1 className="text-[#FFFFFF] text-[42px] font-[700] w-[770px] text-center mt-4">
          We’ve created the product that will help your startup look better
        </h1>
        <img className="w-[770px] h-[433px] mt-6" src={photo} alt="" />
        <div className="flex justify-center items-center gap-6 text-[#fff] font-sans mt-14">
          <div className="flex justify-center gap-4 ">
            <img className="w-[170px] h-[110px]" src={preview} alt="" />
            <div className="flex flex-col justify-center">
              <h3 className="text-[14px] font-[700]">FELL OUR DESIGN</h3>
              <p className="text-[16px] font-[400] w-[244px]">
                Startup Design Framework contains components which can easily be
                integrated into almost any design.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <img className="w-[170px] h-[110px]" src={preview_2} alt="" />
           <div className="flex flex-col justify-center">
           <h3 className="text-[14px] font-[700]">HIGH RESOLUTION</h3>
            <p className="text-[16px] font-[400] w-[244px]">
              We did a 2.5K size high resolution photo that will suit even for a
              very web site.
            </p>
           </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
