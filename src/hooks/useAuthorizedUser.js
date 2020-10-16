import { useContext } from 'react';

import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

export const useAuthorizedUser = () => {
  const response = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });
  return { data: response.data , loading: response.loading};
};

export const removeAuthorization = async () => {
	const authStorage = useContext(AuthStorageContext);
	await authStorage.removeAccessToken();
};
