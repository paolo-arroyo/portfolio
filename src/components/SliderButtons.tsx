'use client';

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

type SliderButtonsProps = {
  containerStyles: string;
  buttonStyles: string;
  iconStyles: string;
};

const SliderButtons = ({
  containerStyles,
  buttonStyles,
  iconStyles,
}: SliderButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div>
      <div className={containerStyles}>
        <button
          onClick={() => swiper.slidePrev()}
          className={buttonStyles}
        >
          <PiCaretLeftBold className={iconStyles} />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={buttonStyles}
        >
          <PiCaretRightBold className={iconStyles} />
        </button>
      </div>
    </div>
  )
}

export default SliderButtons;