import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='h-screen'>
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <Form layout='vertical'>
                        <Form.Item
                            label="Username"
                            name={"username"}
                            rules={[
                                {
                                    required: true,
                                    message: "Username Field Cannot Be Left Blank!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "Email Field Cannot Be Left Blank!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Password Field Cannot Be Left Blank!"
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name={"confirm_pass"}
                            rules={[
                                {
                                    required: true,
                                    message: "Password Confirm Field Cannot Be Left Blank!"
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType='submit'
                                className='w-full'
                                size='large'
                            >
                                Register
                            </Button>
                        </Form.Item>

                    </Form>

                    <div className="flex justify-center absolute left-0 bottom-0 w-full">
                        Do you have an account?&nbsp;
                        <Link to={"/login"} className='text-blue-600'>
                            Login
                        </Link>
                    </div>
                </div>
                <div className="className='xl:w-4/6 min-w-[800px]'">Right Side</div>
            </div>
        </div>
    );
};

export default Register;