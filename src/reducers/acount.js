let initialState = {
    list:[],web:1};
const account = (state=initialState,action)=>{
    switch (action.type) {
        case "SET_LIST":
            return {...state,list:[...action.payload]}
        case "CHANGE_WEB" :
            return {...state,web:action.payload}
        default:
            return state
    }
}

export default account ;