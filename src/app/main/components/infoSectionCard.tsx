"use client";

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
    borderRadius: "9999px",
  };
  return (
    <div
      className={`py-16 lg:py-40 px-8 text-center lg:text-start ${
        position === "left"
          ? "lg:pl-[160px] lg:pr-[128px]"
          : "lg:pl-[128px] lg:pr-[160px]"
      }`}
    >
      <h2 className="font-serif text-veryDarkDesaturatedBlue text-4xl md:max-w-[16ch]">
        {title}
      </h2>
      <p className="text-darkGrayishBlue my-11 text-lg lg:text-md">
        {description}
      </p>
      <a className="font-serif inline-block relative uppercase ms-1" href="/">
        Learn more
        <span
          className="opacity-40 ease-in-out duration-300"
          style={{ position: "absolute", ...style }}
        />
        <style jsx>{`
          a:hover span {
            opacity: 1;
          }
        `}</style>
      </a>
    </div>
  );
};

export default InfoSectionCard;
