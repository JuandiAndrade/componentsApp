
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { globalStyles, colors } from '../../../config/theme/theme';
import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

// CustonView va a recibir hijos, es decir que es un componente que va a recibir otros componentes ---> Children

interface Props {
    style?: StyleProp<ViewStyle>;
    // Tomamos el children, en Card esta otra forma de recibir el children
    children?: ReactNode;
    margin?: boolean;
}


export const CustomView = ({children, style, margin=false}: Props) => {

    // cambio de theme:
    // comamos de nuesto contesto CustomView

    const {colors} = useContext(ThemeContext);

    return (
        <View 
        style={
            [ globalStyles.mainContainer, 
                margin? globalStyles.globalMargin : null, 
                {backgroundColor: colors.background},
                style 
            ]}>
            {children}
        </View>
    )
}
