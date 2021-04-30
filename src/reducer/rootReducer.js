const initialState = {
    prevSearch: [],
    results: [],
    searchTerm: "",
    searching: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case("START_SEARCH"):
            return {...state, searching: true}
        case("SEARCH_COMPLETE"):
            return {...state, 
                   searching: false,
                   results: action.payload
                   }
        case("CHANGE_INPUT"):
            return {...state, searchTerm: action.payload}
        case("ADD_PREV_SEARCH"):
            return {...state, prevSearch: [...state.prevSearch, action.payload]}
        case("CLEAR_SEARCH"):
            return {...state, searchTerm: ""}
        default:
            return state
    }
}
export default rootReducer