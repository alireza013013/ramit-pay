import './InPersonTransaction.scss'
import arrow from "../../../assets/icons/arrow.png"
import { CardInPersonTransaction } from '../../../components/cardInPersonTransaction/CardInPersonTransaction'

export const InPersonTransaction = () => {

    const transactions = [
        {
            status: 0,
            trackingNumber: "۰۹۱۰۱۰۹۸۹۸۹",
            cardNumber: "۶۲۸۰ **** **** ۸۹۹۹",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            bookingNumber: "۵۳۲۴۲۵۲۳۴۳",
            bookingStatus: 0
        },
        {
            status: 1,
            trackingNumber: "۰۹۱۰۱۰۹۸۹۸۹",
            cardNumber: "۶۲۸۰ **** **** ۸۹۹۹",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            bookingNumber: "۵۳۲۴۲۵۲۳۴۳",
            bookingStatus: 1
        },
        {
            status: 2,
            trackingNumber: "۰۹۱۰۱۰۹۸۹۸۹",
            cardNumber: "۶۲۸۰ **** **** ۸۹۹۹",
            amount: "۱۲۰,۴۵۹,۹۰۰",
            date: "پنج‌شنبه ۱۳ اردیبهشت ۱۴۰۳ ۱۶:۴۵",
            bookingNumber: "۵۳۲۴۲۵۲۳۴۳",
            bookingStatus: 2
        },
    ]

    return (
        <div className='main-transaction-person'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>تراکنش‌های حضوری</span>
                    <img onClick={() => navigate(-1)} src={arrow} alt="Arrow" />
                </div>


                <button>
                    ثبت واریزی جدید
                </button>

                <div className='cards'>
                    {
                        transactions.map((item, index) => {
                            return (
                                <CardInPersonTransaction
                                    key={index}
                                    status={item.status}
                                    trackingNumber={item.trackingNumber}
                                    cardNumber={item.cardNumber}
                                    amount={item.amount}
                                    date={item.date}
                                    bookingNumber={item.bookingNumber}
                                    bookingStatus={item.bookingStatus}
                                />
                            )
                        })
                    }




                </div>
            </div>
        </div>
    )
}