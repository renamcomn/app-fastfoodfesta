import React from 'react';
import { Animated, View, useWindowDimensions } from 'react-native';
import { StyleSheet } from 'react-native';

export function OnboardPaginator( { data, scrollX } : any) {
    const { width } = useWindowDimensions();

    return(
        <View style={{ flexDirection: 'row', height: 64 }}>
           {data.map((_: any, i: number) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10,20,10],
                extrapolate: 'clamp'
            });

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
            })

            return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i} />
           })}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: 'yellow',
        marginHorizontal: 8
    },
})