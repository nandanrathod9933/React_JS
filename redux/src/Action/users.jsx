import UserService from '../Services/UserService.jsx';

export const retierveUsers = () => async (dispatch) => {
    try {
        const ResData = await UserService.getAll();
        return dispatch({
            type: "RETRIVE_ALL_USERS",
            payload: ResData
        })
    } catch (error) {
        console.log("error");
    }
}