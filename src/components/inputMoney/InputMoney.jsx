import toman from "../../assets/icons/toman.svg"
import './InputMoney.scss'

export const InputMoney = (props) => {

    const toFarsiNumber = n => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return n?.toString()?.replace(/\d/g, x => farsiDigits[x]);
    };
    const toLatinNumber = n => {
        const latinDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        return n?.toString()?.replace(/\d/g, x => latinDigits[x]);
    };

    const formatNumber = (number) => {
        const cleanedNumber = number.replace(/[^0-9۰-۹]/g, '');
        const englishNumber = cleanedNumber.replace(/[۰-۹]/g, (w) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(w));
        const formattedNumber = englishNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return formattedNumber;
    };

    const handleChange = (event) => {
        const formattedValue = formatNumber(event.target.value);
        let persian = toFarsiNumber(formattedValue)
        props.setValue(persian);
    }


    return (
        <div className="main-input-money">
            <span className='title-input'>{props.title}</span>
            <div className="icon-toman">
                <img src={toman} alt="Toman" />
            </div>
            <input placeholder={props.placeholder} className='inputs' type={props.type} value={props.value} onChange={event => handleChange(event)} />
        </div>
    )
}