import "./RegisterDeposit.scss"
import arrow from "../../../assets/icons/arrow.png"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { TextInput } from "../../../components/textInput/TextInput";

export const RegisterDeposit = () => {

    let navigate = useNavigate();

    const [bookingNumber, setBookingNumber] = useState("")

    return (
        <div className='main-register-deposit'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>ثبت واریز جدید</span>
                    <img onClick={() => navigate(-1)} src={arrow} alt="Arrow" />
                </div>

                <span className="subtitle">
                    واریز حضوری
                </span>

                <span className="desc">
                    لطفا جهت تکمیل فرایند،<br /> شماره سفارش‌ثبت شده‌تان را وارد نمایید
                </span>

                <div className="container-input">
                    <TextInput title="شماره سفارش" value={bookingNumber} placeholder="۵۳۲۴۲۵۲۳۴۳" setValue={(value) => setBookingNumber(value)} type="text" />
                </div>

                <button className="continue">
                    ادامه
                </button>
            </div>
        </div>
    )
}