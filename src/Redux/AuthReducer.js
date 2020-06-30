const initialState = {
    email:"",
    password:"",
    rememberMe:false,
    authIs:false
}
const SETAUTH = "SETAUTH"
const SETSINGOUT = "SETSINGOUT"
export const setAuthAC=(data)=>({type:SETAUTH,authData:data})
export const setSingOutAC=()=>({type:SETSINGOUT})
const AuthReducer = (state=initialState,action) => {
    switch (action.type) {
        case SETAUTH:{
            return {...state,...{
                    email: action.authData.email,
                    password: action.authData.password,
                    rememberMe: action.authData.rememberMe,
                    authIs: true
                }}
        }
        case SETSINGOUT :{
            return initialState
        }
    }
    return state
}
export default AuthReducer