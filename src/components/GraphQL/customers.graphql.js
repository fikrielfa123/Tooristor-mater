import { PAGINATORINFO } from './fragment.paginatorInfo';
import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql `
 ${PAGINATORINFO}
query Customers(
  $orderBy: [QueryUsersOrderByOrderByClause!]
  $first: Int
  $page: Int
  $text: String
) {
  users(orderBy: $orderBy, first: $first, page: $page, text: $text) {
    data {
      id
      name
      email
      is_active
      profile {
        id
        avatar {
          id
          original
          thumbnail
        }
        bio
      }
      created_at
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
`
export const GET_CUSTOMER = gql `

query Customer($id: ID!) {
  user(id: $id) {
    id
    name
    email
    profile {
      id
      avatar {
        id
        original
        thumbnail
      }
      bio
    }
    created_at
  }
}
`
export const UPDATE_CUSTOMEFR = gql `
mutation UpdateCustomer($input: UserUpdateInput) {
  updateUser(input: $input) {
    id
    name
    email
    profile {
      avatar {
        id
        thumbnail
        original
      }
      contact
      bio
      socials {
        type
        link
      }
    }
    address {
      title
      default
      address {
        #street_address
        country
        city
        state
        zip
      }
      type
    }
  }
}
`