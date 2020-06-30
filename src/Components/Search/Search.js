import React from "react";
import {Avatar, Input, List, Spin} from "antd";
const { Search } = Input;

const SearchComponent = (props) =>{


    return(
        <div style={{width:"80%"}}>
            <Search placeholder="Поиск контактов" onSearch={value => props.setSearchText(value)} enterButton />
            {props.result.length===0?<><Spin size='large'/></>:<>
                <List
                    itemLayout="horizontal"
                    dataSource={props.result}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={item.name}
                                description={<div style={{display:"flex"}}><a href={`tel:${item.phonenumber}`}>{item.phonenumber}</a>
                                </div>}
                            />
                        </List.Item>
                    )}
                />

            </>}
            </div>
    )
}
export default SearchComponent