import { Button, Card, Table } from 'antd';
import React, { useState } from 'react';
import Header from '../components/header/Header';
import CreateBill from '../components/cart/CreateBill';

const CartPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
            key: '1',

        },

    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];


    console.log(isModalOpen);

    return (
        <>
            <Header />
            <div className="px-6">
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />

                <div className="cart-total flex justify-end mt-4">
                    <Card className='w-72'>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="">550.00</span>
                        </div>
                        <div className="flex justify-between my-2">
                            <span>Vat Total 8%</span>
                            <span className="text-red-600">+ $45.00</span>
                        </div>
                        <div className="flex justify-between">
                            <b>Total</b>
                            <b className="">$595.00</b>
                        </div>
                        <Button className='mt-4 w-full' type='primary' size='large' onClick={() => setIsModalOpen(true)}>Create Order</Button>
                    </Card>
                </div>
            </div>

            <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default CartPage;