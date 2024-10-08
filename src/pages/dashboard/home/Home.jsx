import './Home.scss'
import user from "../../../assets/icons/failed-user.svg"
import plus from "../../../assets/icons/plus.svg"
import alarm from "../../../assets/icons/alarm.svg"
import wallet from "../../../assets/icons/wallet.svg"
import { CardTransaction } from '../../../components/cardTransaction/CardTransaction'
import { Link } from 'react-router-dom'
import { CardBank } from '../../../components/cardBank/CardBank'


export const Home = () => {

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

    const bankCards = [
        {
            number: "۶۲۱۹  ۸۶۱۹  ۱۳۷۷  ۱۷۲۰",
            owner: "علی سرلک",
            date: "۰۴/۱۲",
            bank: "rammit"
        },
        {
            number: "۶۲۱۹  ۸۶۱۹  ۱۳۷۷  ۱۷۲۰",
            owner: "علی سرلک",
            date: "۰۴/۱۲",
            bank: "blue"
        },
    ]


    return (
        <div className='main-home-div'>
            <div className='container'>
                <div className='header'>
                    <div className='avatar-name'>
                        <img src={user} alt="Avatar" />
                        <div className='welcome-name'>
                            <span className='welcome'>خوش‌اومدی</span>
                            <span className='name'>علی عزیز</span>
                        </div>
                    </div>
                    <div className='notification'>
                        <img src={alarm} alt="Notification" />
                    </div>
                    <div className='balance-div'>
                        <div className='title-amount'>
                            <span className='title'>موجودی کیف پول</span>
                            <span className='amount'>۱۲۰,۴۵۹,۹۰۰ تومان</span>
                        </div>
                        <div className='plus-wallet'>
                            <img src={wallet} alt="Wallet" />
                            <div className='plus'>
                                <img src={plus} alt="Plus" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bank-cards'>
                    <div className='add-card-div'>
                        <span>
                            <img src={plus} alt="Plus" />کارت جدید
                        </span>
                    </div>
                    {
                        bankCards.map((item, index) => {
                            return (
                                <CardBank
                                    key={index}
                                    owner={item.owner}
                                    number={item.number}
                                    date={item.date}
                                    bank={item.bank} />
                            )
                        })
                    }
                </div>


                <div className='cards'>
                    <div className='title-link'>
                        <span className='title'>تراکنش‌ها</span>
                        <Link className='link' to="/dashboard/transactions">مشاهده همه</Link>
                    </div>
                    {
                        transactions.map((item, index) => {
                            return (
                                <CardTransaction
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
    )
}