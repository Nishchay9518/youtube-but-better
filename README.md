# Youtube But Better

![Frame 1](https://user-images.githubusercontent.com/71606731/119213093-75632200-bada-11eb-86b1-c35454e01351.png)

you can check the Youtube Redesign Concept here. 
### https://www.behance.net/gallery/119924397/Youtube-Redesign-Concept 

## What is the use of this Repo

A Slightly better version of Youtube.<br>

This Project is a ReactJS Project which demonstrates the following: <br>
1. Creating a Component in React
2. Making HTTP calls
3. Communicating between parent and child component
4. Using MaterialUI along with React
5. Using Basic Routing in React
6. Using Redux for State Management
7. Using React Hooks
8. Deploying in Firebase

The project Template can be used to build bigger projects

## Live Application URL

### https://utube-but-better.web.app  
This URL has the application deployed in Firebase

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```
## Live Application URL

The Application is deployed in https://utube-but-better.web.app 

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components
1. **Login** Component : This Component allows user to login through their Google Account.

2. **HomeScreen** Component : This Component Displays the details of the selected customer. This Component gets its data from a json file in assets folder as well. This Component is the Child Component of *Customers* Component.

3. **WatchScreen** Component : This Component Displays the video, comments of the Selected Video and related videos. This Component gets the data from a youtube data api

4. **Subscriptions Screen** Component : This Component displays a list of subscriptions. This Component gets the data from a youtube data api

5. **Search Screen** Component : This Component displays a list of search results. This Component gets the data from a youtube data api

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://material-ui.com/getting-started/installation/ to understand how to use Material UI
