function InputEmail(props) {
    return (
     <>
       <label htmlFor="email">E-mail</label>
       <input type="email" id="email" name="email" value={props.email} onChange={props.mudaValor} required/>
     </>
    );
  }

export default InputEmail;