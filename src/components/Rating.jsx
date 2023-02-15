import "../index.scss";
import starColoredIcon from "../assets/icons/star-colored.svg";
import starGrayIcon from "../assets/icons/star-gray.svg";

function createStarArray(number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(true);
  }
  for (let i = number; i < 5; i++) {
    array.push(false);
  }
  return array;
}

function Rating(props) {
  const starArray = createStarArray(props.rating).map((star, index) =>
    star ? (
      <img src={starColoredIcon} alt="" className="star-icon" key={index} />
    ) : (
      <img src={starGrayIcon} alt="" className="star-icon" key={index} />
    )
  );
  return <div className="rating">{starArray}</div>;
}

export default Rating;
