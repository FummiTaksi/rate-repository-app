import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RepositoryStatistic = ({upText, downText}) => {
	const styles = StyleSheet.create({
		columnContainer: {
			flexDirection: 'column'
		},
		upText: {
			fontWeight: "bold"
		},
		downText: {
			color: "grey"
		}
	});
  return (
		<Card.Content style={styles.columnContainer}>
			<Text style={styles.upText}>{upText}</Text>
			<Text style={styles.downText}>{downText}</Text>
    </Card.Content>		
  );
};

export default RepositoryStatistic;