import Image from "next/image";

const Seperator = () => {
  return (
    <div className="seperator-line">
      <Image
        src="/assets/images/sep.svg"
        alt="seperator"
        width="816"
        height="8"
      />
    </div>
  );
};

export default Seperator;
