import React, {useState} from 'react'
import './InputText.css'
import CloseButton from 'react-bootstrap/CloseButton';

const InputText = (props)=>{

    const [inputValue, setInputValue] = useState(props.InputText)

    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onClickClear = () =>{
        setInputValue("")
    }

    return(
        <div>
            <p className='label'>{props.InputText}</p>
            <div className='input-box'>
                <input type={props.Type} value={inputValue} onChange={handleInputChange}/>
                {props.Type==='text' && <CloseButton variant="white" onClick={onClickClear}/>}
            </div>
           
        </div>
    )
}

export default InputText