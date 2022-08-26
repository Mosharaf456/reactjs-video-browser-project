import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

class SearchBar extends Component {
    render() {
        const { searchTerm, handleChange } = this.props;

        return (
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <input onChange={handleChange} style={{ width: '70%' }} />
                {/* <span onClick={handleChange}> <BsSearch size='2em'/> </span> */}
            </div>
        );
    }
}

export default SearchBar;