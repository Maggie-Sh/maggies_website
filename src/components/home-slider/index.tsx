import React, { useContext, useState } from "react";
import {
  Container,
  ImageWrapper,
  SliderContainer,
  Slides,
  Slide,
  IconButton,
  Dots,
} from "./styled";
import img from "../../assets/slider_img.jpg";
import { items } from "./data";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import EastIcon from "@mui/icons-material/East";

type MouseE = React.MouseEvent<HTMLDivElement, MouseEvent>;
type TouchE = React.TouchEvent<HTMLDivElement>;
type E = MouseE | TouchE;
type EventHandler = (e: E, i: number) => void;

const Slider = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsCount = items.length - 1;
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleTranslate = () => {
    if (currentSlide === itemsCount) {
      setCurrentSlide(0);
      setCurrentTranslate(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
      setCurrentTranslate((prev) => prev - 100);
    }
  };

  const handleDotClick = (i: number) => {
    setCurrentSlide(i);
    setCurrentTranslate(i * -100);
  };

  const getPosition = (e: E) => {
    let ev;
    if (e.type.includes("mouse")) {
      ev = e as MouseE;
      return ev.pageX;
    } else {
      ev = e as TouchE;
      return ev.touches[0].pageX;
    }
  };

  const onTouchStart: EventHandler = (e, i) => {
    const pageX = getPosition(e);
    setCurrentPosition(pageX);
    setStartPosition(pageX);
  };

  const onTouchEnd: EventHandler = (e, i) => {
    const diff = currentPosition - startPosition;
    if (
      diff &&
      currentTranslate + diff <= 0 &&
      currentTranslate + diff >= -(itemsCount * 100)
    ) {
      if (diff < 0) {
        currentSlide <= itemsCount && setCurrentSlide((prev) => prev + 1);
        setCurrentTranslate((prev) => Math.floor((prev + diff) / 100) * 100);
      } else {
        currentSlide >= 0 && setCurrentSlide((prev) => prev - 1);
        setCurrentTranslate((prev) => Math.ceil((prev + diff) / 100) * 100);
      }
      setCurrentPosition(0);
      setStartPosition(0);
    }
  };
  const onTouchMove: EventHandler = (e, i) => {
    const pageX = getPosition(e);
    setCurrentPosition(pageX);
  };

  return (
    <Container theme={theme}>
      <ImageWrapper>
        <img src={img} alt="Maggie" />
      </ImageWrapper>
      <SliderContainer>
        <Slides>
          {items.map((item, i) => (
            <Slide
              transl={currentTranslate}
              key={item.id}
              theme={theme}
              onDragStart={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                onTouchStart(e, i);
              }}
              onTouchEnd={(e) => onTouchEnd(e, i)}
              onTouchMove={(e) => onTouchMove(e, i)}
            >
              {item.content}
            </Slide>
          ))}
        </Slides>
        <IconButton theme={theme} onClick={handleTranslate}>
          <EastIcon />
        </IconButton>
        <Dots>
          {Array.from({ length: items.length }).map((el, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === currentSlide ? "active" : ""}
            />
          ))}
        </Dots>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
