import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "../lib/utils";

export interface ImageCarouselProps {
  images: string[];
  speed?: number;
  className?: string;
  imageClassName?: string;
}

const ImageCarousel = ({
  images,
  speed = 25,
  className,
  imageClassName,
}: ImageCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);

  useEffect(() => {
    setDuplicatedImages([...images, ...images, ...images]);
  }, [images]);

  useEffect(() => {
    if (!carouselRef.current || duplicatedImages.length === 0) return;

    const carousel = carouselRef.current;
    const totalHeight = carousel.scrollHeight;

    gsap.killTweensOf(carousel);

    gsap.set(carousel, { y: 0 });

    const tl = gsap.timeline({ repeat: -1, ease: "none" });

    tl.to(carousel, {
      y: -totalHeight / 3,
      duration: totalHeight / 100 / speed,
      ease: "none",
      onComplete: () => {
        gsap.set(carousel, { y: 0 });
      },
    });

    return () => {
      tl.kill();
    };
  }, [duplicatedImages, speed]);

  return (
    <div className={cn("relative overflow-hidden h-full w-full border-r border-l border-l-secondary-gray  border-r-secondary-gray", className)}>
      <div
        ref={carouselRef}
        className="carousel-track"
        style={{ willChange: "transform" }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={`${index}-${src}`}
            className={cn(
              "carousel-image relative overflow-hidden shadow-lg transform w-[50%]",

              index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0",
              imageClassName
            )}
            style={{
              aspectRatio: "4/3",
            }}
          >
            <img
              src={src}
              alt={`Carousel image ${index}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
