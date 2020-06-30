import {Modal, Button, Input} from 'antd';
import React from "react";
import { UserOutlined,PhoneOutlined } from '@ant-design/icons';

class AddContact extends React.Component {
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
                <Button type="primary" onClick={this.showModal}>
                    Добавить новый контакт
                </Button>
                <Modal
                    title="Новый контакт"
                    visible={this.state.visible}
                    onOk={()=>{
                        if (this.state.name || this.state.phoneNumber){
                            let data={
                                name:this.state.name,
                                phonenumber:this.state.phoneNumber
                            }
                            this.props.addNewContact(data)
                            this.hideModal.call(this)
                            this.setState({
                                name:"",
                                phoneNumber:"",
                            })
                        }
                        else {
                            this.setState({
                                validate:"Имя или номер не указан"
                            })
                        }
                    }}
                    onCancel={this.hideModal}
                    okText="Добавить"
                    cancelText="Отмена"
                >{this.state.validate}
                    <Input  value={this.state.name} onChange={this.nameChange.bind(this)} style={{marginBottom:"10px"}} prefix={<UserOutlined />} /><br/>
                    <Input value={this.state.phoneNumber} onChange={this.poneChange.bind(this)} prefix={<PhoneOutlined />} /><br/>
                </Modal>
            </div>
        );
    }
}
export default AddContact