import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg'; 

import styles from './Footer.style';
import icons from '../../assets/svg';

import TextButton from '../TextButton';
import IconButton from '../IconButton';
import MailMembership from './components/MailMembership';

function Footer(): React.JSX.Element {
    return(
        <View style={styles.footerContainer}>
            <SvgXml xml={icons.whiteLogo}/>
            <MailMembership/>
            <View style={{marginTop: 40}}>
                <View style={styles.navContainer}>
                    <View style={styles.navColumn}>
                        <TextButton text='beije Ped' onPress={() => {}}
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                        <TextButton text='beije Günlük Ped' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                        <TextButton text='beije Tampon' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                        <TextButton text='beije Store' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                    </View>
                    <View  style={styles.navColumn}>
                        <TextButton text='Blog' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                        <TextButton text='Sıkça Sorulan Sorular' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                        <TextButton text='Biz Kimiz?' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                        <TextButton text='Quiz' onPress={() => {}}  
                            containerStyle={styles.navBtn} textStyle={styles.navBtnText}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, width: '100%'}}>
                    <IconButton svg={icons.facebook} onPress={() => {}}/>
                    <IconButton svg={icons.instagram} onPress={() => {}}/>
                    <IconButton svg={icons.twitter} onPress={() => {}}/>
                    <IconButton svg={icons.linkedin} onPress={() => {}}/>
                    <IconButton svg={icons.spotify} onPress={() => {}}/>
                </View>
            </View>
            <View style={styles.agreementContainer}>
                <Text style={styles.agreementBtnText}>2024 beije. Tüm hakları saklıdır.</Text>
                <TextButton text='KVKK' onPress={() => {}} textStyle={styles.agreementBtnText}/>
                <TextButton text='KVKK Başvuru Formu' onPress={() => {}} textStyle={styles.agreementBtnText}/>
                <TextButton text='Üyelik Sözleşmesi' onPress={() => {}} textStyle={styles.agreementBtnText}/>
                <TextButton text='Gizlilik Politikası' onPress={() => {}} textStyle={styles.agreementBtnText}/>
                <TextButton text='Çerez Politikası' onPress={() => {}} textStyle={styles.agreementBtnText}/>
                <TextButton text='Test Sonuçları' onPress={() => {}} textStyle={styles.agreementBtnText}/>

                <View style={styles.languageSelection}>
                    <TextButton text='EN' onPress={() => {}} textStyle={styles.agreementBtnText}/>
                    <Text style={styles.agreementBtnText}>|</Text>
                    <TextButton text='TR' onPress={() => {}} textStyle={[styles.agreementBtnText, {color: 'white'}]}/>
                </View>
            </View>
        </View>
    )
}

export default Footer;