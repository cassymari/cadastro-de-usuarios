import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api'



import {
  Title, Container,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
} from './styles'


import UsersImage from '../../../assets/users.png'
import Button from '../../../components/Button'
import TopBackground from '../../../components/background'



function App() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

async function registerNewUser() {
  try {
    const { data } = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: Number(inputAge.current.value),
      name: inputName.current.value
    })

    console.log("Usuário criado:", data)

    // 🧹 limpa os inputs
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''

  } catch (error) {
    alert(error.response?.data?.error || "Erro ao cadastrar")
  }
}




  return (
    <Container>
      <TopBackground />


      <Form>
        <Title>Cadastrar Usuários</Title>
        <ContainerInputs>

          <div>
            <InputLabel>Nome<span>*</span></InputLabel>
            <Input type="text" placeholder='Nome do usuário' ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
          </div>



        </ContainerInputs>


        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span>*</span></InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} />
        </div>
        <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>
        Ver Listagem de Usuários
      </Button>



    </Container>

  )
}


export default App

