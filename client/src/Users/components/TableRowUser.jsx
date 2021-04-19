import React from 'react'

 const TableRowUser = ({ users, filters, filterRol }) => {

  let usersDepartmentFilter = []
  let usersRolFilter= []

      if (filters!=='') {

         usersDepartmentFilter = users.filter( (user) => user.department === filters );

          if (filterRol!=='') {
             usersRolFilter = usersDepartmentFilter.filter( (user) => user.rol === filterRol);
          }else{
             usersRolFilter = usersDepartmentFilter;
          }

      }else{

         usersDepartmentFilter = users;
        
        if (filterRol!=='') {
           usersRolFilter = usersDepartmentFilter.filter( (user) => user.rol === filterRol);
        }else{
           usersRolFilter = usersDepartmentFilter;
        }
        
      }


  return(
    usersRolFilter.map(({name,rol, department},index) => {
      return (
          <tr key={index}>
              <td>{department}</td>
              <td>{name}</td>
              <td>{rol}</td>
          </tr>
      )
    })    
  )

}

export default TableRowUser