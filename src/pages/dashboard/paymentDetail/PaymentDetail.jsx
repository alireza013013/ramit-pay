import './PaymentDetail.scss'
import arrow from "../../../assets/icons/arrow.png"
import close from "../../../assets/icons/close-circle.svg"
import check from "../../../assets/icons/check-circle.svg"
import plus from "../../../assets/icons/plus-circle.svg"
import { useParams, useNavigate } from 'react-router-dom';

export const PaymentDetail = () => {

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
        <div className='main-payment-detail'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>تراکنش‌ها</span>
                    <img onClick={() => navigate(-1)} src={arrow} alt="Arrow" />
                </div>
                <div className='image-text-status'>
                    <div className='box-white'>
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
                        <span className='title'>مبلغ واریزی</span>
                        <span className={
                            [
                                transaction.isSuccessful ? "success-amount" : "fail-amount",
                                "amount"
                            ].join(" ")
                        }>{transaction.amount} تومان</span>
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
                        <span className='title'>شماره مرجع</span>
                        <span className='desc'>۵۳۲۴۲۵۲۳۴۳</span>
                    </div>

                    <div className='payyer-info'>
                        <span className='title'>مشخصات واریز کننده</span>
                        <div className='row'>
                            <span className='subtitle'>نام و نام‌خانوادگی</span>
                            <span className='description'>علی سرلک</span>
                        </div>
                        <div className='row'>
                            <span className='subtitle'>شماره موبایل</span>
                            <span className='description'>۰۹۱۰۱۰۹۸۹۸۹</span>
                        </div>
                        <div className='row'>
                            <span className='subtitle'>شماره کارت</span>
                            <span className='description'>۶۲۸۰ **** **** ۸۹۹۹</span>
                        </div>
                    </div>

                </div>


                <button>
                    اشتراک‌گذاری
                </button>
            </div>
        </div>
    )
}