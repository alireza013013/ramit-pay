import './Dashboard.scss'
import { Link, Outlet, NavLink } from 'react-router-dom';
import home from "../../assets/icons/home.svg"
import transaction from "../../assets/icons/transaction.svg"
import card from "../../assets/icons/card.svg"
import profile from "../../assets/icons/profile.svg"
import plus from "../../assets/icons/plus.svg"

export const Dashboard = () => {
    return (
        <div className='main-dashboard'>
            <div className='container-pages'>
                <Outlet />
            </div>
            <div className='bottom-nav'>
                <NavLink to="/dashboard/home" className='link-nav'>
                    <img src={home} alt="Home" />
                    <span className='title'>خانه</span>
                </NavLink>
                <NavLink to="/dashboard/transactions" className='link-nav'>
                    <img src={transaction} alt="Transaction" />
                    <span className='title'>تراکنش‌ها</span>
                </NavLink>
                <NavLink to="/dashboard/addinventory" className='add-button-link'>
                    <img src={plus} alt="Transaction" />
                </NavLink>
                <NavLink to="/dashboard/payment" className='link-nav'>
                    <img src={card} alt="Transaction" />
                    <span className='title'>درگاه‌من</span>
                </NavLink>
                <NavLink to="/dashboard/profile" className='link-nav'>
                    <img src={profile} alt="Transaction" />
                    <span className='title'>پروفایل</span>
                </NavLink>
            </div>
        </div >
    )
}