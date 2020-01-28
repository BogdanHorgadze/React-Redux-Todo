import {RECIVE_VALUE,ADD_VALUE,DELETE} from "../actions/actionType";


const initialState = {
    inputValue : '',
    todo : [],
}

export default function form (state = initialState, action) {
    switch (action.type) {
        case RECIVE_VALUE:
            return{
               ...state, 
               inputValue : action.val,
            }
            break;
        case ADD_VALUE:
            return{
               ...state, 
               inputValue : action.value,
               todo : [...state.todo, action.value],
            }
            break;
            case DELETE:
            return{
               ...state, todo : [...state.todo].filter((item,index) => index !== action.index)
            }
            break;

        default:
            return state
    }
}
