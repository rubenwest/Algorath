import React, { useState, useEffect}  from 'react'
import { Modal, Container, Section } from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListUsers from './ListUsers';
import Form from './Form';
import Filters from './Filters';
import FilterRol from './FilterRol'
import ChartMongoEmployees from './ChartMongoEmployees'
import ChartMongoDepartments from './ChartMongoDepartments'
import { saveUser, getUsers } from '../../services';
import Swal from 'sweetalert2'

function UserLayout() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState('');
    const [filterRol, setFilterRol] = useState('');
    const [users, setUsers] = useState([]);

    async function loadUsers() {
        const response = await getUsers()

        if (response.status===200) {
            setUsers(response.data.users)
        }else
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Remember wake up the server!'
              })
        }
    }

    useEffect( () => {
        loadUsers()
    }, []
    )

    const handleSubmit = async(data) => {

        await saveUser(data.formValues)
        loadUsers()
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Header title='Algorath Users'/>
            <AddButton onClick={() => setIsModalOpen(true)}/>
            <Filters filters={filters} setFilters={setFilters}/>
            <FilterRol filterRol={filterRol} setFilterRol={setFilterRol}/>
            <ListUsers users={users} filters={filters} filterRol={filterRol} />
            <Modal show={isModalOpen} onClose={ () =>  setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Head showClose={false}>
                        <Modal.Card.Title>
                            Add User
                        </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit} setIsModalOpen={setIsModalOpen}/>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        <Container>
          <Section>
            <ChartMongoEmployees />  
            <ChartMongoDepartments />
          </Section>
        </Container>
        </Container>
    )
}

export default UserLayout
