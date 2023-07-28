import { FiPlus } from 'react-icons/fi'
import { LuSearch } from 'react-icons/lu'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Home(){
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    function handleSelectedTags(tagName){
        if(tagName === "all"){
            return setSelectedTags([])
        }


        const alreadySelected = selectedTags.includes(tagName)

        if(alreadySelected){
            const filteredTags = selectedTags.filter(tag => tag !== tagName)
            setSelectedTags(filteredTags)
        } else {
            setSelectedTags(prevState => [...prevState, tagName])
        }

    }

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)

            setNotes(response.data)
        }

        fetchNotes()
    }, [selectedTags, search])

    return(
        <Container>
            <Brand>
                <h1>zapiska</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="All tags" 
                        onClick={() => handleSelectedTags("all")}
                        isActive={selectedTags.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleSelectedTags(tag.name)}
                                isActive={selectedTags.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Search by title"
                    onChange={(e) => setSearch(e.target.value)} 
                    icon={LuSearch} 
                />
            </Search>

            <Content>
                <Section title="My notes">
                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                New note
            </NewNote>
        </Container>
    )
}