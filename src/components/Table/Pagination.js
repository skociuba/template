import React, {useState} from 'react';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
const Pagination = ({
  totalNumberOfRecords,
  recordPerPage,
  handleNext,
  handlePrev,
  handleJumpToPage,
  currentPage,
}) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const allPages = Math.ceil(totalNumberOfRecords / recordPerPage || 1);

  return (
    <div>
      {recordPerPage < totalNumberOfRecords && (
        <div>
          {`${currentPage} of ${allPages}`}
          <br />
          <Button onClick={handlePrev} disabled={currentPage === 1}>
            prev
          </Button>
          <Button onClick={handleNext} disabled={currentPage === allPages}>
            next
          </Button>
          <br />
          <select
            defaultValue={{value: currentPage, label: currentPage}}
            onChange={(e) => {
              setSelectedPage(Number(e.target.value));
            }}>
            {[...Array(allPages)].map((_, i) => (
              <option value={i + 1} key={i + 1}>
                {`${i + 1}`}
              </option>
            ))}
          </select>
          <Button
            onClick={() => {
              handleJumpToPage(selectedPage);
            }}>
            skip to
          </Button>
        </div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  recordPerPage: PropTypes.number,
  totalNumberOfRecords: PropTypes.number,
  handleSideEffect: PropTypes.func,
};

Pagination.defaultProps = {
  recordPerPage: 15,
};

export default Pagination;
