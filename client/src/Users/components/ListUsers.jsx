import React from 'react'
import { Table } from 'react-bulma-components'
import TableRowUser from './TableRowUser'

function ListUsers({ users, filters, filterRol }) {

    if (!users.length) {
        return (
            <h2 className='title has-text-centered'>Not registered users</h2>
        )
    }else{
        return (
            <Table style={{marginTop: '15px'}}>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Name</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRowUser users={users} filters={filters} filterRol={filterRol}/>
                </tbody>
            </Table>
        )
    }


}

export default ListUsers
