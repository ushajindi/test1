import React, {useState} from "react";
import {Avatar,List,Spin} from "antd";
import AddContact from "./AddContact";
import RemoveContact from "./RemoveContact";
import EditContact from "./EditContact";
const Contacts = (props) => {
    const [visModal,setVisModal]=useState(true)
    return (
        <div>
            {props.isLoading?<><Spin size='large'/></>:<>
                <List
                    itemLayout="horizontal"
                    dataSource={props.Contacts}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={item.name}
                                description={<div style={{display:"flex"}}><a href={`tel:${item.phonenumber}`}>{item.phonenumber}</a>
                                    <div style={{marginLeft:"20px"}}><RemoveContact removeContact={props.removeContact} Contact={item}/></div>
                                    <div style={{marginLeft:"20px"}}><EditContact editContact={props.editContact} Contact={item}/></div>

                                </div>}
                            />
                        </List.Item>
                    )}
                />
                <div style={{marginTop:'10px'}}><AddContact addNewContact={props.addNewContact} visModal={visModal} setVisModal={setVisModal}/></div>

            </>}
        </div>
    )
}
export default Contacts