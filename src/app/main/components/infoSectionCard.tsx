import { fraunces } from "@/app/layout";

interface CardProps {
  title: string;
  description: string;
  position: "left" | "right";
  primaryColor: string;
}

const InfoSectionCard = ({
  title,
  description,
  position,
  primaryColor,
}: CardProps) => {
  const style = {
    content: "",
    display: "block",
    height: "8px",
    width: "120%",
    backgroundColor: primaryColor,
    bottom: "3px",
    left: "-11px",
    zIndex: "-1",
    opacity: ".4",
    borderRadius: "9999px",
  };
  return (
    <div
      className={`py-40 ${
        position === "left" ? "pl-[160px] pr-[128px]" : "pl-[128px] pr-[160px]"
      }`}
    >
      <h2
        className={`${fraunces.className} text-veryDarkDesaturatedBlue text-4xl max-w-[16ch]`}
      >
        {title}
      </h2>
      <p className="text-darkGrayishBlue my-11">{description}</p>
      <a
        className={`${fraunces.className} inline-block relative uppercase ms-1`}
        href="/"
      >
        Learn more
        <span style={{ position: "absolute", ...style }} />
      </a>
    </div>
  );
};

export default InfoSectionCard;
