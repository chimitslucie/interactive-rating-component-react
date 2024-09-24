import thanksYou from '../Assets/Img/thanksYou.svg';

function CardThanks() {
    return (
        <div className="cardThanksContent">
            <img className="cardThanksContentImg" src={thanksYou} />
            <div className='cardThanksContentRating'>
                <p className='cardThanksContentRatingText'>
                    You selected  out of 5
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
    );
}

export default CardThanks