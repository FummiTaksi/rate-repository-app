import { gql } from 'apollo-boost';

export const AUTHORIZE = gql `
mutation {
  authorize(credentials: { username: "kalle", password: "password" }) {
    accessToken
  }
}`;