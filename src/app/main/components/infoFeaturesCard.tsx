import { fraunces } from "@/app/layout";

interface FeaturesCardProps {
  title: string;
  description: string;
  image: string;
  primaryColor: string;
}

const InfoFeaturesCard = ({
  title,
  description,
  image,
  primaryColor,
}: FeaturesCardProps) => {
  const style = {
    backgroundImage: `url('/images/desktop/image-${image}.jpg')`,
    color: primaryColor,
  };
  return (
    <div
      className="bg-no-repeat h-[600px] w-full text-center flex flex-col"
      style={style}
    >
      <div className="mt-auto px-44 py-16">
        <h2 className={`${fraunces.className} text-3xl mb-5`}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoFeaturesCard;
