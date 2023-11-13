import React from 'react';
import Header from '../components/header/Header';
import StatisticsCard from '../components/statistics/StatisticsCard';

const StatisticPage = () => {
    return (
        <>
            <Header />
            <div className="px-6">
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

                </div>
            </div>
        </>
    );
};

export default StatisticPage;