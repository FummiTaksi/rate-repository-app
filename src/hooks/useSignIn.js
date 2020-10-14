import { useContext } from 'react';

import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';


const useSignIn = () => {
	const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);
  
  const signIn = async ({ username, password }) => {
		await mutate({ variables: { credentials: { username: username,  password: password }}});
		return result;
  };
  return [signIn, result];
};

export default useSignIn;