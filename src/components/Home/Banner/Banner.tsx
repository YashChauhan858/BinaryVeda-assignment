/** -------- @Components ----------- */
import { Button } from "@/components";
/** -------- @Image ----------- */
import bannerImage from "@/assets/illustration.png";

const Banner = () => {
  return (
    <section className="flex flex-col justify-center pt-10 gap-5">
      <div className="flex flex-col gap-10">
        <h1 className="text-textColor font-bold text-4xl text-center">
          Let{"'"}s build the future of design, together
        </h1>
        <p className="text-textColor text-center text-lg w-[80%] mx-auto">
          Create amazing tools and integrations for over 2 million users or
          customise Marvel for your own team
        </p>
        <div className="flex gap-5 justify-center">
          <Button
            title="View the docs"
            mode="secondary"
            className="py-3 px-7"
          />
          <Button title="Manage your apps" className="py-3 px-7" />
        </div>
      </div>
      <div className="w-full grid place-content-center">
        <img
          src={bannerImage}
          className="object-contain w-[90%] mx-auto"
          alt="banner-img"
        />
      </div>
    </section>
  );
};

export default Banner;
