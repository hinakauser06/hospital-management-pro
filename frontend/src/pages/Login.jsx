import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Headerbar from "../Components/Headerbar"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function Login(props) {
    const [currentState, setCurrentState] = useState("doctor")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [result, setResult] = useState({})
    const [alert, setAlert] = useState({
        isAlert: false,
        alertMsg: "",
        alertType: "danger"
    })
    function changeState(state) {
        setCurrentState(state)
    }
    async function loginuser() {
        const payload = {
            usertype: currentState,
            email: email,
            password: password
        }
        await apiCall(payload)
        setEmail("")
        setPassword("")
    }
    const apiCall = async (payload) => {
        const response = await axios.post("http://localhost:5000/login", payload)
        console.log(response)
        setResult(response.data)
        if (response.data.message === "logged in successful") {
            setAlert({
                isAlert: true,
                alertMsg: `Successfully logged in! welcome back ${response.data.data.name}`,
                alertType: "success"

            })
            localStorage.setItem("loggedin", true)
            localStorage.setItem("data", JSON.stringify(response.data.data))
            localStorage.setItem("usertype", currentState)
            navigate("/profile/" + currentState)
        }
        else if (response.data.message) {
            setAlert({
                isAlert: true,
                alertMsg: response.data.message,
                alertType: "warning"
            })
        }
        else {
            setAlert({
                isAlert: true,
                alertMsg: "Something went wrong",
                alertType: "danger"
            })
        }
    }
    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        console.log(isLogged)
        if (isLogged) {
            navigate("/")
        }
    }, [])
    return (
        <>
            <Headerbar />
            <div className="container  body" >
                {alert.isAlert && <div className={`alert alert-${alert.alertType} alert-dismissible fade show my-1`} role="alert">
                    {alert.alertMsg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
                <ul className="nav nav-pills nav-fill py-3 mx-5 px-5">
                    <li className="nav-item">
                        <a className={currentState === 'admin' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => changeState('admin')} >Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className={currentState === 'doctor' ? 'nav-link active' : 'nav-link'} onClick={() => changeState('doctor')}>Doctor</a>
                    </li>
                    <li className="nav-item">
                        <a className={currentState === 'patient' ? 'nav-link active' : 'nav-link'} onClick={() => changeState('patient')} >Patient</a>
                    </li>
                </ul>
                <div className="container text-end" >
                    <div className="row my-2" >
                        <div className="col-4" >
                            <label className="form-label">Email address</label>
                        </div>
                        <div className="col-4" >
                            <input type="email" value={email} className="form-control text-lowercase" onChange={(event) => setEmail(event.target.value)} />

                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-4" >
                            <label className="form-label">Password</label>
                        </div>
                        <div className="col-4" >
                            <input type="password" value={password} className="form-control" onChange={(event) => setPassword(event.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="text-center  my-3" >
                    <button type="submit" className="btn btn-outline-primary" onClick={loginuser}>Submit</button>
                </div>

            </div>

            <Footer />
        </>

    )
}
export default Login