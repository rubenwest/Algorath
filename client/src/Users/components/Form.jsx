import React, { useState } from 'react'
import { Form as BulmaForm, Button} from 'react-bulma-components'

const { Field, Control, Label, Input, Select } = BulmaForm

const Form = ({ handleSubmit, setIsModalOpen }) => {

    const [formValues, setFormValues] = useState({
        name: '',
        rol: 'User',
        department: 'Blockchain'
    });

const handleChange = (event) => {
    const {name, value } = event.target
    setFormValues({ ...formValues, [name]: value})
}

const _handleSubmit = (e) =>{
    e.preventDefault();
    handleSubmit({formValues})
}
    return (
        <form onSubmit={_handleSubmit}>
        
            <Field>
                <Label>Name</Label>
                <Control>
                <Input 
                    placeholder="Name"
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
                </Control>
            </Field>
            <Field>
                <Label>Rol</Label>
                <Control>
                <Select
                    name='rol'
                    value={formValues.rol}
                    onChange={handleChange}
                >   
                    <option value='User'>User</option>
                    <option value='Proyect Manager'>Proyect Manager</option>
                </Select>
                </Control>
            </Field>
            <Field>
                <Label>Department</Label>
                <Control>
                <Select
                    name='department'
                    value={formValues.department}
                    onChange={handleChange}
                >
                    <option value='Blockchain'>Blockchain</option>
                    <option value='BI'>Bussiness Intelligence</option>
                    <option value='Support'>Support</option>
                </Select>
                </Control>
            </Field>
            <Field>
                <Button type= 'submit' color='primary'>
                    Save
                </Button>
                <Button color='danger' style={{ marginLeft: '15px' }} onClick={() => setIsModalOpen(false)} >
                    Close
                </Button>
            </Field>

        </form>
    )
}

export default Form
