import './Success.scss'
import success from "../../../../assets/icons/check.svg"
import { Link } from "react-router-dom";

export const Success = () => {
    return (

        <div className='main-success'>
            <div className='image-success'>
                <img src={success} alt="Check" />
            </div>
            <span className='title'>ثبت نام با موفقیت انجام شد</span>
            <span className='subtitle'>برای استفاده از خدمات دکمه شروع را بزنید</span>

            <button>
                <Link to={"/personal-account"}>
                    شروع
                </Link>
            </button>
        </div>

    )
}