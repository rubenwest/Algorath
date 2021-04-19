import React from 'react'
import { Form } from 'react-bulma-components'

const Filters = ({filters, setFilters}) => {

    const { Select } = Form

    const handleChange = (event) => {
        const {value } = event.target
        setFilters(value);
    }

    return (
        <Select 
            onChange={handleChange}
            value={filters}
            style={{marginRight: '15px'}}
        >
            <option value="">All</option>
            <option value='Blockchain'>Blockchain</option>
            <option value='BI'>Bussiness Intelligence</option>
            <option value='Support'>Support</option>
        </Select>
    )
}

export default Filters
