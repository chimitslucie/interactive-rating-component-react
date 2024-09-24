import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CardRating() {
    return (
        <div className="cardContent">
            <div className="cardContentIcon">
                <FontAwesomeIcon icon={faStar} className="cardContentIconStar" />
            </div>
            <h1 className="cardContentTitle">
                How did we do?
            </h1>
            <p className="cardContentText">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <div className="cardContentRating">
                <button className="cardContentRatingBtn">1</button>
                <button className="cardContentRatingBtn">2</button>
                <button className="cardContentRatingBtn">3</button>
                <button className="cardContentRatingBtn">4</button>
                <button className="cardContentRatingBtn">5</button>
            </div>
            <button className="cardContentBtn">submit</button>
        </div>
    );
}

export default CardRating