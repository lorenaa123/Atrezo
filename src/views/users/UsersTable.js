import React from "react";
import {Card, CardBody, Table} from "reactstrap";
import {useUserList} from "../../hooks/users/useUserList";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const UsersTable = () => {

  const [userList, getUsers] = useUserList();

  return (
    <>
      <Card className="mt-3">
        <CardBody>
          <Table>
            <thead>
            <tr>
              <th>Nombre Usuario</th>
              <th>Cargo</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            {userList.items.map((item, idx) => (
              <UserItemRow key={idx} item={item}/>
            ))}

            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  )
}

const UserItemRow = ({item}) => {
  return (
    <tr className="align-middle">
      <th scope="row">{item.name}</th>
      <td>{item.role}</td>
      <td className="text-right"><FontAwesomeIcon icon={faCog}/></td>
    </tr>
  )
}
