import React from 'react'
import {View} from 'react-native'
import styles from './styles';
import Tabs from './TabButtons';
import RadioButtons from './RadioButtons'
import SearchBox from './SearchBox'
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles'

const HomeView = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.GREEN, Colors.GREENBLUEMIX, Colors.BLUE]} style={styles.svgBackground} />
            <Tabs />
            <RadioButtons />
            <SearchBox />
        </View>
    );
  };

  export default HomeView;

  