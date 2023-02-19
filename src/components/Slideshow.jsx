import { useState } from "react";

import "../index.scss";

import previousIcon from "../assets/icons/previous.png";
import nextIcon from "../assets/icons/next.png";

function Slideshow(props) {
  const maxIndex = props.images.length - 1;
  const [currentMediaIndex, changeCurrentMediaIndex] = useState(0);

  function previous() {
    if (currentMediaIndex === 0) {
      changeCurrentMediaIndex(maxIndex);
    } else {
      changeCurrentMediaIndex(currentMediaIndex - 1);
    }
  }

  function next() {
    if (currentMediaIndex === maxIndex) {
      changeCurrentMediaIndex(0);
    } else {
      changeCurrentMediaIndex(currentMediaIndex + 1);
    }
  }

  if (maxIndex > 0) {
    return (
      <div className="slideshow">
        <img
          src={props.images[currentMediaIndex]}
          alt={props.title}
          className="slideshow-image"
        />
        <div className="slideshow-previous">
          <img src={previousIcon} alt="" onClick={() => previous()} />
        </div>
        <div className="slideshow-next">
          <img src={nextIcon} alt="" onClick={() => next()} />
        </div>
        <div className="slideshow-counter">
          {currentMediaIndex + 1} / {maxIndex + 1}
        </div>
      </div>
    );
  } else {
    return (
      <div className="slideshow">
        <img
          src={props.images[currentMediaIndex]}
          alt={props.title}
          className="slideshow-image"
        />
      </div>
    );
  }
}

export default Slideshow;
