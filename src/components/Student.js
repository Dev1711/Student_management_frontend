import axios from "axios";
import { useState } from "react";
import {Form, Button} from "react-bootstrap"


export default function Student(){

    const[Id, setId] = useState();
    const[name, setName] = useState();
    const[Address, setAddress] = useState();

    const student ={
        Id : Id,
        name : name,
        address : Address

    }

    function textChange(event){
        if(event.target.name==='id')
            setId(event.target.value);
        else if(event.target.name==='name')
            setName(event.target.value);
        else if(event.target.name==='address')
            setAddress(event.target.value);
    }

    let saveStudent = () => {
        axios.post("http://localhost:8080/student", student)
            .then(response => {
                alert(response.data);
            })
            .catch(error => alert(error));
    }
    return(
        <Form onSubmit={saveStudent}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control name="id" value={Id} type="text" placeholder="Enter ID" onChange={textChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={name} type="text" placeholder="Enter Name" onChange={textChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={Address} type="text" placeholder="Enter Address" onChange={textChange}/>
       
      </Form.Group>

      
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )

}