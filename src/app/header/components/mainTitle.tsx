import { fraunces } from "@/app/layout";
import ArrowDown from "../../graphicElements/icon-arrow-down";

const MainTitle = () => {
  return (
    <>
      <h1
        className={`${fraunces.className} mt-28 mb-28 text-center text-white text-5xl tracking-[.25em] uppercase`}
      >
        We are creatives
      </h1>
      <ArrowDown />
    </>
  );
};

export default MainTitle;
