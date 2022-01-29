import {useEffect, useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        isLoading: true,
        __forceRefresh: false,
      }

    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        fulfilled: true,
        items: action.payload,
        __forceRefresh: false
      }

    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    case 'REFRESH':
      return {
        ...state,
        items: [],
        __forceRefresh: true
      }
    default:
      return {...state};
  }
}

const result = [
  {
    uuid: 1,
    name: 'Federico',
    role: 'Admin'
  },
  {
    uuid: 2,
    name: 'Raul',
    role: 'Client'
  },
  {
    uuid: 3,
    name: 'Jualiana',
    role: 'Supplier'
  },
  {
    uuid: 4,
    name: 'Laura',
    role: 'Teacher'
  },
]

export const useUserList = () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
    fulfilled: false,
    items: [],
    __forceRefresh: true
  })

  useEffect(() => {
    if (state.__forceRefresh) {
      (async () => {
        dispatch({type: 'INIT'})

        try {
          // const result = await axios.get(`/api/v1/companies/${user.getCompany().id}/labels`,
          //   {
          //     headers: user.authenticationHeaders,
          //     params: {items: 20, page: state.currentPage}
          //   }
          // )

          dispatch({type: 'SUCCESS', payload: result})
        } catch (e) {
          dispatch({type: 'FAILURE'})
        }
      })()
    }
  }, [state.__forceRefresh]);

  return [{...state}, () => dispatch({type: 'REFRESH'})];
}
