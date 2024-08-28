import './PhoneNumber.scss'
import ColorLogo from '../../../../assets/RemitColor.png'
import { TextInput } from '../../../../components/textInput/TextInput'
import { useState } from 'react'
import { Roles } from '../roles/Roles'


export const PhoneNumber = (props) => {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [openRole, setOpenRole] = useState(false)

    return (
        <>
            {
                openRole ? <Roles closeRole={() => setOpenRole(false)} /> :
                    <div className='main-phonenumber'>
                        <img src={ColorLogo} alt="Logo" />
                        <span className='title'>ثبت نام</span>
                        <span className='subtitle'>شماره موبایل خود را وارد نمایید</span>
                        <TextInput title="شماره موبایل" value={phoneNumber} placeholder="۰۹۱۰۸۵۵۹۹۸۸" setValue={(value) => setPhoneNumber(value)} type="tel" />
                        <div className='check-roles'>
                            <input type="checkbox" />
                            <span className='roles'><span onClick={() => setOpenRole(true)} className='bold'>شرایط استفاده</span> از رمیت را می‌پذیرم.</span>
                        </div>
                        <button onClick={props.goNextPage}>
                            تایید و ادامه
                        </button>
                    </div>
            }
        </>
    )
}