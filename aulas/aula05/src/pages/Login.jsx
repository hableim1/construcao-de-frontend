import FormLogin from "./FormLogin";

function Login(props) {
    return (
        <>
        <h1>Login</h1>
        <FormLogin navegaPara={props.navegaPara}/>
        </>
    );
}

export default Login;