import React, { useState } from 'react'
import {   Form } from 'react-bootstrap'
function Send() {
    const api="http://localhost:9000/pets";
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    
    const IsValide=()=>{
        let proCess =true;
        let ErrorMsg="please Enter "
        if (name === null || name ===''){
            ErrorMsg+="Name"
            proCess=false
        }
        if (email === null || email ===''){
            ErrorMsg+="email"
            proCess=false
        }
        if (phone === null || phone ===''){
            ErrorMsg+="phone"
            proCess=false
        }
        if (!proCess){
            console.log(ErrorMsg);
        
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {

            }else{
                proCess=false;
                console.log("failed email");
                
            }
        }
        return proCess;
    }

    let user=[];

    const registerhandel=(e)=>{
        e.preventDefault();
        
        let data={name,phone,email}
        console.log(data);
        user.push(data)
        console.log(user);
        if(IsValide()){
        fetch(api,{
        method:"post",
        headers:{'content-type':' application/json'},
        body:JSON.stringify(data)
    }).then((res)=>{
        console.log("upload");
        
    }).catch((err)=>{
        console.log("failed ublosd");
    }) 
    }}
  return (
    <>
    <div className='send'>
        <div>
            <h1>Send Us</h1>
        </div>
        <Form className='form' onSubmit={registerhandel} >
                <Form.Group  className=" inputs mb-3" controlId={`formBasicname`}>
                        <Form.Control className='input' type='text' onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
                    </Form.Group>
                
                <Form.Group className=" inputs mb-3" controlId={`formBasicPhone`}>

                        <Form.Control type='password' className='input' required onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone" />
                    </Form.Group>

                <Form.Group className="mb-3 inputs" controlId={`formBasicemail`}>
                        <Form.Control className='input' type='email' required onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group> 
                <input type="submit" className='input'  value="Send Now"/>
            </Form>
    </div>
    </>
  )
}

export default Send