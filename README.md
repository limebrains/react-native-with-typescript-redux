# React Native boilerplate with Typescript and Redux
## (as well as react-navigation and native Facebook login button on both iOS and Android)

This project is aimed at people who want to quickly start developing their mobile Apps using React Native.

![Example gif](http://i.imgur.com/lmC4q4Y.gif)

## Installation
Before installing, make sure you are able to successfully run the base React Native project. See [React Native Getting Started Guide](http://facebook.github.io/react-native/docs/getting-started.html) for more information on how to do that.

If you are confident your environment is ready, you can proceed with cloning this project:

```sh
git clone https://github.com/limebrains/react-native-with-typescript-redux.git
cd react-native-with-typescript-redux
mkdir -p ~/Documents/FacebookSDK/
cp -R ios/FacebookSDK/. ~/Documents/FacebookSDK/.
```

Install dependencies:

```sh
yarn
```

Start React Native server:

```sh
yarn start
```

Build the source-code with Typescript:

```sh
# Build once
yarn build

# Build and watch for changes
yarn build -- --watch
```

There's some platform specific setup that has to be done for the Facebook login button to work. First, of course, you will have to make one using [Facebook for Developers](https://developers.facebook.com/).

## Setup 

### Facebook

#### Android

Open your `android/app/src/res/values/strings.xml` file and replace all occurrences of `{YOUR_FACEBOOK_APP_ID}` with the actual App ID of your Facebook App.

You will now have to add a new platform in the Facebook for Developers dashboard. 'Google Play Package Name' should be `com.react_native_with_typescript_redux` and 'Class Name' should be `com.react_native_with_typescript_redux.MainActivity`. They should be adjusted accordingly should the project name be changed.

Execute the following command: `keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64` and give an 'android' password when prompted. This will generate a keyhash that you can use for the 'Key Hashes' field. 

Make sure that 'Single Sign On' is on.

#### iOS

Open your `ios/react_native_with_typescript_redux/Info.plist` file and replace all occurrences of `{YOUR_FACEBOOK_APP_ID}` with the actual App ID of your Facebook App. You may also want to change `{HUMAN READABLE REASON FOR PHOTO ACCESS}` to something more sensible.

Add a new platform in the Facebook for Developers dashboard. The only information that has to be provided here is the 'Bundle ID', which is `org.reactjs.native.example.react-native-with-typescript-redux` for the sample project. You can find this at any time by opening the project's ios folder as an Xcode project and looking under the General tab in its settings.


### Additional Config

#### iOS

You need to select proper value for your signing team:
![signing](https://i.imgur.com/ZZ4TnCq.png)


##### JS Code reloading

To enable code reloading you will need to switch variable of `jsCodeLocation` in `ios/AppDelegate.m`

```swift
NSURL *jsCodeLocation;
// js code from jsbundle
jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
// uncomment to enable js code reloading
// jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
```



### Running
You may now want to try and run the App on either Android or iOS using one of the following commands:

#### Android

```sh
yarn run android
```

#### iOS

```sh
yarn run ios
```


### FAQ

1. [How can I rename the app?](https://stackoverflow.com/questions/32830046/renaming-a-react-native-project) 

