import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../Api';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;

