import { useState } from 'react';
import { LuLock, LuMail, LuUser } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api"

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Please fill out all fields before continuing.");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Successfully registered.")
                navigate("/")
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert("Could not handle request.")
                }
            })
    }

    return(
        <Container>
            <Background />

            <Form>
                <h1>zapiska</h1>
                <p>A note taking app.</p>

                <h2>Join us!</h2>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={LuUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={LuMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Password"
                    type="password"
                    icon={LuLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Sign Up"
                    onClick={handleSignUp}
                />

                <Link to="/">
                    Back to login
                </Link>
            </Form>
        </Container>
    )
}