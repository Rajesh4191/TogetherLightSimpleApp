import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostDetailScreen = ({ route }) => {
  const { title, body } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PostDetailScreen;

