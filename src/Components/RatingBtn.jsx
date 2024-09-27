import { useState } from "react";

function RatingBtn({ sendDataToParent }) {
    const values = [1, 2, 3, 4, 5];
    const [data, setData] = useState("");

    const handleSumbit = () => {
        sendDataToParent(data);
    };

    return (
        <div>
            <ul className="cardRatingContentRating">
                {values.map((buttonValue, index) => (
                    <li key={index}>
                        <button className={`cardRatingContentRatingBtn ${data == buttonValue ? "check" : ""}`} onClick={() => setData(buttonValue)}>
                            {buttonValue}
                        </button>
                    </li>
                ))}
            </ul>
            <button type="sumbit" className="cardRatingContentBtn" onClick={handleSumbit}>submit</button>
        </div>
    );
}

export default RatingBtn