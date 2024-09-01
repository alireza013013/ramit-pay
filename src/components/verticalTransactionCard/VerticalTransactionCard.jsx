import successUser from '../../assets/icons/success-user.svg'
import failUser from '../../assets/icons/failed-user.svg'
import close from "../../assets/icons/close-circle.svg"
import check from "../../assets/icons/check-circle.svg"
import plus from "../../assets/icons/plus-circle.svg"
import './VerticalTransactionCard.scss'
import { Link } from 'react-router-dom'



export const VerticalTransactionCard = (props) => {
    return (
        <Link to={`/dashboard/transactions/${props.id}`} className='main-vertical-card'>
            <div className='logo-name-status'>
                <img src={props.isSuccessful ? successUser : failUser} alt="Status" />
                <div className='name-status'>
                    <span className='name'>{props.companyPayment}</span>
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
            </div>
            <span className='amount-for'>{props.title}</span>
            <span className='amount'>{props.amount} تومان</span>
            <span className='date'>{props.date}</span>
        </Link>
    )
}