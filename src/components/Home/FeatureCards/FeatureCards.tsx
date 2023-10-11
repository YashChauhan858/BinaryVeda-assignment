interface IFeatureCards {
  image?: string;
  imageAlt?: string;
  header?: string;
  description?: string;
}

const FeatureCards = ({
  image = "",
  imageAlt = "",
  header = "",
  description = "",
}: IFeatureCards) => {
  return (
    <div className="w-full flex flex-col items-center">
      <img src={image} alt={imageAlt} className="object-contain w-60 sm:w-48" />
      <h3 className="text-textColor text-lg font-medium mt-5 text-center">
        {header}
      </h3>
      <p className="text-textColorMuted text-sm font-medium text-center mt-5 px-5 sm:p-0">
        {description}
      </p>
    </div>
  );
};

export default FeatureCards;
