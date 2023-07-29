import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostListScreen = () => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
//   const fetchPosts = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
        Alert.alert('Error fetching data');
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false); // Set refreshing to false when the data fetch is complete
    }
  };


  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing to true before starting the data fetch
    fetchPosts();
  };



  const handlePostPress = (post) => {
    navigation.navigate('PostDetailScreen', {
      title: post.title,
      body: post.body,
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
        <Button title="Refresh" onPress={handleRefresh} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item)}>
            <View style={styles.postItem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
        refreshing={!posts.length}
        onRefresh={fetchPosts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PostListScreen;
