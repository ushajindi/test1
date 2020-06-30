import React from "react";
import {Modal} from "antd";
import ExclamationCircleOutlined from "@ant-design/icons/lib/icons/ExclamationCircleOutlined";


const RemoveContact = ({Contact,removeContact}) => {
    const ok =()=>{
        return (
            <div onClick={()=>{
                removeContact(Contact.id)
            }}>Удалить
                </div>
        )
    }
    const confirm = () => {
        Modal.confirm({
            title: Contact.name,
            icon: <ExclamationCircleOutlined />,
            content: `Удалить контакт ${Contact.name}`,
            okText: ok(),
            cancelText: 'Отмена',
        });
    }
    return (
        <div>
            <a style={{color:"red"}} onClick={confirm}>Удалить</a>
        </div>

    )
}

export default RemoveContact