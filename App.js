/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Button,
   Alert
   
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { ACPCore } from '@adobe/react-native-acpcore';
 import {
   ACPTarget,
    ACPTargetPrefetchObject, 
    ACPTargetRequestObject,
     ACPTargetOrder,
      ACPTargetProduct,
       ACPTargetParameters
     } from '@adobe/react-native-acptarget';
import { ACPAnalytics } from '@adobe/react-native-acpanalytics';
     
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
        
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
            
           <Section title="Target Sample App">
             Edit <Text style={styles.highlight}>App.js</Text> to change this
             screen and then come back to see your edits.
           </Section>
           
           
         </View>
       </ScrollView>
       
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 180,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 });
 
 export default App;
 
 ACPCore.getLogLevel().then(level => console.log("AdobeExperienceSDK: Log Level = " + level));
 ACPTarget.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPTarget version: " + version));
 ACPAnalytics.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPAnalytics version: " + version));
 let contextData = {"key1": "some data", "key2": "another data point"}
  ACPCore.trackState("Homepage", contextData);

 
 /*var purchaseIDs = ["34","125"];

var targetOrder = new ACPTargetOrder("ADCKKIM", 344.30, purchaseIDs);
var targetProduct = new ACPTargetProduct("24D3412", "Books");
var profileParameters1 = {"ageGroup": "20-32"};
var parameters = new ACPTargetParameters({"parameters": "parametervalue"}, profileParameters1, targetProduct, targetOrder);

ACPTarget.locationsDisplayed(["locationName", "locationName1"], parameters);*/
ACPTarget.clearPrefetchCache();

var mboxParameters1 = {"status": "platinum"};
var mboxParameters2 = {"userType": "Paid"};
var purchaseIDs = ["34","125"];

var targetOrder = new ACPTargetOrder("ADCKKIM", 344.30, purchaseIDs);
var targetProduct = new ACPTargetProduct("24D3412", "Books");
var parameters1 = new ACPTargetParameters(mboxParameters1, null, null, null);
var request1 = new ACPTargetRequestObject("clickTestRyan", parameters1, "defaultContent1", (error, content) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Adobe content:" + content);
  }
});
var parameters2 = new ACPTargetParameters(mboxParameters2, {"profileParameters": "parameterValue"}, targetProduct, targetOrder);
    var request2 = new ACPTargetRequestObject("mboxName2", parameters2, "defaultContent2", (error, content) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Adobe content:" + content);
      }
    });

    var locationRequests = [request1, request2];
    var profileParameters1 = {"ageGroup": "20-32"};

    var parameters = new ACPTargetParameters({"parameters": "parametervalue"}, profileParameters1, targetProduct, targetOrder);
    ACPTarget.retrieveLocationContent(locationRequests, parameters);
    