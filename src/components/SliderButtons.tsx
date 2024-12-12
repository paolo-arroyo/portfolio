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
  const activeIndex = swiper.activeIndex;
  return (
    <div>
      <div className={containerStyles}>
        <button
          onClick={() => swiper.slidePrev()}
          className={buttonStyles}
          {...(activeIndex === 0 && { disabled: true })}
        >
          <PiCaretLeftBold className={iconStyles} />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className={buttonStyles}
          {...(activeIndex === swiper.slides.length - 1 && { disabled: true })}
        >
          <PiCaretRightBold className={iconStyles} />
        </button>
      </div>
    </div>
  )
}

export default SliderButtons;