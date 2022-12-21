import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  ImageWrapper,
  SliderContainer,
  Slides,
  Slide,
  IconButton,
} from "./styled";
import img from "../../assets/slider_img.jpg";
import { items } from "./data";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import EastIcon from "@mui/icons-material/East";

type MouseE = React.MouseEvent<HTMLLIElement, MouseEvent>;
type TouchE = React.TouchEvent<HTMLLIElement>;
type E = MouseE | TouchE;
type EventHandler = (e: E, i: number) => void;

const Slider = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsCount = items.length - 1;
  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [startPosition, setStartPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleTranslate = () => {
    currentSlide === itemsCount
      ? setCurrentSlide(0)
      : setCurrentSlide((prev) => prev + 1);
  };

  useEffect(() => {
    // console.log("hello", currentSlide);
    setCurrentTranslate(currentSlide * -100);
  }, [currentSlide]);

  useEffect(() => {
    const minTranslate = 0;
    const maxTranslate = -(itemsCount * 100);
    const diff = currentPosition - startPosition;
    if (
      diff + currentTranslate <= minTranslate &&
      diff + currentTranslate >= maxTranslate
    ) {
      setCurrentTranslate(diff + currentTranslate);
    }
  }, [currentPosition]);

  const getPosition = (
    e: E,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let ev;
    if (e.type.includes("mouse")) {
      ev = e as MouseE;
      setValue(ev.pageX);
    } else {
      ev = e as TouchE;
      setValue(ev.touches[0].clientX);
    }
  };

  const onTouchStart: EventHandler = (e, i) => {
    getPosition(e, setStartPosition);
    setIsDragging(true);
  };
  const onTouchEnd: EventHandler = (e, i) => {
    const mid = (itemsCount * 100) / 2;
    // console.log(currentTranslate);
    const ind = Math.abs(Math.round(currentTranslate / 100));
    setCurrentSlide(ind);
    setIsDragging(false);
  };
  const onTouchMove: EventHandler = (e, i) => {
    if (isDragging) {
      getPosition(e, setCurrentPosition);
    }
  };

  return (
    <Container theme={theme}>
      <ImageWrapper>
        <img src={img} alt="Maggie" />
      </ImageWrapper>
      <SliderContainer>
        <Slides translate={currentTranslate}>
          {items.map((item, i) => (
            <Slide
              key={item.id}
              theme={theme}
              onDragStart={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchStart={(e) => {
                // console.log(e.type, "type");
                onTouchStart(e, i);
              }}
              onTouchEnd={(e) => onTouchEnd(e, i)}
              onTouchMove={(e) => onTouchMove(e, i)}
              onMouseDown={(e) => {
                onTouchStart(e, i);
              }}
              onMouseMove={(e) => onTouchMove(e, i)}
              onMouseUp={(e) => onTouchEnd(e, i)}
              onMouseLeave={(e) => onTouchEnd(e, i)}
            >
              <h3>{item.content}</h3>
            </Slide>
          ))}
        </Slides>
        <IconButton theme={theme} onClick={handleTranslate}>
          <EastIcon />
        </IconButton>
      </SliderContainer>
    </Container>
  );
};

export default Slider;
