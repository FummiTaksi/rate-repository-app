import { useContext } from 'react';

import { useQuery, useApolloClient } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

export const useAuthorizedUser = () => {
  const response = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });
  return { data: response.data , loading: response.loading};
};

export const useRemoveAuthorization = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  let result = null;
  const getAuthorizedUser = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    result = useQuery(GET_AUTHORIZED_USER, {
      fetchPolicy: 'cache-and-network'
    });
    return result;
  };
  return [getAuthorizedUser, result];
};