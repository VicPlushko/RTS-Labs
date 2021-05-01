export const getArticles = (searchTerm) => {
    const URL = "http://hn.algolia.com/api/v1/search?query="

    return dispatch => {
        dispatch({type:"START_SEARCH"})
        fetch(URL + searchTerm)
        .then(resp => resp.json())
        .then(data => dispatch({type: "SEARCH_COMPLETE", payload: data.hits}))
    }
}

export const changeInput = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_INPUT", payload: value})
    }
}

export const searchSubmit = (data) => {
    return dispatch => {
        dispatch({type: "SEARCH_COMPLETE", payload: data})
    }
}

export const addPreviousSearch = (value) => {
    return dispatch => {
        dispatch({type: "ADD_PREV_SEARCH", payload: value})
    }
}

export const startSearch = () => {
    return dispatch => {
        dispatch({type: "START_SEARCH"})
    }
}

export const clearSearchBar = () => {
    return dispatch => {
        dispatch({type: "CLEAR_SEARCH"})
    }
}