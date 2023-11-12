import React from 'react';
import { Button, Card, Form, Input, Modal, Select } from 'antd';

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };


    return (
        <Modal
            title="Create Invoice"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}
        >
            <Form layout={'vertical'} onFinish={onFinish}>

                <Form.Item
                    label="Customer Name"
                    name={"customerName"}
                    rules={[
                        {
                            required: true,
                            message: "Username is required"
                        }
                    ]}
                >
                    <Input placeholder="Write a customer name" />

                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name={"phoneNumber"}
                    rules={[{ required: true }]}
                >
                    <Input placeholder='Write a Phone Number" maxLength={11}' />

                </Form.Item>

                <Form.Item
                    label="Payment Method"
                    name={"paymentMode"}
                    rules={[{ required: true }]}
                >
                    <Select placeholder="Select a Payment Method">
                        <Select.Option value="Select">Select</Select.Option>
                        <Select.Option value="Credit Card">Credit Card</Select.Option>
                    </Select>

                </Form.Item>
                <Card>
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$549.00</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>Vat Total %8</span>
                        <span className="text-red-600">+ $43.92</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Total</b>
                        <b>$592.92</b>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            className="mt-4"
                            type="primary"
                            onClick={() => setIsModalOpen(true)}
                            htmlType="submit"
                        >
                            Create Order
                        </Button>
                    </div>
                </Card>

            </Form>
        </Modal>
    );
};

export default CreateBill;