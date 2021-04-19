import React from 'react'
import { Form } from 'react-bulma-components'

const FiltersRol = ({filterRol, setFilterRol}) => {

    const { Select } = Form

    const handleChange = (event) => {
        const {value } = event.target
        setFilterRol(value);
    }

    return (
        <Select 
            onChange={handleChange}
            value={filterRol}
            style={{marginRight: '15px'}}
        >
            <option value="">All</option>
            <option value='User'>User</option>
            <option value='Proyect Manager'>Proyect Manager</option>
    
        </Select>
    )
}

export default FiltersRol
