import { useState } from 'react'
import './Transactions.scss'
import { CardTransaction } from '../../../components/cardTransaction/CardTransaction'


export const Transactions = () => {

    const [kindPayFilter, setKindPayFilter] = useState([
        {
            name: "پرداخت",
            active: false
        },
        {
            name: "دریافت",
            active: false
        },
        {
            name: "همه",
            active: false
        },
    ])


    const changeFilter = (index) => {
        let element = kindPayFilter[index]
        element.active = !element.active
        let newFilter = [...kindPayFilter]
        newFilter[index] = element
        setKindPayFilter(newFilter)
    }


    const [mainFilter, setMainFilter] = useState([
        {
            name: "شارژ",
            active: true
        },
        {
            name: "خلافی",
            active: false
        },
        {
            name: "اینترنت",
            active: false
        },
        {
            name: "اینترنت",
            active: false
        },
        {
            name: "عوارض",
            active: false
        },
        {
            name: "قبض",
            active: false
        },
    ])

    const changeMainFilter = (index) => {
        let element = mainFilter[index]
        element.active = !element.active
        let newFilter = [...mainFilter]
        newFilter[index] = element
        setMainFilter(newFilter)
    }

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


    return (
        <div className='main-transaction'>
            <div className='container'>
                <div className='title-filter'>
                    <span className='title'>
                        تراکنش‌ها
                    </span>
                    <div className='filters'>
                        {
                            kindPayFilter.map((item, index) => {
                                return (
                                    <span onClick={() => changeFilter(index)} className={[item.active ? `active` : ``, "filter"].join(" ")} key={index}>{item.name}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='main-filters'>
                    {
                        mainFilter.map((item, index) => {
                            return (
                                <span onClick={() => changeMainFilter(index)} className={[item.active ? `active` : ``, "filter"].join(" ")} key={index}>{item.name}</span>
                            )
                        })
                    }
                </div>

                <div className='cards'>
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