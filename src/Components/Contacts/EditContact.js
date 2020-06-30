import {Modal, Button, Input} from 'antd';
import React from "react";
import { UserOutlined,PhoneOutlined } from '@ant-design/icons';

class EditContact extends React.Component {
    state = {
        visible: false,
        name:"",
        phoneNumber:"",
        validate:""
    };
    poneChange(e){
        this.setState({
            phoneNumber:e.target.value
        })
    }
    nameChange(e){
        this.setState({
            name:e.target.value
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    hideModal = () => {
        this.setState({
            visible: false,
        })
    };

    render() {
        return (
            <div>
                <a onClick={this.showModal}>
                    Редактировать
                </a>
                <Modal
                    title={this.props.Contact.name}
                    visible={this.state.visible}
                    onOk={()=>{
                        if (this.state.name || this.state.phoneNumber){
                            let data={
                                id:this.props.Contact.id,
                                name:this.state.name,
                                phonenumber:this.state.phoneNumber
                            }
                            this.props.editContact(data)
                            this.hideModal.call(this)
                        }
                        else {
                            this.hideModal.call(this)
                        }
                    }}
                    onCancel={this.hideModal}
                    okText="Добавить"
                    cancelText="Отмена"
                >{this.state.validate}
                    <Input placeholder={this.props.Contact.name}  value={this.state.name} onChange={this.nameChange.bind(this)} style={{marginBottom:"10px"}} prefix={<UserOutlined />} /><br/>
                    <Input placeholder={this.props.Contact.phonenumber} value={this.state.phoneNumber} onChange={this.poneChange.bind(this)} prefix={<PhoneOutlined />} /><br/>
                </Modal>
            </div>
        );
    }
}
export default EditContact