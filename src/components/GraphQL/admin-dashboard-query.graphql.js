import { gql } from '@apollo/client';
export const ADMIN_DASHBORAD = gql `
query AdminDashboard {
  analytics {
    totalRevenue
    todaysRevenue
    totalOrders
    totalShops
    newCustomers
    totalYearSaleByMonth {
      total
      month
    }
  }
  popularProducts(limit: 10) {
    id
    sku
    slug
    name
    description
    shop {
      name
    }
    image {
      id
      thumbnail
      original
    }
    type {
      id
      name
    }
    price
    quantity
    unit
    status
  }
  orders(first: 10, orderBy: "created_at", sortedBy: "DESC") {
    data {
      id
      tracking_number
      total
      created_at
      status {
        id
        name
        color
        serial
      }
    }
  }
  withdraws(first: 10, orderBy: "created_at", sortedBy: "DESC") {
    data {
      id
      amount
      status
      created_at
      shop {
        name
      }
    }
  }
}
`