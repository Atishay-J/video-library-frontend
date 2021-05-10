import "./videoCard.css";
import Skeleton from "react-loading-skeleton";

const LoadingCard = ({ key }) => {
  return (
    <div className="LoadingCardWrapper flex-cont flex-wrap space-evenly">
      <div className="videoCardContainer" key={key}>
        <div className="videoCardThumbnailContainer">
          <Skeleton height={"10rem"} />
        </div>
        <div className="videoCardInfoContainer">
          <Skeleton circle={true} width={60} height={60} />
          <div className="videoCardChannelInfoContainer">
            <Skeleton height={"1.5rem"} width={"8rem"} />
            <Skeleton height={"1.2rem"} width={"4rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
