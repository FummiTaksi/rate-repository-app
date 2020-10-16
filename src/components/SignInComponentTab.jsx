import React, { useState } from 'react';

import { Link } from 'react-router-native';

import SignOutTab from './SignOutTab';
import SignInTab from './SignInTab';
import { useAuthorizedUser, useRemoveAuthorization } from '../hooks/useAuthorizedUser';

const SignInComponentTab = () => {
	const { data } = useAuthorizedUser();
	const [signedIn, setSignedIn] = useState(data !== null);
	const [getAuthorizedUser] = useRemoveAuthorization();
	const signOut = async () => {
		await getAuthorizedUser();
		setSignedIn(false);
	};

	if (signedIn) {
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
