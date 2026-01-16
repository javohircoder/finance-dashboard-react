import styles from './Pagination.module.scss';
import SvgCaretLeft from '../../../components/UI/icons/SvgCaretLeft.jsx';
import SvgCaretRight from '../../../components/UI/icons/SvgCaretRight.jsx';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5);
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        );
      }
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <SvgCaretLeft />
        <span>Prev</span>
      </button>

      <div className={styles.pages}>
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={`${styles.page} ${
              currentPage === page ? styles.active : ''
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`${styles.button} ${styles.next}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <SvgCaretRight />
      </button>
    </div>
  );
}

export default Pagination;
