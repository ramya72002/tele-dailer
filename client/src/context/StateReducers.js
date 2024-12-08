import { reducerCases } from "./constants";

export const initialState ={
    userInfo:undefined,
    newUser:false,
    contactPage:false,
    currentChatUser:undefined,
    messages:[],
    socket:undefined,
};
const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.SET_USER_INFO:
            return {
                ...state,
                userInfo:action.userInfo,
            };
        case reducerCases.SET_NEW_USER :
            return {
                ...state,
                newUser:action.newUser,
            };
        case reducerCases.SET_ALL_CONTACTS_PAGE:
            return {
                ...state,
                contactPage:!state.contactPage,
            };
        case reducerCases.CHANGE_CURRENT_CHAT_USER:
            return {
                ...state,
                currentChatUser:action.user,
            };
        case reducerCases.SET_MESSAGES:
            return {
                ...state,
                messages:action.messages,
            };
        case reducerCases.SET_SOCKET:
            return {
                ...state,
                socket:action.socket,
            };

            case reducerCases.ADD_MESSAGE:
                return {
                 ...state,
                 message:[...state.message, action.newMessage],
                };
        default:
            return state;
    }
};
export default reducer;