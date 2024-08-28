import './Roles.scss'
import arrow from "../../../../assets/icons/arrow.png"

export const Roles = (props) => {

    const texts = [
        " آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای",
        "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود.",
        " آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای",
        "کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده اصلی ویژگی‌ها و مشخصاتی است که لپ تاپ شما باید داشته باشد.",
        " آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای",
        "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود.",
        " آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای",
        "کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده اصلی ویژگی‌ها و مشخصاتی است که لپ تاپ شما باید داشته باشد.",

    ]


    return (
        <div className="main-roles">
            <div className='title-button'>
                <span className='title'>شرایط استفاده</span>
                <img src={arrow} alt="Arrow" onClick={props.closeRole} />
            </div>


            <div className='roles-div'>
                <span className='subtitle'>نکات قابل توجه:</span>

                {
                    texts.map((text, index) => {
                        return (
                            <span className='description' key={index}>
                                <div className='dot'>

                                </div>
                                {text}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}