import './ResultPay.scss'
import closeCircle from "../../../assets/icons/close-circle.svg"
import close from "../../../assets/icons/close.svg"
import check from "../../../assets/icons/check.svg"

import { useParams, useNavigate } from 'react-router-dom';

export const ResultPay = () => {

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
    let transaction = transactions[status == "success" ? 0 : 1];

    let navigate = useNavigate();

    return (
        <div className='main-result'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>افزودن موجودی</span>
                    <img onClick={() => navigate(-1)} src={closeCircle} alt="Arrow" />
                </div>

                <div className='extra-info-div'>

                    <div className='image-text-status'>
                        <div className={[
                            transaction.isSuccessful ? `success` : `fail`,
                            "box"
                        ].join(" ")}>
                            <img className={transaction.isSuccessful ? `check` : `close`} src={transaction.isSuccessful ? check : close} alt="Status" />
                        </div>
                    </div>

                    <span className={
                        [transaction.isSuccessful ? `success-text` : `fail-text`,
                            "status"
                        ].join(" ")
                    } >
                        {
                            transaction.isSuccessful ? "پرداخت موفق" : "پرداخت ناموفق"
                        }
                    </span>

                    <span className='amount-for'>
                        {
                            transaction.companyPayment
                        }
                    </span>

                    {
                        !transaction.isSuccessful &&
                        <>
                            <div className='each-row'>
                                <span className='title'>زمان</span>
                                <span className='desc'>{transaction.date}</span>
                            </div>

                            <div className='each-row'>
                                <span className='title'>شماره مرجع</span>
                                <span className='desc'>۵۳۲۴۲۵۲۳۴۳</span>
                            </div>
                        </>
                    }

                    {
                        transaction.isSuccessful &&
                        <>
                            <span className='balance-title'>موجودی کیف پول</span>
                            <span className={
                                [
                                    transaction.isSuccessful ? "success-amount" : "fail-amount",
                                    "amount"
                                ].join(" ")
                            }>{transaction.amount} تومان</span>
                        </>
                    }

                </div>


                <button>
                    بازگشت
                </button>
            </div>
        </div>
    )
}