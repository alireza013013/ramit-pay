import './MyPayment.scss'
import qrcode from "../../../assets/icons/qrcode.svg"
import share from "../../../assets/icons/share.svg"
import copy from "../../../assets/icons/copy.svg"
import download from "../../../assets/icons/download.svg"
import logo from "../../../assets/RemitColor.png"
import { Link } from 'react-router-dom'
import { VerticalTransactionCard } from '../../../components/verticalTransactionCard/VerticalTransactionCard'

export const MyPayment = () => {


    const transactions = [
        {
            id: 1,
            title: "بابت خرید کالای دست دوم از علی سرلک",
            companyPayment: "علی سرلک",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            kind: "payment",
            isSuccessful: true
        },
        {
            id: 2,
            title: "خرید اینترنتی",
            companyPayment: "علی سرلک",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            kind: "payment",
            isSuccessful: false
        },
        {
            id: 3,
            title: "بابت خرید کالای دست دوم از علی سرلک",
            companyPayment: "علی سرلک",
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




    return (
        <div className='main-mypayment'>
            <div className='container'>
                <div className='share-qr-main'>
                    <div className='logo-div'>
                        <img src={logo} alt="Logo" />
                        <div className='title-name'>
                            <span className='title'>درگاه شخصی من</span>
                            <span className='name'>در رمیت‌ پی</span>
                        </div>
                    </div>
                    <div className='qrcode-buttons'>
                        <div className='title-buttons'>
                            <span className='title'>کیو‌آر درگاه من</span>
                            <span className='desc'>کیو‌آر خود را ذخیره یا اشتراک بگذارید</span>
                            <div className='buttons'>
                                <div className='download'>
                                    <img src={download} alt="Download" />
                                </div>
                                <div className='copy'>
                                    <img src={copy} alt="Copy" />
                                </div>
                            </div>
                        </div>
                        <div className='qrcode'>
                            <img src={qrcode} alt="QR Code" />
                        </div>
                    </div>

                    <div className='line-seperator'>

                    </div>

                    <div className='input-title'>
                        <span className='title'>کیو‌آر درگاه من</span>
                        <span className='desc'>کیو‌آر خود را ذخیره یا اشتراک بگذارید</span>
                        <div className='main-inputs'>
                            <span className='text'>https://remit.pay/ali</span>
                            <div className='buttons'>
                                <div className='download'>
                                    <img src={download} alt="Download" />
                                </div>
                                <div className='share'>
                                    <img src={share} alt="Share" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-transactions'>
                    <div className='title-link'>
                        <span className='title'>تراکنش‌ها</span>
                        <Link className='link' to="/dashboard/transactions">مشاهده همه</Link>
                    </div>

                    <div className='cards'>
                        {
                            transactions.map((item, index) => {
                                return (
                                    <VerticalTransactionCard
                                        id={item.id}
                                        key={index}
                                        title={item.title}
                                        companyPayment={item.companyPayment}
                                        amount={item.amount}
                                        date={item.date}
                                        kind={item.kind}
                                        isSuccessful={item.isSuccessful} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}