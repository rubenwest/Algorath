import React from 'react'

 const TableRowUser = ({ users, filters, filterRol }) => {

      if (filters!='') {

        var show_users = users.filter( (user) => user.department == filters );

          if (filterRol!='') {
            var show_users2 = show_users.filter( (user) => user.rol == filterRol);
          }else{
            var show_users2 = show_users;
          }

      }else{

        var show_users = users;
        
        if (filterRol!='') {
          var show_users2 = show_users.filter( (user) => user.rol == filterRol);
        }else{
          var show_users2 = show_users;
        }
        
      }


  return(
    show_users2.map(({name,rol, department},index) => {
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