import { Box, Text, VStack, Image, Center, Button } from "native-base"
import { Animated, Dimensions, FlatList } from "react-native"

import BackgroundIMG from "../assets/images/bg.png"
import LogoIMG from "../assets/images/logo-yellow.png"
import onboarding from "../mock/onboarding";
import { OnboardItem } from "../components/OnboardItem";
import { useRef, useState } from "react";
import { OnboardPaginator } from "../components/OnboardPaginator";
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const Splash = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems } : any ) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return(
        <VStack flex={1}>
            <Image
                source={BackgroundIMG}
                defaultSource={BackgroundIMG}
                alt="Background"
                resizeMode="cover"
                position="absolute"
                style={{ width: width, height: height }}
            />
            <Center mt={10}>
                <Image
                    source={LogoIMG} 
                    width={300} 
                    resizeMode="contain" 
                    alt="Logo"
                />
            </Center>
            
            <Center>
                <FlatList 
                    data={onboarding} 
                    renderItem={({item}) => <OnboardItem item={ item }/> } 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    keyExtractor={(item) => item.id}
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}], { useNativeDriver: false })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    ref={slidesRef}
                />
            </Center>

            <Center mt={10}>
                <OnboardPaginator data={onboarding } scrollX={scrollX} />
            </Center>

            <Center mt={5}>
                <Text color="white" fontSize='2xl'>Descubra os sabores do melhor FastFood.</Text>
            </Center>

            <Button
                width={100}
                height={20}
                borderRadius={20}
                bgColor={'yellow.500'}
                alignSelf='flex-end'
                mr={10}
                mt={10}
                onPress={() => console.log("hello world")}
            >
                <MaterialIcons name="arrow-forward-ios" size={36} color="white" />
            </Button>
        </VStack>
    )
}