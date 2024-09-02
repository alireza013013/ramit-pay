import './CardInPersonTransaction.scss'
import close from "../../assets/icons/close-circle.svg"
import check from "../../assets/icons/check-circle.svg"
import arrow from "../../assets/icons/arrow-left.svg"
import { Link } from 'react-router-dom'

export const CardInPersonTransaction = (props) => {
    return (
        <div className='extra-info-div'>
            <div className='payyer-info'>
                <div className='row'>
                    <span className='subtitle'>وضعیت</span>
                    <span className={
                        [
                            props.status == 0 ? "payment" : "",
                            props.status == 1 ? "charge" : "",
                            props.status == 2 ? "fail" : "",
                            "kind"
                        ].join(" ")
                    }>
                        {
                            props.status == 0 ? <>
                                در حال بررسی
                                <img src={check} alt="Kind Payment" />
                            </>
                                : ``

                        }
                        {
                            props.status == 1 ? <>
                                تایید شده
                                <img src={check} alt="Kind Payment" />
                            </> : ``
                        }
                        {
                            props.status == 2 ? <>
                                رد شده
                                <img src={close} alt="Kind Payment" />
                            </> : ``
                        }
                    </span>
                </div>
                <div className='row'>
                    <span className='subtitle'>کد رهگیری رمیت</span>
                    <span className='description'>{props.trackingNumber}</span>
                </div>
            </div>
            <div className='each-row'>
                <span className='title'>شماره کارت</span>
                <span className='desc'>{props.cardNumber}</span>
            </div>
            <div className='each-row'>
                <span className='title'>مبلغ واریزی</span>
                <span className="amount">{props.amount} تومان</span>
            </div>
            <div className='each-row'>
                <span className='title'>زمان</span>
                <span className='desc'>{props.date}</span>
            </div>
            <div className='line-seperator'>

            </div>
            <div className='each-row'>
                <span className='title'>شماره سفارش</span>
                <span className='desc'>{props.bookingNumber}</span>
            </div>
            <div className='each-row'>
                <span className='title'>وضعیت سفارش</span>
                <span className={
                    [
                        props.bookingStatus == 0 ? "payment" : "",
                        props.bookingStatus == 1 ? "charge" : "",
                        props.bookingStatus == 2 ? "fail" : "",
                        "kind"
                    ].join(" ")
                }>
                    {
                        props.bookingStatus == 0 ? "در انتظار پرداخت"
                            : ``

                    }
                    {
                        props.bookingStatus == 1 ? "پرداخت شده" : ``
                    }
                    {
                        props.bookingStatus == 2 ? "پرداخت نشده" : ``
                    }
                </span>
            </div>
            <Link to="/" className='link'>
                مشاهده سفارش
                <img src={arrow} alt="Arrow" />
            </Link>
        </div>
    )
}