import { useEffect, useState } from "react";
import { Container, Links, Content } from "./styles";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Details(){
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("This action will delete your note. It will be gone forever. Are you sure?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {
        data && 
        <main>
          <Content>
            <ButtonText title="Delete note" onClick={handleRemove} />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            { data.links &&
              <Section title="Useful links">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }
            

            {
              data.tags && 
              <Section title="Tags">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <Button title="Back" onClick={handleBack} />
          </Content>
        </main>
      }

      </Container>
  )
}