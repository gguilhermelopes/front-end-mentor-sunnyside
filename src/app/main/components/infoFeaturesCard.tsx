"use client";

import useMobile from "@/hooks/useMobile";

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
  const isMobile = useMobile("(max-width:1024px)");
  const style = {
    backgroundImage: `url('/images/${
      isMobile ? "mobile" : "desktop"
    }/image-${image}.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: primaryColor,
  };
  return (
    <div className="h-[600px] w-full text-center flex flex-col" style={style}>
      <div className="mt-auto px:16 lg:px-44 py-16 flex flex-col items-center">
        <h2 className="font-serif text-3xl mb-5">{title}</h2>
        <p className="max-w-[40ch]">{description}</p>
      </div>
    </div>
  );
};

export default InfoFeaturesCard;
