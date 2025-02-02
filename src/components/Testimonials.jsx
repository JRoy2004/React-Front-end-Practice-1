import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[5]">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`${styles.paragraph}  sm:max-w-[450px] max-w-full text-left`}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap sm:justify-between justify-center w-full feedback-container relative z-10">
        {feedback.map((card, index) => {
          return <FeedbackCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
