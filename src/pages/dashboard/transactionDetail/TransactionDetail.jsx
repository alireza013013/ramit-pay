import { useEffect, useState } from 'react'
import './TransactionDetail.scss'
import arrow from "../../../assets/icons/arrow.png"
import close from "../../../assets/icons/close-circle.svg"
import check from "../../../assets/icons/check-circle.svg"
import plus from "../../../assets/icons/plus-circle.svg"
import successUser from '../../../assets/icons/success-user.svg'
import failUser from '../../../assets/icons/failed-user.svg'
import { useParams, useNavigate } from 'react-router-dom';

export const TransactionDetail = () => {


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

    let { id } = useParams();
    let transaction = transactions[id - 1];

    let navigate = useNavigate();


    return (
        <div className='main-transaction-detail'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>تراکنش‌ها</span>
                    <img onClick={() => navigate(-1)} src={arrow} alt="Arrow" />
                </div>
                <div className='image-text-status'>
                    <img src={transaction.isSuccessful ? successUser : failUser} alt="Status" />
                    <span className={
                        [
                            transaction.isSuccessful ? "payment" : "fail",
                            "kind"
                        ].join(" ")
                    }>
                        {
                            transaction.kind == "payment" ? `پرداخت ` : `شارژ `
                        }
                        {
                            transaction.isSuccessful ? `موفق` : `ناموفق`
                        }
                        <img src={transaction.isSuccessful ? check : close} alt="Kind Payment" />
                    </span>
                </div>

                <span className='name'>
                    {
                        transaction.title
                    }
                </span>

                <span className='amount-for'>
                    {
                        transaction.companyPayment
                    }
                </span>

                <span className='title-amount'>
                    مبلغ
                    {
                        transaction.kind == "payment" ? ` واریزی ` : ` شارژ `
                    }
                </span>

                <span className={
                    [
                        transaction.isSuccessful ? "success" : "fail",
                        "amount"
                    ].join(" ")
                }>{transaction.amount} تومان</span>


                <div className='extra-info-div'>
                    <div className='each-row'>
                        <span className='title'>وضعیت</span>
                        <span className={
                            [
                                transaction.isSuccessful ? transaction.kind == "payment" ? "payment" : "charge" : "fail",
                                "kind"
                            ].join(" ")
                        }>
                            {
                                transaction.kind == "payment" ? `پرداخت ` : `شارژ `
                            }
                            {
                                transaction.isSuccessful ? `موفق` : `ناموفق`
                            }
                            <img src={transaction.isSuccessful ? transaction.kind == "payment" ? check : plus : close} alt="Kind Payment" />
                        </span>
                    </div>
                    <div className='each-row'>
                        <span className='title'>زمان</span>
                        <span className='desc'>{transaction.date}</span>
                    </div>
                    <div className='each-row'>
                        <span className='title'>شماره پیگیری</span>
                        <span className='desc'>۳۴۲۳۴۳۲۴۳۲۴۲۳۵۲</span>
                    </div>
                    <div className='each-row'>
                        <span className='title'>پرداخت از کارت/حساب</span>
                        <span className='desc'>۶۲۸۰ ۹۰۹۰ ۱۱۸۹ ۸۹۹۹</span>
                    </div>
                    <div className='each-row'>
                        <span className='title'>شماره مرجع</span>
                        <span className='desc'>۵۳۲۴۲۵۲۳۴۳</span>
                    </div>

                </div>


                <button>
                    اشتراک‌گذاری
                </button>
            </div>
        </div>
    )
}