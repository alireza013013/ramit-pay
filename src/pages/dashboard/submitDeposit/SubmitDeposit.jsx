import "./SubmitDeposit.scss"
import { useState } from "react";
import { InputMoney } from "../../../components/inputMoney/InputMoney";
import copy from "../../../assets/icons/copy.svg"
import user from "../../../assets/icons/success-user.svg"
import { TextInput } from "../../../components/textInput/TextInput";


export const SubmitDeposit = () => {

    const [moneyCharge, setMoneyCharge] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")

    const bankInfo = {
        image: "/src/assets/banks/rammit.png",
        id: "/Alisarlak",
        name: "علی سرلک",
        job: "من طراح محصول هستم"
    }

    const copyId = () => {
        navigator.clipboard.writeText(bankInfo.id);
    }

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
        <div className='main-submit-deposit'>
            <div className='container'>

                <div className="card-bank" style={
                    {
                        backgroundImage: `url(${bankInfo.image})`
                    }
                }>

                    <div className="id-copy">
                        <div className="id-title">
                            <span className="title">آی‌دی من در رمیت</span>
                            <span className="id">{bankInfo.id}</span>
                        </div>
                        <div className="copy" onClick={copyId}>
                            <img src={copy} alt="copy" />
                        </div>
                    </div>
                    <div className="image-name">
                        <img src={user} alt="User Image" />
                        <div className="name-job">
                            <span className="name">{bankInfo.name}</span>
                            <span className="job">{bankInfo.job}</span>
                        </div>
                    </div>
                </div>


                <div className="container-input">
                    <InputMoney title="مبلغ واریزی" value={moneyCharge} placeholder="۱۰,۰۰۰,۰۰۰" setValue={(value) => setMoneyCharge(value)} type="text" />
                </div>

                <TextInput title="نام و نام‌خانوادگی" value={name} placeholder="علی سرلک" setValue={(value) => setName(value)} type="text" />


                <TextInput title="شماره موبایل" value={phoneNumber} placeholder="۰۹۱۰۸۵۵۹۹۸۸" setValue={(value) => setPhoneNumber(value)} type="tel" />


                <TextInput title="عنوان واریزی" value={title} placeholder="واریز بابت دنگ رزرو صندلی.." setValue={(value) => setTitle(value)} type="text" />



                <button className="continue">
                    تایید و ادامه
                </button>

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
        </div>
    )
}