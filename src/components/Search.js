import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'

class Search extends Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

const mapDispatchToProps = globalState => {
    console.log("Search global state is", globalState)
    return {
        searchTerm: globalState.searchTerm,
        prevSearch: globalState.prevSearch,
        results: globalState.results,
        searching: globalState.searching
    }
}
export default connect(mapDispatchToProps)(Search) 
