import './CodeRegister.scss'
import ColorLogo from '../../../../assets/RemitColor.png'
import { useState } from 'react'
import OtpInput from 'react-otp-input';

export const CodeRegister = (props) => {


    const [otp, setOtp] = useState('');

    const changeOtp = (value) => {
        setOtp(value)
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
                />
            </div>
            <button onClick={props.goNextPage}>
                تایید کد
            </button>
        </div>

    )
}