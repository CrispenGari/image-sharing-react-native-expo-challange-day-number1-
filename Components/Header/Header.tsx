import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { Feather, Entypo } from '@expo/vector-icons';
import {openImagePickerSync, openShareDialogAsync} from '../../utils'
const Header = ({setImage, image}) => {
    const choseImage =()=>{
        openImagePickerSync().then(result=>{
            if(!result?.cancelled){
                  setImage(result)
            }
        })
    }
    const openAndShare =()=>{
        openImagePickerSync().then(res=>{
            if(!res?.cancelled){
                setImage(res)
                if(res?.uri){
                    openShareDialogAsync(res.uri).then(res=>{}).catch(error=>{
                    }).finally(()=>{
                    })
                }
            }
        })
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera} onPress={choseImage}>
                <Feather name="camera" size={24} color="lightseagreen"/>
            </TouchableOpacity>
            <Text style={styles.header__text}>
                Crisp Image Share
            </Text>
            <TouchableOpacity style={styles.header__share} onPress={openAndShare}>
                <Entypo name="share" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
