import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "../componentsCSS/SlideCards.css";

const SlideCards = ({ people }) => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % people.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
  });

  // הגדרת className מותאם על פי אינדקס
  const cardClass = `cardSlide card-color-${index % 3}`;

  return (
    <div className="slide-container" {...handlers}>
        <img 
            src={`${process.env.PUBLIC_URL}/assets/media/swipe-left.gif`} 
            alt="White Logo" 
            className='gif-val'

          />
      <AnimatePresence mode="wait">
        <motion.div
          key={people[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className={cardClass}
        >
          <p className="cardSlide-index">{index + 1} / {people.length}</p>

          <h2 className="cardSlide-title">{people[index].name}</h2>
          <p className="card-time">{people[index].time}</p>
          <p className="cardSlide-text">{people[index].content} </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideCards;
