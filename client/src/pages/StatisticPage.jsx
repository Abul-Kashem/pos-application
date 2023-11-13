import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import StatisticsCard from '../components/statistics/StatisticsCard';

import { Area, Pie } from '@ant-design/plots';

const StatisticPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();

    }, []);

    const asyncFetch = () => {

        fetch("https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log("Fetch data failed", error);
            })

    }

    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    const data2 = [
        {
            type: 'Furniture appliances',
            value: 38,
        },
        {
            type: 'Cereals, Oils and Non-staple food',
            value: 52,
        },
        {
            type: 'Fresh fruits',
            value: 0,
        },
        {
            type: 'Beauty care',
            value: 145,
        },
        {
            type: 'Baby products',
            value: 48,
        },
        {
            type: 'Imported food',
            value: 38,
        },
        {
            type: 'Food and drink',
            value: 38,
        },
        {
            type: 'Home cleaning',
            value: 38,
        },
    ];
    const data3 = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];




    const config2 = {
        appendPadding: 10,
        data: data2,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: "inner",
            offset: "-50%",
            content: "{value}",
            style: {
                textAlign: "center",
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: "element-selected",
            },
            {
                type: "element-active",
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                content: "Total Sales",
            },
        },
    };


    return (
        <>
            <Header />
            <div className="px-6 md:pb-0 pb-20">
                <h2 className="text-4xl font-bold text-center mb-4">Dashboard</h2>
                <div className="statistics-section">
                    <h2 className="text-lg">
                        Welcome{" "}
                        <span className='text-green-700 font-bold text-lg'>Admin</span>
                    </h2>

                    <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
                        <StatisticsCard
                            title={"Total Customer"}
                            amount={"10"}
                            img={"images/user.png"}
                        />

                        <StatisticsCard
                            title={"Total Earnings"}
                            amount={"$1000"}
                            img={"images/money.png"}
                        />

                        <StatisticsCard
                            title={"Total Sales"}
                            amount={"$1000"}
                            img={"images/sale.png"}
                        />

                        <StatisticsCard
                            title={"Total Product"}
                            amount={"20"}
                            img={"images/product.png"}
                        />
                    </div>

                    <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
                        <div className="lg:w-1/2 lg:h-full h-72">
                            <Area {...config} />
                        </div>
                        <div className="lg:w-1/2 lg:h-full h-72">
                            <Pie {...config2} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StatisticPage;