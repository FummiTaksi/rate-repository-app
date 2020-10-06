import React from 'react';
import { View, Text , Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
			color: 'white',
			backgroundColor: 'blue',
			alignSelf: 'flex-start'
		},
		rowContainer: {
			flexDirection: 'row'
		},
		columnContainer: {
			flexDirection: 'column'
		}
	});
	
	return (
		<Card>
			<Card.Content style={styles.rowContainer}>
				<Card.Cover style={styles.logo} source={{ uri: repositoryObject.ownerAvatarUrl }}/>	
				<Card.Content style={styles.columnContainer}>
					<Title style={styles.titleText}>{repositoryObject.fullName}</Title>
					<Paragraph style={styles.description}>{repositoryObject.description}</Paragraph>
					<Text style={styles.language}>{repositoryObject.language}</Text>
				</Card.Content>
			</Card.Content>
			<Card.Content style={styles.rowContainer}>
				<Card.Content style={styles.columnContainer}>
					<Text>{transferNumberToThousands(repositoryObject.stargazersCount)}</Text>
					<Text>Stars</Text>
				</Card.Content>
				<Card.Content style={styles.columnContainer}>
					<Text>{transferNumberToThousands(repositoryObject.forksCount)}</Text>
					<Text>Forks</Text>
				</Card.Content>		
				<Card.Content style={styles.columnContainer}>
					<Text>{repositoryObject.reviewCount}</Text>
					<Text>Reviews</Text>
				</Card.Content>			
				<Card.Content style={styles.columnContainer}>
					<Text>{repositoryObject.ratingAverage}</Text>
					<Text>Rating</Text>
				</Card.Content>					
			</Card.Content>
		</Card>
	);
};

export default RepositoryItem;