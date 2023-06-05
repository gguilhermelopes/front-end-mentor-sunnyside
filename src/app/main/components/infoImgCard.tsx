interface ImgProps {
  image: string;
}

const InfoImg = ({ image }: ImgProps) => {
  const style = {
    backgroundImage: `url('/images/desktop/image-${image}.jpg')`,
  };
  return (
    <div
      className={`bg-no-repeat bg-center bg-cover h-full w-full`}
      style={style}
    />
  );
};

export default InfoImg;
