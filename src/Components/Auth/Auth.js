import React, {useState} from "react";
import {connect} from "react-redux";
import {Form, Input, Button, Checkbox} from 'antd';
import {setAuthAC} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";

const Auth = (props) => {
    const [redi,setRedi]=useState(false)

    const redirect = ()=>{
        return <Redirect to='/contacts'/>
    }

    const layout = {
        labelCol: {
            span: 10,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    }
    const onFinish = values => {
        props.setAuth(values)
        setRedi(true)
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }
    console.log(props)
    return (
        <div style={{marginTop:"20px"}}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Введите email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Поля не можеть быть пустым!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Введите пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Поля не можеть быть пустым!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout} name="rememberMe" valuePropName="checked">
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {redi&&redirect()}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Auth: state.Auth
    }
}
export default connect(mapStateToProps, {
    setAuth: setAuthAC
})(Auth)