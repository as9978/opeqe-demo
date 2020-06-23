import React, { useState } from "react";

export default ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(items.length);

  const goToNextSlide = () => {
    if (activeIndex !== items.length - 1) {
      setActiveIndex(index + 1);
    }
  };

  const goToPrevSlide = () => {
    if (activeIndex !== 0) {
      setActiveIndex(index - 1);
    }
  };
};
