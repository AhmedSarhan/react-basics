import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const RatingSelector = ({ totalStars = 5, closeHandler, updateRating }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const cancelHandler = () => {
    setRating(0);
    setHoverRating(0);
    closeHandler();
  };

  return (
    <div className={styles.ratingContainer}>
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FontAwesomeIcon
            key={starIndex}
            icon={faStar}
            className={
              starIndex <= (hoverRating || rating)
                ? styles.starSelected
                : styles.star
            }
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            fontSize="24px"
          />
        );
      })}
      <FontAwesomeIcon
        icon={faCheck}
        color="#27ae60"
        onClick={() => updateRating(rating)}
        fontSize="24px"
      />
      <FontAwesomeIcon
        icon={faClose}
        color="#e74c3c"
        onClick={cancelHandler}
        fontSize="24px"
      />
    </div>
  );
};

export default RatingSelector;
