import { useState } from 'react'
import './Profile.scss'
import { TextInput } from '../../../../components/textInput/TextInput'

export const Profile = (props) => {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [nationalCode, setNationalCode] = useState("")
    const [email, setEmail] = useState("")


    return (
        <div className="main-profile">
            <TextInput title="شماره موبایل" value={phoneNumber} placeholder="۰۹۱۰۸۵۵۹۹۸۸" setValue={(value) => setPhoneNumber(value)} type="tel" />

            <TextInput title="نام" value={firstName} placeholder="علی" setValue={(value) => setFirstName(value)} type="text" />

            <TextInput title="نام‌خانوادگی" value={lastName} placeholder="سرلک" setValue={(value) => setLastName(value)} type="text" />

            <TextInput title="کد ملی" value={nationalCode} placeholder="۴۱۶۰۲۲۳۳۴۴۵" setValue={(value) => setNationalCode(value)} type="number" />

            <TextInput title="آدرس ایمیل" value={email} placeholder="alies@gmail.com" setValue={(value) => setEmail(value)} type="email" />


            <button>
                ذخیره
            </button>

        </div>
    )
}