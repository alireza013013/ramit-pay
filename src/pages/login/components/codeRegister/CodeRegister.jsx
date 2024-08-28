import './CodeRegister.scss'
import ColorLogo from '../../../../assets/RemitColor.png'
import { useState } from 'react'
import OtpInput from 'react-otp-input';

export const CodeRegister = (props) => {


    const [otp, setOtp] = useState('');

    const toFarsiNumber = n => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return n?.toString()?.replace(/\d/g, x => farsiDigits[x]);
    };

    const changeOtp = (value) => {
        let persian = toFarsiNumber(value)
        setOtp(persian)
    }

    return (

        <div className='main-code-register'>
            <img src={ColorLogo} alt="Logo" />
            <span className='title'>کد تایید</span>
            <span className='subtitle'>کد تایید پیامک شده را وارد کنید</span>
            <div className='otp-div'>
                <span className='title-input'>کد تایید</span>
                <OtpInput
                    value={otp}
                    onChange={changeOtp}
                    numInputs={5}
                    containerStyle={{
                        columnGap: "10px"
                    }}
                    inputStyle={"otp-input"}
                    renderInput={(props) => <input {...props} />}
                    shouldAutoFocus
                />
            </div>
            <button onClick={props.goNextPage}>
                تایید کد
            </button>
        </div>

    )
}