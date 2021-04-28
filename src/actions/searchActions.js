export const changeInput = (value) => {
    return dispatch => {
        dispatch({type: "CHANGE_INPUT", payload: value})
    }
}