import React, { useState } from "react";
import PropEx from "./Props/PropEx";
import UserInfo from "./Props/UserInfo";
import AdminInfo from "./Props/AdminInfo";
import { Info,Admin } from "./Props/types";
import Counter from "./UseState/Counter";
import User from "../Components/User";
import Object from "./UseState/Object";
import Todos from "./UseState/Todos";
import Form from "./useRef/Form";
import FocusInput from "./useRef/FocusInput";
import ContactForm from "./useRef/ContactForm";
function MainEx() {
    const [show, setShow] = useState(true); 

    const handleClick = () => {
        setShow((prev) => !prev);
        return !show; 
    };

    const Useri:Info = {
        name: "John",
        age: 30,
        role:"user",
        userid: "12",
        lastLogin: new Date()
    }
    const Admin:Admin = {
        name: "Sarvesh",
        age: 30,
        role:"admin",
        password: "ghkjhk",
        userid: "12",
        lastLogin: new Date()
    }
    return (
        <div>
                  {/* <div className='m-2 text-[35px] font-mono text-gray-950'>1. Props Exercise</div>

            <User name="sarvesh" age={12} heading= "Prop Component"></User>
            <PropEx 
                label="Click Button"
                onClick={handleClick}
                disabled={false}
                visibility={show}
            />
            <UserInfo user={Useri}></UserInfo>
            <AdminInfo admin={Admin}></AdminInfo>
            <div className='m-2 text-[35px] font-mono text-gray-950'>2. UseState Exercise</div>
            <Counter></Counter>
            <Object />
            <Todos></Todos>
            <Form></Form> */}
            <FocusInput></FocusInput>
            <ContactForm></ContactForm>
        </div>
    );
}

export default MainEx;
