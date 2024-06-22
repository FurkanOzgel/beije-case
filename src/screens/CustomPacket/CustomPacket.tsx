import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from '../CustomPacket/CustomPacket.style';
import Footer from '../../components/Footer';
import TabViews from './TabViews';
import CartDetail from '../../components/CartDetail';

const initialLayout = { width: Dimensions.get('window').width };

function DescriptionContainer(): React.JSX.Element {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.title}>Kendi Paketini Oluştur</Text>
            <Text style={styles.text}>Tercih ve ihtiyaçların doğrultusunda
                seçeceğin ürünlerden ve miktarlardan, sana özel bir paket
                oluşturalım.
            </Text>
        </View>
    );
};

function TabViewComponent(): React.JSX.Element {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'first', title: 'bejie Ped' },
        { key: 'second', title: 'bejie Günlük Ped' },
        { key: 'third', title: 'bejie Tampon' },
    ]);

    return (
        <TabView
            style={styles.tabView}
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                first: TabViews.PadRoute,
                second: TabViews.DailyPadRoute,
                third: TabViews.TamponRoute
            })}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            swipeEnabled={false}
            animationEnabled={false}
            renderTabBar={props => 
                <TabBar
                    {...props}
                    style={styles.tabBar}
                    labelStyle={styles.tabBarLabel}
                    activeColor={'rgb(52, 49, 49)'}
                    indicatorStyle={styles.tabBarIndicator}/>
            }
            />
    );
}

function CustomPacket(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentContainer}>
                    <DescriptionContainer/>
                    <TabViewComponent/>
                </View>
                <Footer/>
            </ScrollView>
            <CartDetail/>
        </View>
    );
}

export default CustomPacket;
