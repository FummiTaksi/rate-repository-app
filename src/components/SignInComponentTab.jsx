import React from 'react';
import { Link } from 'react-router-native';

import SignOutTab from './SignOutTab';
import SignInTab from './SignInTab';
import { useAuthorizedUser, useRemoveAuthorization } from '../hooks/useAuthorizedUser';

const SignInComponentTab = () => {
	const { data, loading } = useAuthorizedUser();
	if (loading || !data) {
		return (
			<Link to="/signin">
				<SignInTab />
			</Link>
		);
	}
	const [getAuthorizedUser] = useRemoveAuthorization();
	const signOut = async () => {
		await getAuthorizedUser();
	};

	if (data.authorizedUser !== null) {
		return (
			<Link to="/signin" onPress={() => signOut()}>
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
