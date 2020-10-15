import React from 'react';

import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import SignOutTab from './SignOutTab';
import SignInTab from './SignInTab';
import {useAuthorizedUser, removeAuthorizedUser } from '../hooks/useAuthorizedUser';

const removeToken = async () => {
	const apolloClient = useApolloClient();
	apolloClient.resetStore();
	await removeAuthorizedUser();
};

const SignInComponentTab = () => {
	const { data } = useAuthorizedUser();
	if (data !== null) {
		return (
			<Link to="/signin" onPress={() => removeToken()}>
				<SignOutTab />
			</Link>
		);
	}
  return (
    <Link to="/signin">
      <SignInTab />
    </Link>
  );
};

export default SignInComponentTab;
