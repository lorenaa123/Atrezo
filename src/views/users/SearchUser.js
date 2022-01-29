import React from "react";
import {Card, CardBody, Input} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";



export const SearchUser = () => {
  return(
    <>
    <Card>
      <CardBody className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faSearch} className="mr-2"/>
        <Input placeholder="Buscar Usuario"/>
      </CardBody>
    </Card>
    </>
  )
}
