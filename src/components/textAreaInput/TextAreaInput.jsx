import './TextAreaInput.scss'

export const TextAreaInput = (props) => {
    return (
        <div className='main-text-area'>
            <span className='title-input'>{props.title}</span>
            <textarea placeholder={props.placeholder} className='inputs' value={props.value} onChange={event => {
                props.setValue(event.target.value);
            }} />
        </div>
    )
}