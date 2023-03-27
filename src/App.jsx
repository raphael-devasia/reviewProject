import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const checkNumber = (number) => {
    const indexLength = reviews.length - 1;

    if (number > indexLength) {
      return 0;
    }
    if (number < 0) {
      return indexLength;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const previousPerson = () => {
    setIndex((index) => {
      const newIndex = index -1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomIndex =Math.floor(Math.random()*reviews.length)
    if(index==randomIndex){
      randomIndex=randomIndex+1
    }
    return setIndex(checkNumber(randomIndex))
   
   
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
