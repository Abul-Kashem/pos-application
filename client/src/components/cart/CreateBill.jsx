import React from 'react';
import { Modal } from 'antd';

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <Modal title="Create Invoice" open={isModalOpen} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};

export default CreateBill;