import { useState } from "react";

const WebsiteCard = ({ data, showWebsitePreview, setShowWebsitePreview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card rounded-md flex items-center justify-center h-[4rem] cursor-pointer transition-all duration-200"
      style={{ background: isHovered ? data?.hoverColor : data?.color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowWebsitePreview(!showWebsitePreview)}
    >
      <div className="image__holder hidden">
        <img src={data?.logo} alt="" className="image__cover" />
      </div>
      <p>{data?.name}</p>
    </div>
  );
};

export default WebsiteCard;
