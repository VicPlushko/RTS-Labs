import React from 'react'

const SearchBar = (props) => {
    return (
        <div className='search-bar'>
            <form className='search-form' onSubmit={props.handleSubmit}>
                <input id='search-bar-input' onChange={props.handleChange} type='text' placeholder='Search Hacker News'/>
                <input  id='submit-btn' type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SearchBar
