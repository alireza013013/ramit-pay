import { useState } from 'react'
import './CardBank.scss'

export const CardBank = (props) => {

    const url = "/src/assets/banks/" + props.bank + ".png"

    const [activeKind, setActiveKind] = useState("charge")

    return (
        <div className='bank-card' style={
            {
                backgroundImage: `url(${url})`
            }
        }>
            <span className='number'>{props.number}</span>
            <div className='name-date'>
                <span className='name'>{props.owner}</span>
                <span className='date'>{props.date}</span>
            </div>

            <div className='contain-kind'>
                <span className={
                    [
                        activeKind == "card" ? `active-card` : ``,
                        "kind",
                        "card"
                    ].join(" ")
                }
                    onClick={() => setActiveKind("card")}
                >
                    با این کارت
                </span>
                <span className={
                    [
                        activeKind == "charge" ? `active-charge` : ``,
                        "kind",
                        "charge"
                    ].join(" ")
                } onClick={() => setActiveKind("charge")}>
                    شارژ کیف‌ پول
                </span>
            </div>
        </div>
    )
}