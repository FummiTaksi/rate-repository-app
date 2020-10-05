import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = (repository) => {
	const repositoryObject = repository.repository;
	console.log('repositoryObject', repositoryObject);
	return (
		<View>
			<Text>Full name: {repositoryObject.fullName}</Text>
			<Text>Description: {repositoryObject.description}</Text>
			<Text>Language: {repositoryObject.language}</Text>
			<Text>Stars: {repositoryObject.stargazersCount}</Text>
			<Text>Forks: {repositoryObject.forksCount}</Text>
			<Text>Reviews: {repositoryObject.reviewCount}</Text>
			<Text>Rating: {repositoryObject.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;