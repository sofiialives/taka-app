import { useTranslation } from "react-i18next";
import Bar from "../Bar/Bar";
import first from "assets/images/man.png";
import second from "assets/images/womanReview.png";
import third from "../../assets/images/thirdreview.png";
import { ReviewText, ReviewsItem, ReviewsListStyled } from "./Reviews.styled";

const ReviewsList = () => {
  const { t } = useTranslation();
  const reviews = [
    { image: first, text: `${t("reviews.man")}` },
    { image: second, text: `${t("reviews.woman")}` },
    { image: third, text: `${t("reviews.company")}` },
  ];
  return (
    <Bar title={t("reviews.reviews")}>
      <ReviewsListStyled>
        {reviews.map((review, index) => (
          <ReviewsItem key={index}>
            <img src={review.image} alt="client" />
            <ReviewText>{review.text}</ReviewText>
          </ReviewsItem>
        ))}
      </ReviewsListStyled>
    </Bar>
  );
};

export default ReviewsList;
