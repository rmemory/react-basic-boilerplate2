npm install --save react react-dom react-router-dom prop-types axios query-string

npm install --save-dev autoprefixer babel-core babel-eslint babel-loader babel-polyfill babel-preset-env babel-preset-react eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react css-loader mini-css-extract-plugin node-sass sass-loader style-loader webpack webpack-cli webpack-dev-server 

npm install --save-dev firebase-tools

In package.json, add the following scripts:

```
	"deploy": "npm run build && firebase deploy",
	"firebase-init": "firebase login && firebase init"
```
Project creation is only available from the Firebase Console
Please visit https://console.firebase.google.com to create a new project, then run firebase use --add

```

```
./node_modules/firebase-tools/bin/firebase use --add react-battle-cbdb8
```

```
npm run deploy
```