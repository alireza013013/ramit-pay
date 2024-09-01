import "./AddInventory.scss"
import arrow from "../../../assets/icons/arrow.png"
import toman from "../../../assets/icons/toman.svg"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { InputMoney } from "../../../components/inputMoney/InputMoney";




export const AddInventory = () => {

    let navigate = useNavigate();

    const [moneyCharge, setMoneyCharge] = useState("")

    const [amounts, setAmount] = useState([
        {
            name: "۱۰,۰۰۰,۰۰۰",
            active: false
        },
        {
            name: "۵,۰۰۰,۰۰۰",
            active: false
        },
        {
            name: "۱,۰۰۰,۰۰۰",
            active: false
        },
        {
            name: "۱,۰۰۰,۰۰۰",
            active: false
        },
    ])


    const changeAmount = (index) => {
        let element = amounts[index]
        let newFilter = [...amounts]
        if (!element.active) {
            setMoneyCharge(element.name)
            newFilter.forEach((item) => {
                item.active = false
            })
        }
        element.active = !element.active
        newFilter[index] = element
        setAmount(newFilter)
    }

    return (
        <div className='main-inventory'>
            <div className='container'>
                <div className='title-button'>
                    <span className='title'>افزودن موجودی</span>
                    <img onClick={() => navigate(-1)} src={arrow} alt="Arrow" />
                </div>

                <span className="subtitle">
                    موجودی کیف پول
                </span>

                <span className="balance">۱۲۰,۴۵۹,۹۰۰ تومان</span>

                <div className="container-input">
                    <InputMoney title="مبلغ واریزی" value={moneyCharge} placeholder="۱۰,۰۰۰,۰۰۰" setValue={(value) => setMoneyCharge(value)} type="text" />
                </div>


                <div className="container-amounts">
                    {
                        amounts.map((item, index) => {
                            return (
                                <span key={index} className={
                                    [item.active ? "active" : "",
                                        "tab"
                                    ].join(" ")
                                } onClick={() => changeAmount(index)}>{
                                        item.name
                                    }
                                    <img src={toman} alt="Toman" />
                                </span>
                            )
                        })
                    }
                </div>
                <button className="continue">
                    ادامه
                </button>

                <button className="bank">
                    واریز حضوری بانکی
                </button>
            </div>
        </div>
    )
}