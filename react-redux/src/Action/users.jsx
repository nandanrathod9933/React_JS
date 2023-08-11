import UserService from '../Services/UserService.jsx';
import httpanything from "../http-common.jsx"

export const retierveUsers = () => async (dispatch) => {
    try {
        const ResData = await httpanything.get("product")
        console.log("🚀 ~ retierveUsers ~ ResData:", ResData.data)
        return dispatch({
            type: "RETRIVE_ALL_USERS",
            payload: ResData.data
        })
    } catch (error) {
        console.log("error");
    }
}
// export const allProduct = () => async (dispatch) => {
//     try {
//         const ResData = await UserService.getAll();
//         return dispatch({
//             type: "RETRIVE_ALL_USERS",
//             payload: ResData
//         })
//     } catch (error) {
//         console.log("error");
//     }
// }