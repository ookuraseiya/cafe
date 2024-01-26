import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Pagination = ({ pageNumbers, pageId }) => {
  return (
    <nav>
      <ul className="paginate">
        <li>
          <Link
            className={
              Number(pageId) === 1 ? 'paginate__disabled' : 'paginate__link'
            }
            to={`/items/newsList/${Number(pageId) - 1}`}
          >
            &lt;
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              className={
                Number(pageId) === number
                  ? 'paginate__link paginate__active'
                  : 'paginate__link'
              }
              to={`/items/newsList/${number}`}
            >
              {number}
            </Link>
          </li>
        ))}
        <li>
          <Link
            className={
              Number(pageId) === pageNumbers.length
                ? 'paginate__disabled'
                : 'paginate__link'
            }
            to={`/items/newsList/${Number(pageId) + 1}`}
          >
            &gt;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageNumbers: PropTypes.array.isRequired,
  pageId: PropTypes.number.isRequired,
};
