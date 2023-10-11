/** -------- @Image ----------- */
import botbot from "@/assets/botbot.png";
import showcase from "@/assets/showcase.png";
/** -------- @Components ----------- */
import { Button } from "@/components";

const Services = () => {
  return (
    <section className="flex flex-col mt-20 gap-20 p-5 sm:flex-col-reverse sm:w-full md:w-[768px] md:mx-auto">
      {/* Section 1 */}
      <div className="flex flex-col gap-10 items-center sm:flex-row sm:gap-0">
        <img
          src={botbot}
          alt="marvel-bot"
          className="object-contain sm:w-[100%]"
        />
        <div className="flex flex-col justify-center gap-5 sm:gap-5">
          <h1 className="text-textColor font-bold text-3xl sm:text-2xl text-center">
            BotBot - Slack Bot for creating and managing prototype
          </h1>
          <p className="text-textColor text-center text-base sm:text-sm w-[80%] mx-auto">
            Check out our API example BotBot, a bot for creating, viewing and
            managing prototypes by simply using Slash Commands in Slack. Grab
            the code and make your own bot!
          </p>
          <div className="flex flex-col gap-5 w-[50%] mx-auto justify-center sm:flex-row sm:w-full">
            {/* sm < */}
            <Button
              title="View on Github"
              mode="secondary"
              className="py-3 px-7 sm:text-sm sm:px-4 sm:py-1"
            />
            <Button
              title="Try the demo"
              className="py-3 px-7 sm:text-sm sm:px-4 sm:py-1"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col gap-10 items-center sm:gap-0 sm:flex-row-reverse">
        <img
          src={showcase}
          alt="app-integration"
          className="object-contain sm:w-[100%]"
        />
        <div className="flex flex-col justify-center gap-5 sm:gap-5">
          <h1 className="text-textColor font-bold text-3xl sm:text-2xl text-center">
            Showcase your app in our integrations directory
          </h1>
          <p className="text-textColor text-center text-base sm:text-sm w-[80%] mx-auto">
            Building something special? We're always looking to work with
            partners who want to help the world bring their ideas to life
          </p>
          <div className="flex flex-col gap-5 w-[50%] mx-auto justify-center sm:flex-row sm:w-full">
            {/* sm < */}
            <Button
              title="Become a partner"
              mode="secondary"
              className="text-sm"
            />
            <Button title="View Integrations" className="text-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
