import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import * as searchActions from '../actions/searchActions'
import { bindActionCreators } from 'redux'
import Article from './Article'
import moment from 'moment'
import PreviousSearches from './PreviousSearches'

class Search extends Component {

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.props.changeInput(event.target.value)
    }

    handleSearchSubmit = (event) => {
        event.preventDefault()
        const URL = "http://hn.algolia.com/api/v1/search?query="
        this.props.startSearch()
        this.props.searchTerm.length < 2 
        ? window.alert("Please enter a search with 2 or more characters")
        : fetch(URL + this.props.searchTerm)
          .then(resp => resp.json())
          .then(data => {
              this.props.searchSubmit(data.hits)
              this.props.clearSearchBar()
          })
          this.props.addPreviousSearch(this.props.searchTerm)
          
             
    }
    render() {

        const articles = this.props.results.map((article, i) => <Article key={i} title={article.title} author={upcaseName(article.author)} url={article.url} written_on={moment(article.created_at).format('MM-DD-YYYY')} upvotes={article.points} />) 
        console.log("search props is", this.props)
        return (
            <>
            <div>
                <SearchBar handleChange={this.handleInputChange} handleSubmit={this.handleSearchSubmit} search={this.props.searchTerm}/>
                <div className='container'>
                    <PreviousSearches />
                </div>
            </div>
            <div>
                <h1>Articles:</h1>
                {this.props.searching
                ? <h3>Searching...</h3>
                : articles
                }
            </div>
            </>
        )
    }
}

const upcaseName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

// const splitDate = (date) => {
//     return date.split("T")[0]
// } 

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
