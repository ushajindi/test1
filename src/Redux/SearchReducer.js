const initialState=[]
const SEARCH="SEARCH"
const SEARCHCLEAR="SEARCHCLEAR"
export const searchAC=(data)=>({type:SEARCH,result:data})
export const searchClearAC=(data)=>({type:SEARCHCLEAR})

const SearchReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SEARCH :{
            return [...state,...action.result]
        }
        case SEARCHCLEAR :{
            return [...initialState]
        }
        default:{
            return [...state]
        }
    }
}
export default SearchReducer