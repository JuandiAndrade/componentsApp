
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
// import { colors } from '../../../config/theme/theme'
import { useContext, useRef } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { ThemeContext } from '../../context/ThemeContext'
import { CustomView } from '../../components/ui/CustomView'
import { Buttom } from '../../components/ui/Button'

export const Animation101Screen = () => {

    const { colors } = useContext(ThemeContext);

    // // uso useRef porque no quiero un cambio en el renderizado y current para tomar el valor actual
    // // useRefet hace que se preserve el estado, es decir que si salgo y vuelvo va a tener el valor del estado
    // // Pero mientras este en el componente cambia el valor de la "variable", en teste caso la opacidad , pero no se modifica el estado
    // const animatedOpacity = useRef(new Animated.Value(0)).current;
    // const animatedTop = useRef(new Animated.Value(-100)).current;

    // const fadeIn = () => {

    //     Animated.timing(animatedTop, {
    //         toValue: 0,
    //         duration: 700,
    //         useNativeDriver: true,
    //         easing: Easing.bounce //Easing.elastic(1)
    //     }).start(() => console.log('Animation ended'));


    //     Animated.timing(animatedOpacity, {
    //         toValue: 1,
    //         duration: 300,
    //         useNativeDriver: true,
    //         // el colback del start es opcinal, en vez de un console.log tambien podemos disparar otra animacion
    //     }).start(() => console.log('Animation ended'));
    // }

    // const fadeOut = () => {
    //     Animated.timing(animatedOpacity, {
    //         toValue: 0,
    //         duration: 300,
    //         useNativeDriver: true,

    //         // el colback del start es opcinal, en vez de un console.log tambien podemos disparar otra animacion
    //     }).start(() => animatedTop.resetAnimation());

    //     // asi no se ve bien entonces la voy a disparar cundo termine la anterior
    //     // animatedTop.resetAnimation();

    // }

    // return (
    //     <View style={styles.container}>

    //         <Animated.View
    //             style={[
    //                 styles.purpleBox,
    //                 {
    //                     opacity: animatedOpacity,
    //                     transform: [{
    //                         translateY: animatedTop,
    //                     }]
    //                 }
    //             ]}

    //         />
    //         <Pressable
    //             // onPress={() => fadeIn}
    //             // como no tengo nungun argumento lo puedo llamar asi:
    //             onPress={fadeIn}
    //             style={{ marginTop: 10 }}
    //         >
    //             <Text>FadeIn</Text>
    //         </Pressable>
    //         <Pressable
    //             onPress={fadeOut}
    //             style={{ marginTop: 10 }}
    //         >
    //             <Text>FadeOut</Text>
    //         </Pressable>
    //     </View>
    // )



    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();



    return (

        <CustomView style={styles.container}>



            <Animated.View
                style={[
                    styles.purpleBox,
                    {
                        backgroundColor: colors.primary
                    },
                    {
                        opacity: animatedOpacity,
                        transform: [{
                            translateY: animatedTop,
                        }]
                    }
                ]}

            />
            <Buttom
                // onPress={() => fadeIn}
                // como no tengo nungun argumento lo puedo llamar asi:
                text='FadeIn'
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition(
                        {
                            initialPosition: -100,
                            easing: Easing.elastic(1),
                            duration: 750
                        }
                    )
                }}
                styles={{ marginTop: 10 }}


            />
            <Buttom
                text='FadeOut'
                onPress={() => fadeOut({})}
                styles={{ marginTop: 10 }}

            />
        </CustomView>

    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150
    }
})