import React, {useContext, useState} from 'react';
import '@styles/Header.scss';
import AppContext from '../context/AppContext';

import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

import Menu from '@components/Menu'
import MyOrder from '@containers/MyOrder'


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false)
	const { state } = useContext(AppContext);

	const handleEmailClick = () => {
		setToggle(!toggle);
	}

	const handleCartClick = () => {
		setToggleOrders(!toggleOrders)
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleEmailClick}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleCartClick}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 && <div>{state.cart.length}</div>}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
