import './Update.scss'
import closeCircle from "../../../assets/icons/close-circle.svg"
import arrow from "../../../assets/icons/down-arrow.svg"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Update = () => {

    let navigate = useNavigate();

    const [updates, setUpdates] = useState([
        {
            subtitle: "نتیجه قرعه‌کشی سوم بهار امسال",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            description: "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده",
            isOpen: false
        },
        {
            subtitle: "نتیجه قرعه‌کشی دوم بهار امسال",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            description: "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده",
            isOpen: false
        },
        {
            subtitle: "نتیجه قرعه‌کشی چهارم بهار امسال",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            description: "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده",
            isOpen: false
        }
    ])

    const changeOpenParallex = (index) => {
        let element = updates[index]
        let newFilter = [...updates]
        if (!element.isOpen) {
            newFilter.forEach((item) => {
                item.isOpen = false
            })
        }
        element.isOpen = !element.isOpen
        newFilter[index] = element
        setUpdates(newFilter)
    }

    return (
        <div className='main-update'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>اطلاع‌رسانی‌ها</span>
                    <img onClick={() => navigate(-1)} src={closeCircle} alt="Arrow" />
                </div>


                {
                    updates.map((item, index) => {
                        return (
                            <div className='parallex-div' key={index} onClick={() => changeOpenParallex(index)}>
                                <img src={arrow} alt="Arrow" className={item.isOpen ? 'open' : ''} />
                                <span className='subtitle'>{item.subtitle}</span>
                                <span className='date'>{item.date}</span>
                                {
                                    item.isOpen && <span className='description'>{item.description}</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}