import { useState } from "react"
import { LuLock, LuMail } from 'react-icons/lu'
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth"

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './styles';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>zapiska</h1>
                <p>A note taking app.</p>

                <h2>Welcome!</h2>
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
                    title="Login"
                    onClick={handleSignIn}
                />

                <Link to="/register">
                    Sign up
                </Link>
            </Form>

            <Background />
        </Container>
    )
}