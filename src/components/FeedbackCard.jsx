import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="quotes-icon"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-8 text-white my-10">
      {content}
    </p>
    <div className="flex flex-row gap-4">
      <img
        src={img}
        alt={`${name}-image`}
        className="w-12 h-12 rounded-full object-contain"
      />
      <div className="flex flex-col">
        <h3 className="font-poppins font-semibold leading-8 text-[20px] text-white">
          {name}
        </h3>
        <p className="font-poppins leading-6 text-[16px] text-white opacity-50">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
