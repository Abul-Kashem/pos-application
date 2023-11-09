import React from 'react';
import { Input, Badge } from 'antd';
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
                    <a href="/"><h2 className="text-2xl font-bold md:text-4xl">LOGO</h2></a>
                </div>

                <div className="header-search flex-1 flex justify-center">
                    <Input size="large" placeholder="Product search..." className='rounded-full max-w-[800px]' prefix={<SearchOutlined />} />
                </div>
                <div className="menu-links">
                    <a href="/" className="menu-link flex flex-col">
                        <HomeOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Home</span>
                    </a>

                    <Badge count={5} offset={[0, 6]} className='md:flex hidden'>
                        <a href="/" className="menu-link flex flex-col">
                            <ShoppingCartOutlined className='md:text-2xl text-xl' />
                            <span className='md:text-xs text-[10px]'>Cart</span>
                        </a>
                    </Badge>

                    <a href="/" className="menu-link flex flex-col">
                        <CopyOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Invoices</span>
                    </a>

                    <a href="/" className="menu-link flex flex-col">
                        <UserOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Customers</span>
                    </a>

                    <a href="/" className="menu-link flex flex-col">
                        <BarChartOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Dashboard</span>
                    </a>

                    <a href="/" className="menu-link flex flex-col">
                        <LogoutOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Logout</span>
                    </a>
                </div>

                <Badge count={5} offset={[0, 6]} className='md:hidden flex'>
                    <a href="/" className="menu-link flex flex-col">
                        <ShoppingCartOutlined className='md:text-2xl text-xl' />
                        <span className='md:text-xs text-[10px]'>Cart</span>
                    </a>
                </Badge>
            </header>
        </div>
    );
};

export default Header;