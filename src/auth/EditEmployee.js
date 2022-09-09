import React, { useState, useEffect ,useContext} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { updateEmployee, loadUser } from "../api/Api";
import { AccountContext } from "../context/Context";

export function EditEmployee() {
    const navigate = useNavigate();
    const {accountData} = useContext(AccountContext)
    console.log(accountData);
    const param = useParams();
    const [form, setform] = useState({
        name: "",
        salary: "",
        phone: "",
        address: "",
        email: ""
    });
    useEffect(() => {
        loadUser(param.id).then((response) => {
            console.log(response)
            if (response.status == "success") {
                setform(response.data)
            }
        })
    }, []);



    async function handleSubmit(event) {
        event.preventDefault();
        console.log(form);
        const response = await updateEmployee(param.id, form)
        if (response.status == 'success') {
            toast(`${form.name} Update Succssfuylly`);
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
           

        }

    }


    function handleChange(event) {
        setform({ ...form, [event.target.name]: event.target.value })

    }


    return (
        <>

            <ToastContainer />
            <h1>Edit Employee {accountData.name}</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={form.name} onChange={event => handleChange(event)} placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" name="salary" value={form.salary} onChange={event => handleChange(event)} placeholder="Enter Salary" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" name="phone" value={form.phone} onChange={event => handleChange(event)} placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={form.address} onChange={event => handleChange(event)} placeholder="Enter Address" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={form.email} onChange={event => handleChange(event)} placeholder="Email" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </>
    )
}