import './Resultbooking.scss'
import closeCircle from "../../../assets/icons/close-circle.svg"
import close from "../../../assets/icons/close.svg"
import check from "../../../assets/icons/check.svg"

import { useParams, useNavigate } from 'react-router-dom';

export const ResultBooking = () => {

    const transactions = [
        {
            id: 1,
            title: "خرید اینترنتی",
            companyPayment: "ام‌آی‌تی شاپ",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            kind: "payment",
            isSuccessful: true
        },
        {
            id: 2,
            title: "خرید اینترنتی",
            companyPayment: "ام‌آی‌تی شاپ",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            kind: "payment",
            isSuccessful: false
        },
        {
            id: 3,
            title: "شارژ کیف پول",
            companyPayment: "رمیت",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            kind: "charging",
            isSuccessful: true
        },
        {
            id: 4,
            title: "شارژ کیف پول",
            companyPayment: "رمیت",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            kind: "charging",
            isSuccessful: false
        }
    ]

    let { status } = useParams();
    const isSuccessful = status === "success"

    let navigate = useNavigate();

    return (
        <div className='main-result-booking'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>نتیجه درخواست</span>
                    <img onClick={() => navigate(-1)} src={closeCircle} alt="Arrow" />
                </div>

                <div className='extra-info-div'>
                    <div className='image-text-status'>
                        <div className={[
                            isSuccessful ? `success` : `fail`,
                            "box"
                        ].join(" ")}>
                            <img className={isSuccessful ? `check` : `close`} src={isSuccessful ? check : close} alt="Status" />
                        </div>
                    </div>
                    <span className={
                        [isSuccessful ? `success-text` : `fail-text`,
                            "status"
                        ].join(" ")
                    } >
                        {
                            isSuccessful ? "ثبت درخواست موفق" : " ثبت پرداخت ناموفق"
                        }
                    </span>
                    <span className='amount-for'>
                        واریز حضوری بانکی
                    </span>
                    <span className='description'>
                        پس از واریز مبلغ سفارش‌تان از طریق بانک یا خودپرداز به‌صورت خودکار سفارش‌تان به وضعیت پرداخت شده تغییر خواهد کرد.
                    </span>
                </div>


                <button>
                    بازگشت
                </button>
            </div>
        </div>
    )
}