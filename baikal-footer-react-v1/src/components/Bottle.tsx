import React from "react";

interface BottleProps {
  imageSrc: string;
  altText: string;
  volume: string;
  width: number;
}

const Bottle: React.FC<BottleProps> = ({ imageSrc, altText, volume, width }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    <img src={imageSrc} alt={altText} style={{ width }} />
    <span>{volume}</span>
  </div>
);

export default Bottle;
