import React from 'react';
import {SearchUser} from "./SearchUser";
import {UsersTable} from "./UsersTable";

export const Users = () => {
  return(
    <>
      <SearchUser/>
      <UsersTable/>
    </>
  )
}
