import React from 'react';
import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import './index.scss'
import logo from '../../assets/1.png'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'
const login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { loginStore } = useStore()
    const navigete = useNavigate()
    console.log(loginStore);
    const onFinish = async (values) => {

        console.log('Success:', values);
        try {
            await loginStore.login(values)
            navigete('/')
        } catch (error) {

            messageApi.open({
                type: 'error',
                content: error.response?.data?.message || '登录失败'
            })
        }
    };
    return (

        <div className='login'>
            {contextHolder}
            <Card className='login-container'>
                <img src={logo} className='login-logo' />
                <Form
                    onFinish={onFinish}
                    validateTrigger={['onBlur', 'onChange']}
                    initialValues={{
                        username: "13911111111",
                        password: '246810',
                        remember: true
                    }}
                >
                    <Form.Item
                        label="手机号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '手机号不能为空',
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号码不对',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Input size='large' placeholder='请输入手机号' />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号',
                            },
                            {
                                len: 6,
                                message: '密码长度应该为6位',
                                validateTrigger: 'onBlur'
                            }
                        ]}
                    >
                        <Input.Password size='large' placeholder='请输入密码' maxLength={6} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox className='login-chexkbox-label'>我已阅读并同意「用户协议」和 「隐私条款」</Checkbox>
                    </Form.Item>

                    <Form.Item
                    >
                        <Button block type="primary" htmlType="submit" size='large'>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default login;