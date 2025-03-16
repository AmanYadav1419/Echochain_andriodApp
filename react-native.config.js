const { get } = require("react-native/Libraries/TurboModule/TurboModuleRegistry");

module.exports = {
  project: {
        ios: {},
        android: {},
      },
      'react-native-vector-icons':{
        platforms: {
          ios: null,
          android: null,
        },
      },
        assets: ['./src/assets/fonts/'],
        getTransformModulePath() {
          return require.resolve('react-native-typescript-transformer');
        },
        getSourceExts() {
          return ['ts', 'tsx'];
        },
    }

    // video start from 5:30
    // need to install fonts and link them 
    // for linking fonts command is -> npx 

    // for linking fonts command is -> npx react-native-asset

    // and with that we also need to link images or icons

    // go and search for the fonts names as follows
    // Satoshi-Black.otf
    // Satoshi-Bold.otf
    // Satoshi-Light.otf
    // Satoshi-Medium.otf
    // Satoshi-Regular.otf

    // and need to write and link vector icons only manaully in file info.plist in ios
    // this string is for 3 times as three icons are there
    // just copy and paste them in 
    // after <false/> tag but before that check <key>UIAppFonts</key> is present or not
    // if present then copy and paste this strings tag after the fonts are ending and before the <array> tag is ending 

    // <string>MaterialIcons.ttf</string> 
    // <string>Ionicons.ttf</string>
    // <string>MaterialCommunityIcons.ttf</string> 

    // video is staring from 11:10