import { useState } from 'react';
import { LuChevronsLeft, LuLock, LuMail, LuUser, LuCamera } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './styles';

export function Profile(){
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    async function handleUpdate(){
        const updated = {
            name, 
            email,
            password: newPassword,
            old_password: oldPassword,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                    <LuChevronsLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar} 
                        alt="Your profile picture." 
                    />

                    <label htmlFor="avatar">
                        <LuCamera />

                        <input 
                            type="file"
                            id="avatar"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={LuUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={LuMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                <Input
                    placeholder="Current password"
                    type="password"
                    icon={LuLock}
                    onChange={e => setOldPassword(e.target.value)}
                    />

                <Input
                    placeholder="New password"
                    type="password"
                    icon={LuLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button title="Save changes" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}