import { useEffect, useState } from "react";
import "./styles.css";

interface CarouselItem {
  title: string;
  image: string;
  url: string;
  price: number;
  currency: string;
  brand: string;
  discountPrice?: number;
}
interface CarouselProps {
  autoPlay?: boolean;
  speedInMs?: number;
  column: 1 | 2 | 3 | 4;
  showMaxAtATime: number;
  onItemClick?: (item: CarouselItem) => void;
  items: CarouselItem[];
}

let carouselTimer: number | null = null;

export default function Carousel({
  autoPlay = false,
  speedInMs = 5000,
  column,
  showMaxAtATime,
  items,
  onItemClick,
}: CarouselProps) {
  const [showSlideTillIndex, updateIndex] = useState({
    start: 0,
    end: showMaxAtATime,
  });

  useEffect(() => {
    // custom timer hook with a callback should be a better solution.
    if (autoPlay && speedInMs) {
      carouselTimer = window.setInterval(() => {
        if (showSlideTillIndex.end + showMaxAtATime > items.length) {
          updateIndex({ start: 0, end: showMaxAtATime });
        } else {
          updateIndex({
            start: showSlideTillIndex.end,
            end: showSlideTillIndex.end + showMaxAtATime,
          });
        }
      }, speedInMs);
    }

    return () => {
      if (carouselTimer) window.clearInterval(carouselTimer);
    };
  });

  return (
    <div className="row">
      {/* Ideally should't use index as it might cause unwanted error while comparing based on index */}
      {items
        .slice(showSlideTillIndex.start, showSlideTillIndex.end)
        .map((item, index) => {
          return (
            <div
              data-testid={`carousel-${index}`}
              className={`mt-3 col-sm-${12 / column} carousel-card`}
              style={{ backgroundImage: `url(${item.image})` }}
              key={index}
              onClick={() => onItemClick?.(item)}
            >
              <span className="carousel-card__text">{item.title}</span>
            </div>
          );
        })}
    </div>
  );
}
