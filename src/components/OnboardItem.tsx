import React from 'react';
import { Image, ImageSourcePropType, Text, View, useWindowDimensions } from 'react-native';
import { StyleSheet } from 'react-native';

type onBoardItemProps = {
    item: {
        id: string;
        title: string;
        text: string;
        image: ImageSourcePropType;
    }
}

export function OnboardItem( { item } : onBoardItemProps) {

    const { width } = useWindowDimensions();

    return(
        <View style={[styles.container, { width }]}>
            <Image source={item.image } style={[styles.image, { width, resizeMode: 'contain'}]} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        textAlign: 'center',
        paddingHorizontal: 40,
        fontSize: 26,
        color: 'yellow',
        marginTop: 20
    },
    description: {
        textAlign: 'center',
        paddingHorizontal: 40,
        fontSize: 20,
        color: 'white',
        marginTop: 20
    }
})