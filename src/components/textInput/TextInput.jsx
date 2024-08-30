import './TextInput.scss'

export const TextInput = (props) => {

    const toFarsiNumber = n => {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return n?.toString()?.replace(/\d/g, x => farsiDigits[x]);
    };
    const toLatinNumber = n => {
        const latinDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        return n?.toString()?.replace(/\d/g, x => latinDigits[x]);
    };

    const handleChange = (event) => {
        let persian = toFarsiNumber(event.target.value)
        props.setValue(persian);
    }



    return (
        <div className='main-input'>
            <span className='title-input'>{props.title}</span>
            <input placeholder={props.placeholder} className='inputs' type={props.type} value={props.value} onChange={event => handleChange(event)} />
        </div>
    )
}