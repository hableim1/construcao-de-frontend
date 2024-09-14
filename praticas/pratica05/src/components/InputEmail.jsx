import "./Input.css";

function InputEmail() {
    return (
     <>
       <label htmlFor="email">E-mail</label>
       <input type="email" id="email" name="email" required/>
     </>
    );
  }

export default InputEmail;