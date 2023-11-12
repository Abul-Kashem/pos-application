import React from 'react';
import { Input, Badge } from 'antd';
import { Link } from "react-router-dom";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined

} from '@ant-design/icons';
import './header.css';

const Header = () => {
    return (
        <div className='border-b mb-6'>
            <header className='py-4 px-6 flex justify-between items-center gap-10'>
                <div className="logo">

                    <Link to="/"><h2 className="text-2xl font-bold md:text-4xl">LOGO</h2></Link>
                </div>

                <div className="header-search flex-1 flex justify-center">
                    <Input size="large" placeholder="Product search..." className='rounded-full max-w-[800px]' prefix={<SearchOutlined />} />
                </div>
                <div className="menu-links">
                    <Link to="/" className="menu-link flex flex-col">
                        <HomeOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Home</span>
                    </Link>

                    <Badge count={5} offset={[0, 6]} className='md:flex hidden'>
                        <Link to="/cart" className="menu-link flex flex-col">
                            <ShoppingCartOutlined className='md:text-2xl text-xl' />
                            <span className='md:text-xs text-[10px]'>Cart</span>
                        </Link>
                    </Badge>

                    <Link to="/bills" className="menu-link flex flex-col">
                        <CopyOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Invoices</span>
                    </Link>

                    <Link to="/" className="menu-link flex flex-col">
                        <UserOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Customers</span>
                    </Link>

                    <Link to="/" className="menu-link flex flex-col">
                        <BarChartOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Dashboard</span>
                    </Link>

                    <Link to="/" className="menu-link flex flex-col">
                        <LogoutOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Logout</span>
                    </Link>
                </div>

                <Badge count={5} offset={[0, 6]} className='md:hidden flex'>
                    <Link to="/" className="menu-link flex flex-col">
                        <ShoppingCartOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Cart</span>
                    </Link>
                </Badge>
            </header>
        </div>
    );
};

export default Header;