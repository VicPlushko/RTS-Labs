const initialState = {
    prevSearch: [],
    searchTerm: "",
    searching: false
}
//Use combineReducers() if more reducers were needed.
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case("START_SEARCH"):
            return {...state, searching: true}
        case("SEARCH_COMPLETE"):
            return {...state, searching: false, prevSearch: action.payload}
        default:
            return state
    }
}
export default rootReducer