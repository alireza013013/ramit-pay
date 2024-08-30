import bag from "../../assets/icons/bag.svg"
import close from "../../assets/icons/close-circle.svg"
import check from "../../assets/icons/check-circle.svg"
import plus from "../../assets/icons/plus-circle.svg"
import './CardTransaction.scss'
import { Link } from "react-router-dom"


export const CardTransaction = (props) => {
    return (
        <Link to={`/dashboard/transactions/${props.id}`} className='main-card-transaction'>
            <div className='icon-name-payment'>
                <div className='icon-div'>
                    <img src={bag} alt="Wallet" />
                </div>
                <div className='title-name'>
                    <span className='title'>{props.title}</span>
                    <span className='name'>{props.companyPayment}</span>
                </div>
            </div>
            <div className='amount-kind'>
                <span className='amount'>{props.amount} تومان</span>
                <span className={
                    [
                        props.isSuccessful ? props.kind == "payment" ? "payment" : "charge" : "fail",
                        "kind"
                    ].join(" ")
                }>
                    {
                        props.kind == "payment" ? `پرداخت ` : `شارژ `
                    }
                    {
                        props.isSuccessful ? `موفق` : `ناموفق`
                    }
                    <img src={props.isSuccessful ? props.kind == "payment" ? check : plus : close} alt="Kind Payment" />
                </span>
            </div>
            <div className='wallet-date'>
                <span className='wallet'>
                    کیف‌پول
                </span>
                <span className='date'>
                    {props.date}
                </span>
            </div>
        </Link>
    )
}