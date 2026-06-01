import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/background'
import Trash from '../../assets/trash.svg'
import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser } from './styles'

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        const { data } = await api.get('/usuarios')
        setUsers(data)
    }

    async function deleteUser(id) {
        try {
            await api.delete(`/usuarios/${id}`)
            getUsers()
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>

                        <TrashIcon
                            src={Trash}
                            alt='icone-lixo'
                            onClick={() => deleteUser(user.id)}
                        />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')}>
                Voltar
            </Button>
        </Container>
    )
}

export default ListUsers