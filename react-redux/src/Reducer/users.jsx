import { RETRIVE_ALL_USERS } from '../Action/types.jsx';

const intialState = {
    product: []
};

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case RETRIVE_ALL_USERS:
            console.log("RETRIVE_ALL_USERS");
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}

// export const selectUser = (state) => state.users

export default usersReducer;