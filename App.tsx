import React, {useState} from 'react';
import {  View , BackHandler, Alert} from 'react-native';
import  styles from './AppStyles'
import {Main, Header} from './Components'
export default function App() {
  console.disableYellowBox = true;
  React.useEffect(() => {
    const btnAction = () => {
      Alert.alert(
        "Crisp Image Share",
        "Are you sure you want to exit Crisp Image Share?",
        [{
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          }, {
            text: "yes",
            onPress: () => BackHandler.exitApp(),
            style: "destructive",
          },
      
        ],{
          cancelable: !true
        }

      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  const [image, setImage] = useState(null)
  return (
    <View style={styles.container}>
     <Header setImage={setImage} image={image} />
     <Main image={image} setImage={setImage} />
    </View>
  );
}

