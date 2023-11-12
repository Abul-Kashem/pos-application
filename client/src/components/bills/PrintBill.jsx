import { Button, Modal } from 'antd';
import React from 'react';

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <Modal
            title="Print Invoice"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}
            width={800}
        >
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto bg-white px-6">
                    <article className="overflow-hidden">
                        <div className="logo my-6">
                            <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
                        </div>
                        <div className="bill-details">
                            <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                                <div className="text-md text-slate-500">
                                    <p className="font-bold text-slate-700">Invoice Details:</p>
                                    <p>Unwrapped</p>
                                    <p> Fake Street 123</p>
                                    <p> San Javier </p>
                                    <p> CA 1234</p>
                                </div>
                                <div className="text-md text-slate-500 sm:block hidden">
                                    <p className="font-bold text-slate-700">Invoice:</p>
                                    The Boring Company
                                    <p> Tesla Street 007</p>
                                    <p> Frisco </p>
                                    <p> CA 0000</p>
                                </div>
                                <div className="text-md text-slate-500">
                                    <div>
                                        <p className="font-bold text-slate-700">Invoice number:</p>
                                        <p>00041</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 mt-2">
                                            Date of issue:
                                        </p>
                                        <p>2022-11-21</p>
                                    </div>
                                </div>
                                <div className="text-md text-slate-500">
                                    <div>
                                        <p className="font-bold text-slate-700">Conditions:</p>
                                        <p>10 days</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-700 mt-2">Maturity:</p>
                                        <p>2023-11-21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bill-table-area mt-8">
                            <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th
                                            scope="col"
                                            className="py-3.5 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                                        >
                                            {" "}
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:hidden"
                                        >
                                            {" "}
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-center text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-center text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden"
                                        >
                                            Unit
                                        </th>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                        >
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-200">
                                        <td className="py-4 sm:table-cell hidden">
                                            <img
                                                src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                                                alt=""
                                                className="w-12 h-12 object-cover"
                                            />
                                        </td>
                                        <td className="py-4 sm:table-cell hidden">
                                            <div className="flex flex-col">
                                                <span className="font-medium">Salgam</span>
                                                <span className="sm:hidden inline-block text-xs">
                                                    Unit Price $5
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 sm:hidden" colSpan={4}>
                                            <div className="flex flex-col">
                                                <span className="font-medium">Salgam</span>
                                                <span className="sm:hidden inline-block text-xs">
                                                    Unit Price $5
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-center sm:table-cell hidden">
                                            <span>$5</span>
                                        </td>
                                        <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                                            <span>1</span>
                                        </td>
                                        <td className="py-4 text-end">
                                            <span>$5.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th
                                            className="text-right pt-4 sm:table-cell hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">
                                                Subtotal
                                            </span>
                                        </th>

                                        <th
                                            className="text-right pt-4 sm:hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">
                                                Subtotal
                                            </span>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-slate-700">$61</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="text-right pt-4 sm:table-cell hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">VAT</span>
                                        </th>
                                        <th
                                            className="text-right pt-4 sm:hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">VAT</span>
                                        </th>
                                        <th className="text-right pt-4" scope="row">
                                            <span className="font-normal text-red-600">+ $4.88</span>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="text-right pt-4 sm:table-cell hidden"
                                            colSpan="4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700"> Grand Total</span>
                                        </th>
                                        <th
                                            className="text-left pt-4 sm:hidden"
                                            scope="row"
                                            colSpan="4"
                                        >
                                            <p className="font-normal text-slate-700">Grand Total</p>
                                        </th>
                                        <th
                                            className="text-right pt-4"
                                            scope="row"
                                        >
                                            <span className="font-normal text-slate-700">65.88₺</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="py-9">
                                <div className="border-t pt-9 border-slate-200">
                                    <p className="text-sm font-light text-slate-700">
                                        Payment terms are 10 days. Pass on Unpackaged Debts According to the Payment Act 0000, freelancers are entitled to 00.00 late fee if debts are not paid after that they have the right to demand and at this point. Please note that a new invoice will be presented additionally. If the revised invoice is not paid within 14 days, the due date additional interest on the past account and 8% legal rate plus 0.5% Bank of A total of 8.5% will be applied, including the England base. Parties cannot make a contract outside the provisions of the Law.
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className="flex justify-end mt-4">
                <Button type="primary" size="large">Print</Button>
            </div>
        </Modal>
    );
};

export default PrintBill;