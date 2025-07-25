// src/components/StarCircle.jsx
import React from "react";

const StarCircle = ({ count = 12, radius = 200, textsize }) => {
  const stars = Array.from({ length: count });

  return (
    <div className="relative w-[200px] h-[200px] mx-auto">
      {stars.map((_, i) => {
        const angle = (360 / count) * i;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        return (
          <div
            key={i}
            className={`absolute text-white transition-transform duration-500`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              fontSize: `${textsize ? textsize : 5}rem`,
            }}
          >
            ★
          </div>
        );
      })}
    </div>
  );
};

export default StarCircle;
