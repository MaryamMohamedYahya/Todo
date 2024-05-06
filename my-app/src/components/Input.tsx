import React from 'react';
import "./styles.css";

const Input = () =>{
    return( <form className="input">
    <input type="input" placeholder='What shall we do?'  className='input_box'/>
    <button  className="input_submit" type='submit'>
        Do
    </button>

</form>
)
       
};
export default Input ;