import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Pagination = ({ PER_PAGE, totalPosts, pageId }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              className={
                Number(pageId) === number ? 'page-link active' : 'page-link'
              }
              to={`/items/newsList/${number}`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  PER_PAGE: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  pageId: PropTypes.number.isRequired,
};
