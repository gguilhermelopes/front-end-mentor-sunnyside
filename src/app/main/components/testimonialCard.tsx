import Image from "next/image";

interface TestimonialCardProps {
  photoName: string;
  quote: string;
  name: string;
  position: string;
}

const TestimonialCard = ({
  photoName,
  quote,
  name,
  position,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/images/image-${photoName}.jpg`}
        alt={`Emily's image`}
        width={75}
        height={75}
        className="rounded-full"
      />
      <p className="mt-10 text-center text-veryDarkGrayishBlue">{quote}</p>
      <p className="font-serif mt-16 text-veryDarkDesaturatedBlue">{name}</p>
      <p className="mt-3 text-sm text-grayishBlue">{position}</p>
    </div>
  );
};

export default TestimonialCard;
