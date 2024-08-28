import './Welcome.scss'
import whiteLogo from '../../../../assets/Remit.png'

export const Welcome = (props) => {
    return (
        <div className='main-welcome'>
            <img src={whiteLogo} alt="Logo" />

            <span className='text-welcome'>به <span style={{
                fontWeight: 800
            }}>رمیت‌پی</span> خوش‌اومدی</span>
            <span className='description'>برای استفاده از خدمات متنوع<br />
                ابتدا باید ثبت نام کنین</span>

            <button onClick={props.goNextPage}>
                تایید و ادامه
            </button>
        </div>
    )
}