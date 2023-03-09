import { FC, Suspense, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const generateArray = (items: number) => [...Array.from(Array(items).keys())];

// @TODO define json struct
export const HomeGrid: FC = () => {
  const [data, setData] = useState();

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="items-center p-8 justify-between w-full max-w-4xl mx-auto text-grey-800">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {generateArray(120).map((i) => (
            <>
              <LazyLoadImage
                key={i}
                src={`https://picsum.photos/id/${i}/500`}
                alt={`Image Alt-${i}`}
                className="img-lazy z-10"
                placeholderSrc={"https://picsum.photos/id/1/500"}
                effect="blur"
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
