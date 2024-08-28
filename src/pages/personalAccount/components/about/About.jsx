import { useState } from 'react'
import './About.scss'
import office from '../../../../assets/office-image.jpg'

export const About = (props) => {

    return (
        <div className="main-about">
            <img className='main-office-image' src={office} alt="Main Office" />


            <div className='desc-div'>
                <span className='subtitle'>درباره رمیت</span>
                <span className='description'>
                    ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده اصلی ویژگی‌ها و مشخصاتی است که لپ تاپ شما باید داشته باشد.
                    سپس، ویژگی‌های فنی مهم اعمال می‌شود. این شامل پردازنده، حافظه، حافظه داخلی، کارت گرافیک و صفحه نمایش است. بهترین لپ تاپ برای کارهای کاربردی عموماً با پردازنده‌های قدرتمند، حافظه RAM بالا، و کارت گرافیک قوی ترجیح داده می‌شود.
                    همنین، طراحی و اندازه لپ تاپ نیز اهمیت دارد. برخی از مدل‌ها با طراحی باریک و سبک مناسب برای استفاده در حرکت، در حالی که دیگران با صفحه نمایش بزرگتر و صفحه کلید مجزا برای کارهای مهندسی و طراحی مناسب هستند.
                    در نهایت، قیمت یک عامل مهم در انتخاب یک لپ تاپ است.
                </span>
            </div>

            <div className='images-div'>
                <img className='office-image' src={office} alt="Main Office" />
                <img className='office-image' src={office} alt="Main Office" />
                <img className='office-image' src={office} alt="Main Office" />
                <img className='office-image' src={office} alt="Main Office" />
                <img className='office-image' src={office} alt="Main Office" />
                <img className='office-image' src={office} alt="Main Office" />
            </div>
        </div>
    )
}