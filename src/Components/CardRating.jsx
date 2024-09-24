import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardRating() {
    return (
        <div className="cardRatingContent">
            <div className="cardRatingContentIcon">
                <FontAwesomeIcon icon={faStar} className="cardRatingContentIconStar" />
            </div>
            <h1 className="cardRatingContentTitle">
                How did we do?
            </h1>
            <p className="cardRatingContentText">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <div className="cardRatingContentRating">
                <button className="cardRatingContentRatingBtn">1</button>
                <button className="cardRatingContentRatingBtn">2</button>
                <button className="cardRatingContentRatingBtn">3</button>
                <button className="cardRatingContentRatingBtn">4</button>
                <button className="cardRatingContentRatingBtn">5</button>
            </div>
            <button className="cardRatingContentBtn">submit</button>
        </div>
    );
}

export default CardRating