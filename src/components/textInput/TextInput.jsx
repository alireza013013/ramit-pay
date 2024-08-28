import './TextInput.scss'

export const TextInput = (props) => {
    return (
        <div className='main-input'>
            <span className='title-input'>{props.title}</span>
            <input placeholder={props.placeholder} className='inputs' type={props.type} value={props.value} onChange={event => {
                props.setValue(event.target.value);
            }} />
        </div>
    )
}