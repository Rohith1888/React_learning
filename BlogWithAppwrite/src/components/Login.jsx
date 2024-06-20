import React from "react";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import {Button, Input, Logo} from './index'
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import {useForm} from "react-hook-form"
function Login()
{

    const dispacth = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()

    return (
        <>

        
        
        </>
    )

}
export default Login;