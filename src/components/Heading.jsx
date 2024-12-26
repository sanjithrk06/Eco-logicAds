import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-[600px] mx-auto space-y-2">
      <h1 className=" title-attribute">{title}</h1>
      {subtitle && <p className="subTitle-attribute">{subtitle}</p>}
    </div>
  );
};

export default Heading;
