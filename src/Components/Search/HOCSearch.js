import React, {useEffect, useState} from "react";
import SearchComponent from "./Search";
import axios from 'axios'
import {connect} from "react-redux";
import {searchAC, searchClearAC} from "../../Redux/SearchReducer";
import {Redirect} from "react-router-dom";

const HOCSearch = (props) => {
    const [searchText,setSearchText]=useState()
    useEffect(()=>{
        props.searchAC([])
    },[])
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts?q=${searchText}`).then((promise) => {
            props.clear()
            props.searchAC(promise.data)
        })
    },[searchText])
    return (
        <>
            {!props.Auth.authIs ? <Redirect to='/login'/> :
                <SearchComponent setSearchText={setSearchText} result={props.result}/>
            }
    </>
        )
}
const mapStateToProps = (state) => {
    return {
        result: state.resultSearch,
        Auth:state.Auth
    }
}
export default connect(mapStateToProps,{searchAC:searchAC,clear:searchClearAC})(HOCSearch)