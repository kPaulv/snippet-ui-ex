import React from "react";
import PropTypes from 'prop-types'

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        const { totalRecords = null, pageLimit = 10, pageNeighbours = 0 } = props;

        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 10;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

        this.pageNeighbours = typeof pageNeighbours === 'number' ?
            Math.max(0, Math.min(pageNeighbours, 2)) : 0;

        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

        this.state = { currentPage: 1 };
    }
}

Pagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    pageNeighbours: PropTypes.number,
    onPageChanged: PropTypes.func
};

export default Pagination;
