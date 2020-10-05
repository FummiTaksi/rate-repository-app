import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = (repository) => {
	return (
	<Text>{repository.repository.description}</Text>
	);
};

export default RepositoryItem;