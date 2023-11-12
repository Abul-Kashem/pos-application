import React from 'react';
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import CartTotal from '../components/cart/CartTotal';

const HomePage = () => {
    return (

        <>
            <Header />
            <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
                <div className="categories overflow-auto max-h-[calc(100vh_-_108px)] md:pb-10">
                    <Categories />
                </div>

                <div className="products flex-[8]">
                    <Products />
                </div>

                <div className="cart-wrapper min-w[300px] md:-mr-[24px] md:-mt-[24px] border">
                    <CartTotal />
                </div>
            </div>

        </>
    );
};

export default HomePage;