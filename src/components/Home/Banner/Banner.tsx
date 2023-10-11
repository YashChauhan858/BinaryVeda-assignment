/** -------- @Components ----------- */
import { Button } from "@/components";
/** -------- @Image ----------- */
import bannerImage from "@/assets/illustration.png";

const Banner = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:w-[90%] sm:mx-auto md:w-[768px] lg:w-[1000px] md:px-16 justify-center pt-10 gap-5">
      <div className="flex flex-col justify-center gap-10 sm:gap-5">
        <h1 className="text-textColor font-bold text-4xl sm:text-2xl text-center">
          Let{"'"}s build the future of design, together
        </h1>
        <p className="text-textColor text-center text-lg sm:text-sm w-[80%] mx-auto">
          Create amazing tools and integrations for over 2 million users or
          customise Marvel for your own team
        </p>
        <div className="flex gap-5 justify-center">
          {/* sm < */}
          <Button
            title="View the docs"
            mode="secondary"
            className="py-3 px-7 sm:hidden"
          />
          <Button title="Manage your apps" className="py-3 px-7 sm:hidden" />
          {/* sm > */}
          <Button
            title="Submit your app"
            mode="primary"
            className="hidden sm:block sm:text-sm sm:font-semibold"
          />
          <Button
            title="View API Docs"
            mode="secondary"
            className="hidden sm:block sm:text-sm sm:font-semibold"
          />
        </div>
      </div>
      <div className="w-full grid place-content-center">
        <img
          src={bannerImage}
          className="object-contain w-[90%] mx-auto md:w-full"
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default Banner;
