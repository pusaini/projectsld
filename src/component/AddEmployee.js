import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addEmployee } from "../api/Api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';


export function AddEmployee() {
    const [form, setform] = useState({

        name: "",
        salary: "",
        phone: "",
        address: "",
        email: ""

    });
    
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await addEmployee(form)
        console.log(response)

        if (response.status == 'success') {
            toast(`${response.name} Signup Succssfuylly`);
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)

        }
        else {
            toast.error(response.message)
        }
    }

    const { name, salary, phone, address, email } = form
    function handleChange(event) {
        setform({ ...form, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }

    

    return (
        <>
        <ToastContainer />
            <h1>Add Employee</h1>
            <Form onSubmit={event => handleSubmit(event)}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={event => handleChange(event)} placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="number" name="salary" value={salary} onChange={event => handleChange(event)} placeholder="Enter Salary" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" name="phone" value={phone} onChange={event => handleChange(event)} placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={address} onChange={event => handleChange(event)} placeholder="Enter Address" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={event => handleChange(event)} placeholder="Email" />
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