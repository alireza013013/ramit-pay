import './Support.scss'
import { TextInput } from '../../../../components/textInput/TextInput'
import { useState } from 'react'
import { TextAreaInput } from '../../../../components/textAreaInput/TextAreaInput'
import instagram from "../../../../assets/icons/instagram.svg"
import youtube from "../../../../assets/icons/youtube.svg"
import twitter from "../../../../assets/icons/twitter.svg"
import aparat from "../../../../assets/icons/aparat.svg"
import linkedin from "../../../../assets/icons/linkedin.svg"
import telegram from "../../../../assets/icons/telegram.svg"


export const Support = () => {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")


    return (
        <div className="main-support">
            <div className='box-information'>
                <span className='title'>
                    اطلاعات تماس
                </span>
                <div className='info-div'>
                    <span className='subtitle'>تلفن تماس</span>
                    <span className='phonenumber'>۰۲۱ ۲۳۴۵۶۹</span>
                </div>

                <div className='info-div'>
                    <span className='subtitle'>آدرس پست الکترونیک</span>
                    <span className='email'>Hi@remit.pay</span>
                </div>

                <div className='address'>
                    <span className='subtitle'>آدرس</span>
                    <span className='address-text'>تهران، بالاتر از میدان ولیعصر، کوچه شهید پرویز روشن، پلاک 19، ساختمانِ M.IT </span>
                </div>

                <div className='line-seperator'>

                </div>

                <div className='social-media'>
                    <span className='title'>شبکه‌های اجتماعی</span>

                    <a className='link' href="www.google.com">
                        <img src={instagram} alt="instagram" />
                    </a>

                    <a className='link' href="www.google.com">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <a className='link' href="www.google.com">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a className='link' href="www.google.com">
                        <img src={aparat} alt="aparat" />
                    </a>
                    <a className='link' href="www.google.com">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <a className='link' href="www.google.com">
                        <img src={telegram} alt="telegram" />
                    </a>
                </div>
            </div>

            <span className='title-form'>درخواست پشتیبانی</span>
            <span className='subtitle-form'>مشکل یا سوال خود را در فرم زیر وارد نمایید</span>


            <TextInput title="نام و نام‌خانوادگی" value={name} placeholder="علی سرلک" setValue={(value) => setName(value)} type="text" />

            <TextInput title="شماره موبایل" value={phoneNumber} placeholder="۰۹۱۰۸۵۵۹۹۸۸" setValue={(value) => setPhoneNumber(value)} type="tel" />

            <TextAreaInput title="متن پیام" value={message} placeholder="توضیحات .." setValue={(value) => setMessage(value)} />

            <button>
                ارسال پیام
            </button>
        </div>
    )
}