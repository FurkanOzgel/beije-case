import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './MailMembership.style';

function MailMembership(): React.JSX.Element {
    return(
        <View>
            <View>
                <Text style={styles.mailInfoTitle}>Arayı açmayalım!</Text>
                <Text style={styles.mailInfoText}>beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazete</Text>
            </View>
            <View>
                <View style = {{marginTop:24, gap:16}}>
                    <TextInput placeholder='e-mail adresin' style={styles.mailInput} placeholderTextColor={'rgba(255, 255, 255, 0.698)'}/>
                    <TouchableOpacity style={styles.sendButton}>
                        <Text style={styles.sendBtnText}>Gönder</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.gdprInfo}>Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</Text>
            </View>
        </View>
    )
}

export default MailMembership;