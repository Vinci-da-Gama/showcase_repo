import React, {Component} from 'react';

class SortNsearch extends Component {
    render() {
        return (
            <div className="form-row searchsort-container">
                <div className="col-12 col-md mr-md-3 mr-0 mb-1 mb-sm-1 mb-md-0">
                    <div className="row">
                        <label htmlFor="SortBySelect" className="col-3 pr-0 pl-0 mb-0 col-form-label text-truncate text-lg-center text-md-left">Sort By: </label>
                        <div className="col-9 pl-0 pr-0">
                            <select id="SortBySelect" className="custom-select rounded-0">
                                <option defaultValue disabled>Choose</option>
                                <option value="fn">first name</option>
                                <option value="ln">last name</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md ml-md-3 ml-0">
                    <div className="row">
                        <label htmlFor="searchInput" className="col-3 pr-0 pl-0 mb-0 col-form-label text-truncate text-lg-center text-md-left">Search: </label>
                        <div className="col-9 pl-0 pr-0">
                            <input type="text" placeholder="search ..." id="searchInput" className="form-control rounded-0" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortNsearch;