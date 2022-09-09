import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteEmployee, loadUser } from "../api/Api";
import { ToastContainer, toast } from "react-toastify";

export function DeleteEmployee() {
    const navigate = useNavigate();
    const param = useParams();
    console.log(param)
    const [form, setform] = useState();

    useEffect(() => {
        loadUser(param.id).then((response) => {
            console.log(response)
            if (response.status == "success") {
                setform(response.data)

            }
        })
    }, []);

    async function handleclick(event) {
        event.preventDefault();
        console.log(form);
        const response = await deleteEmployee(param.id, form)
        if (response.status == 'success') {
            toast(`Delete Succssfuylly`);
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
        }
    }

    async function handlecancileclick() {

        if (true) {
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        }
    }


    return (
        <>
            <ToastContainer />
            <h1>DeleteEmployee</h1>
            <button className="btn btn-outline-warning mr-2" onClick={handleclick} >confirm</button>
            <button className="btn btn-outline-info" onClick={handlecancileclick}>cancile</button>
        </>
    )
}