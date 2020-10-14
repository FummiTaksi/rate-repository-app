import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
	const authStorage = useContext(AuthStorageContext);
	const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE);
  
  const signIn = async ({ username, password }) => {
		const { data } = await mutate({ variables: { credentials: { username: username,  password: password }}});
		await authStorage.setAccessToken(data.authorize.accessToken);
		apolloClient.resetStore();
		return result;
  };
  return [signIn, result];
};

export default useSignIn;