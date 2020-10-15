import React from 'react';

import { Link } from 'react-router-native';

import SignOutTab from './SignOutTab';
import SignInTab from './SignInTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const SignInComponentTab = () => {
	const { data } = useAuthorizedUser();
	if (data !== null) {
		return (
			<Link to="/signin">
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
