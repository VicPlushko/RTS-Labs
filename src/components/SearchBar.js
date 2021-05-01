import React from 'react'

const SearchBar = (props) => {

    const {
        handleSubmit,
        handleChange,
        search
    } = props
    
    return (
        <div className='search-bar'>
            <form className='search-form' onSubmit={handleSubmit}>
                <input id='search-bar-input' onChange={handleChange} type='text' value={search} placeholder='Search Hacker News'/>
                <input  id='submit-btn' type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SearchBar
