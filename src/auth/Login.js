import React, { useContext,useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/Api";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setTokenData } from "../constant/Constant";
import { AccountContext } from "../context/Context";
export default function Login() {
    const [form, setform] = useState();
    const navigate = useNavigate();
    const {loginFun} = useContext(AccountContext)
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await login(form)
        console.log(response)
        if (response.status == "success") {

            toast.success(`${response.name} ${response.message}`);
            setTokenData(response)
            loginFun(response);
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
        }
        else {
            toast.error(response.message)
        }
    }

    function handleChange(event) {
        setform({ ...form, [event.target.name]: event.target.value })
    }
    return (
        <>
            <ToastContainer />
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" value="Signup">
                    Login
                </Button>
                <Link to="/signup">Signup Kar lo</Link>
            </Form>

        </>
    )
}