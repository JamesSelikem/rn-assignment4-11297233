import React from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet } from 'react-native';

const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,00', location: 'Accra, Ghana', image: require('./assets/facebook.png') },
  { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,00', location: 'Accra, Ghana', image: require('./assets/google.png') },
];

const popularJobs = [
  { id: '1', title2: 'Jr Executive', company2: 'Burger King', salary2: '$96,000/y', location2: 'Los Angeles, US', image: require('./assets/burgerking.png') },
  { id: '2', title2: 'Product Manager', company2: 'Beats', salary2: '$84,000/y', location2: 'Florida, US', image: require('./assets/beats.png') },
  { id: '3', title2: 'Product Manager', company2: 'Facebook', salary2: '$86,000/y', location2: 'Florida, US', image: require('./assets/facebook.png') },
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
        <Image source={require('./assets/figma image.jpg')} style={styles.profileImage} />
          <View>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileEmail}>{email}</Text>
          </View>
        </View>
      </View>
      <TextInput style={styles.search} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <Text style={styles.sectionComment}>See all</Text>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => (
          <View style={styles.featuredJobCard}>
            <Image source={item.image} style={styles.featuredJobImage} />
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobCompany}>{item.company}</Text>
              <Text style={styles.jobSalary}>{item.salary}</Text>
              <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={styles.sectionComment}>See all</Text>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <Image source={item.image} style={styles.popularJobImage} />
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle2}>{item.title2}</Text>
              <Text style={styles.jobCompany2}>{item.company2}</Text>
              <Text style={styles.jobSalary2}>{item.salary2}</Text>
              <Text style={styles.jobLocation2}>{item.location2}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  email: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#666',
  },
  search: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
  },
  sectionComment: {
    color: '#666',
    marginLeft: 280,
    marginBottom: 10,
  },
  featuredJobCard: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#7CB9E8',
    alignItems: 'center',
  },
  featuredJobImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginBottom:70,
  },
  popularJobCard: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  popularJobImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    paddingTop:10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  jobTitle2: {
    paddingTop:10,
    marginTop:8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  jobCompany: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  jobCompany2: {
    fontSize: 14,
    color: '#666',
  },
  jobSalary: {
    paddingTop: 45,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  jobSalary2: {
    paddingTop: -20,
    paddingLeft:150,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  jobLocation: {
    fontSize: 14,
    color: '#FFFFFF',
    paddingBottom: 10,
  },
  jobLocation2: {
    paddingLeft:150,
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
