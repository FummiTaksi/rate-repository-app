import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    pageInfo {
      totalCount
    }
    edges {
      node {
        id
        description
        ratingAverage
        reviewCount
        ownerAvatarUrl
        fullName
        language
        stargazersCount
      }
    }
  }
}
`;

export const GET_AUTHORIZED_USER = gql`
query getAuthorizedUser {
  authorizedUser {
    id
    username
  }
}
`;
