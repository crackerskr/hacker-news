import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import './pagination.css'

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            <button
                className='button'
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}>
                <FontAwesomeIcon icon={faCircleLeft} />
            </button>
            <span> Page {currentPage} </span>
            <button
                className='button'
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}>
                <FontAwesomeIcon icon={faCircleRight} />
            </button>
        </div>
    );
};

export default Pagination;
