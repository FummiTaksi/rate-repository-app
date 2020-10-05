import React from 'react';
import { View, Text , Image, StyleSheet } from 'react-native';

const transferNumberToThousands = (number) => {
	const divided = number / 1000;
	const rounded = Math.round(divided * 10) / 10;
	return `${rounded}k`;
};

const RepositoryItem = (repository) => {
	const repositoryObject = repository.repository;
	const styles = StyleSheet.create({
		logo: {
			width: 66,
			height: 58,
		},
	});
	
	return (
		<View>
			<Image style={styles.logo} source={{uri: repositoryObject.ownerAvatarUrl}}/>
			<Text>Full name: {repositoryObject.fullName}</Text>
			<Text>Description: {repositoryObject.description}</Text>
			<Text>Language: {repositoryObject.language}</Text>
			<Text>Stars: {transferNumberToThousands(repositoryObject.stargazersCount)}</Text>
			<Text>Forks: {transferNumberToThousands(repositoryObject.forksCount)}</Text>
			<Text>Reviews: {repositoryObject.reviewCount}</Text>
			<Text>Rating: {repositoryObject.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;