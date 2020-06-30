import React, {useEffect, useState} from "react";
import axios from "axios"
import {connect} from "react-redux";
import Contacts from "./Contacts";
import {addContactAC, clearContactAC, editContactAC, removeContactAC, setContactAC} from "../../Redux/ContactReducer";
import {Redirect} from "react-router-dom";

const HOCContacts = (props) => {
    const [pageSize,setPageSize]=useState()
    const getApiContact = () =>{
        axios.get('http://localhost:3001/posts').then((promise) => {
            if (promise.statusText === "OK" && promise.status === 200) {
                props.setContact(promise.data)
            }
        })
    }
    const addApiContact = ({name,phonenumber}) => {
        axios.post("http://localhost:3001/posts",{name,phonenumber},{
            headers:{
        'Content-Type': 'application/json'
            }
        }).then((promise)=>{
            props.addContact(promise.data)
        })
    }
    const editApiContact = ({id,name,phonenumber}) => {
        axios.put(`http://localhost:3001/posts/${id}`,{name,phonenumber},{
            headers:{
        'Content-Type': 'application/json'
            }
        }).then((promise)=>{
            const data={
                id,name,phonenumber
            }
            props.editContact(data)
        })
    }
    const removeContact = (id) =>{
        axios.delete(`http://localhost:3001/posts/${id}`).then((promise)=>{
            props.removeContact(id)
        })
    }
    useEffect(() => {
        props.clear()
       getApiContact()
    }, [])

    return(
        <>{!props.Auth.authIs ? <Redirect to='/login'/> :
            <Contacts
                editContact={editApiContact}
                removeContact={removeContact}
                addNewContact={addApiContact} isLoading={props.Contacts.length === 0 ? true : false}
                Contacts={props.Contacts}/>
        }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        Contacts:state.Contacts,
        Auth:state.Auth
    }
}
export default connect(mapStateToProps,{setContact:setContactAC,addContact:addContactAC,removeContact:removeContactAC,editContact:editContactAC,clear:clearContactAC})(HOCContacts)