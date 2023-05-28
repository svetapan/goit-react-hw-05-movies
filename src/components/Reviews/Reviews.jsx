// Cast.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getReviewsResponse from 'api/getReviewsResponse';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewstData = async () => {
      const reviewsData = await getReviewsResponse(movieId);
      setReviews(reviewsData);
    };
    fetchReviewstData();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <span> Aothor: {review.author}.</span>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviws for this movie</p>
      )}
    </>
  );
};

export default Reviews;
