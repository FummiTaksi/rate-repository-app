import React from 'react';
import { Text , StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import RepositoryStatistic from './RepositoryStatistic';

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
				<RepositoryStatistic
					upText={transferNumberToThousands(repositoryObject.stargazersCount)}
					downText={"Stars"}
				>
				</RepositoryStatistic>
				<RepositoryStatistic
					upText={transferNumberToThousands(repositoryObject.forksCount)}
					downText={"Forks"}
				>
				</RepositoryStatistic>
				<RepositoryStatistic
					upText={repositoryObject.reviewCount}
					downText={"Reviews"}
				>
				</RepositoryStatistic>
				<RepositoryStatistic
					upText={repositoryObject.ratingAverage}
					downText={"Rating"}
				>
				</RepositoryStatistic>					
			</Card.Content>
		</Card>
	);
};

export default RepositoryItem;