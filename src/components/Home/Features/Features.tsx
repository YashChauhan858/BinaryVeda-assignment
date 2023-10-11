/** -------- @Image ----------- */
import apiTeam from "@/assets/apiTeam.png";
import graphQL from "@/assets/graphQL.png";
import superchargeWorkflow from "@/assets/superchargeWorkflow.png";

/** -------- @Components ----------- */
import { FeatureCards } from "@components";

const Features = () => {
  const featureCard = [
    {
      image: apiTeam,
      header: "Dedicated API Team",
      description:
        "Our team are available to answer questions via our Slack Developer Community and Email",
    },
    {
      image: graphQL,
      header: "Our API uses GraphQL",
      description:
        "Giving you the flexibility to select all the data you need in single request",
    },
    {
      image: superchargeWorkflow,
      header: "Supercharge your workflow",
      description:
        "Automate workflow, extract designs and analyse data to take Marvel to the next level",
    },
  ];
  return (
    <section>
      <div className="flex flex-col justify-center mt-16 gap-10 sm:gap-5 sm:mt-32 sm:w-[50%] sm:mx-auto">
        <h2 className="text-textColor font-bold text-4xl sm:text-2xl text-center">
          Experience the freedom to build features, right away.
        </h2>
        <p className="text-textColor text-center text-lg sm:text-sm">
          You can now harness components of our platform and build powerful
          integrations for our 2 millions users - or simply just for your team.
        </p>
      </div>
      <div className="flex flex-col mt-9 gap-8 sm:flex-row sm:p-10">
        {featureCard.length !== 0 &&
          featureCard.map(({ image, header, description }) => (
            <FeatureCards
              key={header}
              image={image}
              header={header}
              description={description}
            />
          ))}
      </div>
    </section>
  );
};

export default Features;
