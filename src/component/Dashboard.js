import React from "react";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getStorageData, getToken, destroyStorage } from "../constant/Constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllEmployee } from "../api/Api";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineLogout, AiTwotoneDelete, AiFillEdit, AiOutlineFolderView, AiOutlineUserAdd } from "react-icons/ai";

export default function Dashboard() {

    const [name, setName] = useState({});
    const [employee, setEmployee] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        setName(getStorageData);
        // toast.loading("Please wait ...",{autoClose:3000})
        getAllEmployee().then((res) => {
            if (res.status == "success")
                setEmployee(res.data);
            console.log(res)
        })
    }, [])
    function logout() {
        destroyStorage()
        navigate("/")
    }

    return (
        <>
            <ToastContainer />

            <Container>

                <Row>
                    <Col className="text-start bg-warning"><h4>Dashboard</h4></Col>
                    <Col className="text-center bg-danger"><h4>Welcome To {name.name} </h4></Col>
                    <Col className="text-end bg-warning">
                        <a  className="btn btn-outline-denger mr-2" href="AddEmployee"><AiOutlineUserAdd width={50} height={50} /></a>
                        <button className="btn btn-outline-denger mr-2" onClick={logout} ><AiOutlineLogout width={50} height={50} /></button>
                    </Col>
                </Row>
            </Container>

            <Table striped bordered hover>
                <thead>
                    <tr >
                        <th>#</th>
                        <th>Name</th>
                        
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Contact No.</th>
                        <th>Email</th>
                        <th>Details</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employee.map((data, i) =>
                            <tr key={1}>
                                <td>{i + 1}</td>
                                <td>{data.name}</td>
                                
                                <td>{data.salary}</td>
                                <td>{data.address}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td><a className="btn btn-outline-primary" href=""><AiOutlineFolderView /></a></td>
                                <td><a className="btn btn-outline-info" href=""><AiFillEdit /></a></td>
                                <td><a className="btn btn-outline-warning" href=""><AiTwotoneDelete /></a></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </>

    )
}