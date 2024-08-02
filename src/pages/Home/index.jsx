import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import TopBackgroud from "../../components/TopBackgroud";
import api from "../../services/api";

import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title
} from "./styles";


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()


  async function registerNewUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,

    })
  }

  return (
    <>
      <Container>
        <TopBackgroud />

        <Form>
          <Title>Cadastrar Usuários</Title>


          <ContainerInputs>
            <div>


              <InputLabel>
                Nome <span> * </span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
            </div>

            <div>
              <InputLabel>
                Idade <span> * </span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
            </div>

          </ContainerInputs>

          <div style={{ width: '100%' }}>
            <InputLabel>
              Email <span> * </span>
            </InputLabel>
            <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
          </div>



          <Button type="button" onClick={registerNewUser} theme="primary">
            Cadastrar Usuários
          </Button>
        </Form>

        <Button type='button' onClick={() => navigate('/Lista-de-usuários')}>
          Ver lísta Usuários
        </Button>

      </Container>
    </>

  )
}

export default Home
