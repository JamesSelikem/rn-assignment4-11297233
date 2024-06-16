# rn-assignment4-11297233

## Jobizz Application
### Description
Jobizz is a React Native application that allows users to log in and view job listings. The app includes a login screen and a home screen that displays featured and popular jobs. This README provides an overview of each component's usage and styling.

#### Components
##### LoginScreen
Usage: The LoginScreen component is the first screen of the application. It allows users to input their name and email to log in.
###### Key Elements
TextInput: For entering the user's name and email.
Button: Triggers navigation to the HomeScreen passing the entered name and email.
TouchableOpacity: For social login options (Apple, Google, Facebook).
StyleSheet: Used to style the input fields, buttons, and layout.

##### HomeScreen
Usage: The HomeScreen component displays the user's email and a list of featured and popular job listings.
###### Key Elements
FlatList: Used to render the list of featured and popular jobs.
TextInput: For searching jobs.
Image: For displaying company logos.
StyleSheet: Used to style the profile section, job listings, and layout.

