#### Personal notes on creating the App for myself. To keep track of my progress

## Tools used

- Cloudinary - For Image upload
- Firebase - For authentication

## Packages Used

- expo/vector-icons
- react-navigation/bottom-tabs | native-stack | stack | native
- email-validator
- expo-image-picker
- firebase
- formik - Forms
- react-native-paper
- react-native-reanimated - Animation
- Yup - Validate data, used with Formik
- react-native-gesture-handler

## Structure of the Folders

The main root folder of the app is the `app` directory. Along with these `App.js` which is the wrapper for the root of all Apps. Other items in the main folder are:

- `App.js` : Contains the root app imports and wrapper components. Main components which should be noted are `react-native-gesture-handler` which should be kept in the `App.js` file. Then there is the `LogBox` import which is used to remove unwanted logs from the console
- `babel.config.js` : This file must contain the extra babel dependensies for the project. The main dependensies which are used in this project from the template is `react-native-reanimated/plugin` which is needed for react-native animation components
- ### `App` :
  App directory is mainly divided into subfolders based on the category of the codes inside.
  - `assets` : Contains all assets related to the project. One thing should be noted is the `data.js` file inside data directory of assets. This one is used to store dummy data before creating a database and users.
  - `components`: Most of the parts of the app are split into multiple components, each components are given its own directory which contains the sub components. For eg: The Home direcotory contains `Header.jsx` , `Post.jsx` and so on.
  - `config`: This directory contains the main configurations for the projects, such as loading API keys, extra background javascript functions etc. This directory is not added to git by default so one have to create it, with its configurations to make the code work.
  - `routes`: Routes directory contains the part of the code that defines the route screens to use. This app contains two routes, the BottomNavigator which is a route of itsown as there is no nav on the login screen and GlobalNavigator which controls all other screens.
  - `screens`: Contanins All the screens the routes are accounted to. Each screen would be a small file of code connecting to the components in the Components folder.
- Thus the app follows the following structure:

```javascript
<App.js>
  <Routes>
    <screens>
      <Components>
        <config />
        <assets />
      </Components>
    </screens>
  </Routes>
</App.js>
```

## Explaining the Structures and algorithms implemented on each component
