import {types} from "../types";
const initialState = {
    loading:false,
    user:[],
    error:{},
}

const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SEND_REQUEST:
            return {
                ...state,
                loading:true
            }
        case types.SEND_REQUEST_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading:true,
                users:action.payload,
                error:{},
            }
        case types.SEND_REQUEST_FAILURE:
            return {
                ...state,
                loading:false,
                users:[],
                error:action.error
            }
        default:
            return {
                state
            }
    }
}
export default fetchDataReducer;