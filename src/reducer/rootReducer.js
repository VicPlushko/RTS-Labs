const initialState = {
    prevSearch: [],
    results: [],
    searchTerm: "",
    searching: false
}
//Use combineReducers() if more reducers are needed.
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case("START_SEARCH"):
            return {...state, searching: true}
        case("SEARCH_COMPLETE"):
            return {...state, 
                   searching: false,
                   results: action.payload, 
                   prevSearch: [...state.prevSearch, action.payload] 
                   }
        case("CHANGE_INPUT"):
            return {...state, searchTerm: action.payload}
        default:
            return state
    }
}
export default rootReducer