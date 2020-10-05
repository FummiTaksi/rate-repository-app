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
		titleText: {
			fontWeight: "bold"
		},
		description: {
			color: 'grey'
		},
		language: {
			backgroundColor: 'blue'
		}
	});
	
	return (
		<View>
			<Image style={styles.logo} source={{ uri: repositoryObject.ownerAvatarUrl }}/>
			<Text style={styles.titleText}>{repositoryObject.fullName}</Text>
			<Text style={styles.description}>{repositoryObject.description}</Text>
			<Text style={styles.language}>{repositoryObject.language}</Text>
			<Text>Stars: {transferNumberToThousands(repositoryObject.stargazersCount)}</Text>
			<Text>Forks: {transferNumberToThousands(repositoryObject.forksCount)}</Text>
			<Text>Reviews: {repositoryObject.reviewCount}</Text>
			<Text>Rating: {repositoryObject.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;