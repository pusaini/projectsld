import { React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { loadUser } from "../api/Api";
import { ToastContainer, toast } from "react-toastify";

export function EmployeeDetails() {
    const navigate = useNavigate();
    const param = useParams();
    console.log(param)
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

    async function handleclick() {

        if (true) {
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        }
    }


    return (
        <>
            <ToastContainer />
            <h1>Details of {form.name}</h1>
            <ul>
                <li>name: {form.name}</li>
                <li>salary: {form.salary}</li>
                <li>email: {form.email}</li>
                <li>Address: {form.address}</li>
                <li>Phone: {form.phone}</li>
            </ul>
            <button className="btn btn-outline-warning mr-2" onClick={handleclick}>OK</button>
        </>
    )
}
