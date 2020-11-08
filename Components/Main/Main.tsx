import React from 'react'
import { View , Text, Image,TouchableOpacity} from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';
import {openImagePickerSync, openShareDialogAsync} from '../../utils'
import styles from './MainStyles'
const Main = ({image, setImage}) => {
    const choseImage =()=>{
        openImagePickerSync().then(res=>{
            setImage(res)
        })
    }
    const shareImage =()=>{
        if(image){
            openShareDialogAsync(image?.uri).then(()=>{}).catch(error=>{
                console.log("An error has oocured");
            })
        }
    }
    if(image && image?.uri !== undefined){
        return (
            <View style={styles.main}>
                <Text style ={styles.main__text1}>Selected Image Preview</Text>
                <Text style ={styles.main__text2}>{image?.type}</Text>
                <Image source={{uri: image?.uri}} style ={styles.main__image}/>
                <Text style ={styles.main__text2}>{String(image?.uri).split('/')[String(image?.uri).split('/').length -1]}</Text>
                <View style={styles.main__controls}>
                    <TouchableOpacity style={styles.main__open}  onPress={choseImage}>
                         <Feather name="camera" size={24} color="lightseagreen"/>
                         <Text style={styles.main__controltext}>Choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__share}  onPress={shareImage}>
                        <Entypo name="share" size={24} color="orange" />
                        <Text style={styles.main__controltext}>Share</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }else{
        return(
            <View style={styles.main}>
                <Text style ={styles.main__text1}>Selected an Image  to share</Text>
                  <Image style={{width: 100, height: 100, marginVertical: 150}} source={{uri: "https://i.gifer.com/ZZ5H.gif"}}/>
                  <View style={styles.main__controls}>
                    <TouchableOpacity style={styles.main__open}  onPress={choseImage}>
                         <Feather name="camera" size={24} color="lightseagreen"/>
                         <Text style={styles.main__controltext}>Choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__share} disabled={image?.uri === undefined}  onPress={shareImage}>
                        <Entypo name="share" size={24} color="orange" />
                        <Text style={styles.main__controltext}>Share</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
        
    }
    
}
export default Main
