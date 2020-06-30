const initialState=[]
const SETCONTACTS="SETCONTACTS"
const ClEARCONTACT="ClEARCONTACT"
const ADDCONTACTS="ADDCONTACTS"
const REMOVECONTACTS="REMOVECONTACTS"
const EDITCONTACTS="EDITCONTACTS"
export const setContactAC = (data)=>({type:SETCONTACTS,contacts:data})
export const addContactAC = (data)=>({type:ADDCONTACTS,contact:data})
export const editContactAC = (data)=>({type:EDITCONTACTS,contact:data})
export const removeContactAC = (id)=>({type:REMOVECONTACTS,id})
export const clearContactAC = ()=>({type:ClEARCONTACT})

const ContactReducer = (state=initialState,action) => {
    switch (action.type) {
        case ClEARCONTACT :{
            return initialState
        }
        case SETCONTACTS : {
            return [...state,...action.contacts]
        }
        case ADDCONTACTS : {
            return [...state,action.contact]
        }
        case REMOVECONTACTS : {
            const newState=[...state]
            return  newState.filter((el=>{
                return el.id !== action.id
            }))
        }
        case EDITCONTACTS :{
            const newState=[...state]
            newState.map((el)=>{
                if (el.id === action.contact.id){
                    el.name=action.contact.name
                    el.phonenumber=action.contact.phonenumber
                }
                return el
            })
            return newState
        }
        default :{
            return state
        }
    }
}
export default ContactReducer