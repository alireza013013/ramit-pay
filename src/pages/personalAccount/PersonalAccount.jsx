import './PersonalAccount.scss'
import arrow from "../../assets/icons/arrow.png"
import { useState } from 'react'
import { Profile } from './components/profile/Profile'
import { About } from './components/about/About'
import { Support } from './components/support/Support'
import { Roles } from './components/roles/Roles'
import { Link } from 'react-router-dom'

export const PersonalAccount = () => {

    const [tabActiveIndex, setTabActiveIndex] = useState(1)

    const handleTab = (event, index) => {
        event.target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
        setTabActiveIndex(index)
    }


    return (
        <div className='main-personal'>
            <div className='title-button'>
                <span className='title'>حساب کاربری</span>
                <Link className='link' to={'/dashboard/home'}><img src={arrow} alt="Arrow" /></Link>
            </div>

            <div className='tabs'>
                <div className={[
                    tabActiveIndex == 1 ? 'active tab' : 'tab'
                ]} onClick={(event) => handleTab(event, 1)}>
                    پروفایل
                </div>

                <div className={[
                    tabActiveIndex == 2 ? 'active tab' : 'tab'
                ]} onClick={(event) => handleTab(event, 2)}>
                    درباره رمیت
                </div>


                <div className={[
                    tabActiveIndex == 3 ? 'active tab' : 'tab'
                ]} onClick={(event) => handleTab(event, 3)}>
                    پشتیبانی
                </div>

                <div className={[
                    tabActiveIndex == 4 ? 'active tab' : 'tab'
                ]} onClick={(event) => handleTab(event, 4)}>
                    قوانین و مقررات
                </div>
            </div>

            {
                tabActiveIndex == 1 && <Profile />
            }

            {
                tabActiveIndex == 2 && <About />
            }

            {
                tabActiveIndex == 3 && <Support />
            }

            {
                tabActiveIndex == 4 && <Roles />
            }
        </div>
    )
}