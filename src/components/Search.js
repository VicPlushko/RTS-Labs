import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import * as searchActions from '../actions/searchActions'
import { bindActionCreators } from 'redux'

class Search extends Component {

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.props.changeInput(event.target.value)
    }
    render() {
        console.log("search props is", this.props)
        return (
            <div>
                <SearchBar handleChange={this.handleInputChange} />
            </div>
        )
    }
}

const mapStateToProps = globalState => {
    console.log("Search global state is", globalState)
    return {
        searchTerm: globalState.searchTerm,
        prevSearch: globalState.prevSearch,
        results: globalState.results,
        searching: globalState.searching
    }
}

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(searchActions, dispatch)}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search) 
