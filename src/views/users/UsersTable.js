import React, {useState} from "react";
import {Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table} from "reactstrap";
import {useUserList} from "../../hooks/users/useUserList";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const UsersTable = () => {

  const [userList] = useUserList();

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
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  }

  return (
    <tr>
      <th className="align-middle" scope="row">{item.name}</th>
      <td className="align-middle">{item.role}</td>
      <td className="text-right align-middle">
        <Dropdown isOpen={isSettingsOpen} toggle={toggle}>
          <DropdownToggle className="bg-transparent border-0 text-dark shadow-none">
            <FontAwesomeIcon icon={faCog}/>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Editar Usuario</DropdownItem>
            <DropdownItem>Eliminar Usuario</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </td>
    </tr>
  )
}
