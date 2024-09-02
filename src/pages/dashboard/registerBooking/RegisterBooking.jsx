import "./RegisterBooking.scss"
import arrow from "../../../assets/icons/arrow.png"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { TextInput } from "../../../components/textInput/TextInput";

export const RegisterBooking = () => {

    let navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState("")

    const bookingStatus = 0


    return (
        <div className='main-register-booking'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>ثبت شماره سفارش</span>
                    <img onClick={() => navigate(-1)} src={arrow} alt="Arrow" />
                </div>

                <span className="subtitle">
                    تایید سفارش
                </span>

                <span className="desc">
                    لطفا جهت تکمیل فرایند،<br /> شماره شبا یا کارت واریزی را وارد نمایید
                </span>


                <div className='extra-info-div'>
                    <div className='payyer-info'>
                        <div className='row'>
                            <span className='subtitle-info'>کد رهگیری رمیت</span>
                            <span className='description'>۵۳۲۴۲۵۲۳۴۳</span>
                        </div>
                    </div>
                    <span className="title-booking">مشخصات سفارش درخواستی</span>

                    <div className='each-row'>
                        <span className='title'>وضعیت سفارش</span>
                        <span className={
                            [
                                bookingStatus == 0 ? "payment" : "",
                                bookingStatus == 1 ? "charge" : "",
                                bookingStatus == 2 ? "fail" : "",
                                "kind"
                            ].join(" ")
                        }>
                            {
                                bookingStatus == 0 ? "در انتظار پرداخت"
                                    : ``

                            }
                            {
                                bookingStatus == 1 ? "پرداخت شده" : ``
                            }
                            {
                                bookingStatus == 2 ? "پرداخت نشده" : ``
                            }
                        </span>
                    </div>

                    <div className='each-row'>
                        <span className='title'>زمان ثبت سفارش</span>
                        <span className='desc-row'>پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵</span>
                    </div>


                    <div className='store-info'>
                        <div className='row-store'>
                            <span className='subtitle-store'>فروشگاه</span>
                            <span className='description-store'>ام‌آی‌تی شاپ</span>
                        </div>
                        <div className='row-store'>
                            <span className='subtitle-store'>شماره حساب فروشگاه</span>
                            <span className='description-store'>۴۵۳۸۵۹۶۸۲۷۳۴۵۹۱۲</span>
                        </div>
                        <div className='row-store'>
                            <span className='subtitle-store'>شناسه واریز</span>
                            <span className='description-store'>۴۵۶۳۸۷۷۸۸</span>
                        </div>
                        <div className='row-store'>
                            <span className='subtitle-store'>مبلغ سفارش ( واریزی )</span>
                            <span className='description-store'>۱۲۰,۴۵۹,۹۰۰ تومان</span>
                        </div>
                    </div>
                </div>
                <div className="container-input">
                    <TextInput title="شماره شبا یا کارت واریزی" value={cardNumber} placeholder="۴۵۳۸۵۹۶۸۲۷۳۴۵۹۱۲" setValue={(value) => setCardNumber(value)} type="text" />
                </div>

                <button className="continue">
                    تایید و ادامه
                </button>
            </div>
        </div>
    )
}