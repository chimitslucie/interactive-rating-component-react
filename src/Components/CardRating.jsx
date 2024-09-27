import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import RatingBtn from "./RatingBtn";
import { useState } from "react";
import thanksYou from '../Assets/Img/thanksYou.svg';

function CardRating() {
    const [dataFromChild, setDataFromChild] = useState("");

    // const [sumbitRating, setSumbitRating] = useState(false);

    // const handleSumbit = () => {
    //     setSumbitRating(true)
    // }

    function handleDataFromChild(data) {
        setDataFromChild(data);
    }

    return (
        <div>
            <div className={`cardRatingContent ${dataFromChild === '' ? '' : 'submit'}`}>
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
                <RatingBtn sendDataToParent={handleDataFromChild} />
            </div>

            <div className={`cardThanksContent ${dataFromChild === '' ? '' : 'submit'}`}>
                <img className="cardThanksContentImg" src={thanksYou} />
                <div className='cardThanksContentRating'>
                    <p className='cardThanksContentRatingText'>
                        You selected {dataFromChild} out of 5
                    </p>
                </div>
                <h2 className='cardThanksContentTitle'>
                    Thank you!
                </h2>
                <p className='cardThanksContentText'>
                    We appreciate you taking the time to give a rating. If you ever need more support,
                    don't hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}

export default CardRating