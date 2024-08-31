import './MyPayment.scss'
import qrcode from "../../../assets/icons/qrcode.svg"
import share from "../../../assets/icons/share.svg"
import copy from "../../../assets/icons/copy.svg"
import download from "../../../assets/icons/download.svg"
import logo from "../../../assets/RemitColor.png"

export const MyPayment = () => {
    return (
        <div className='main-mypayment'>
            <div className='container'>
                <div className='share-qr-main'>
                    <div className='logo-div'>
                        <img src={logo} alt="Logo" />
                        <div className='title-name'>
                            <span className='title'>درگاه شخصی من</span>
                            <span className='name'>در رمیت‌ پی</span>
                        </div>
                    </div>
                    <div className='qrcode-buttons'>
                        <div className='title-buttons'>
                            <span className='title'>کیو‌آر درگاه من</span>
                            <span className='desc'>کیو‌آر خود را ذخیره یا اشتراک بگذارید</span>
                            <div className='buttons'>
                                <div className='download'>
                                    <img src={download} alt="Download" />
                                </div>
                                <div className='copy'>
                                    <img src={copy} alt="Copy" />
                                </div>
                            </div>
                        </div>
                        <div className='qrcode'>
                            <img src={qrcode} alt="QR Code" />
                        </div>
                    </div>

                    <div className='line-seperator'>

                    </div>

                    <div className='input-title'>
                        <span className='title'>کیو‌آر درگاه من</span>
                        <span className='desc'>کیو‌آر خود را ذخیره یا اشتراک بگذارید</span>
                        <div className='main-inputs'>
                            <span className='text'>https://remit.pay/ali</span>
                            <div className='buttons'>
                                <div className='download'>
                                    <img src={download} alt="Download" />
                                </div>
                                <div className='share'>
                                    <img src={share} alt="Share" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}