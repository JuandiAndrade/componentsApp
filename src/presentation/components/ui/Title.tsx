
import { Text, View } from 'react-native'
// Cuando implemento lo del theme entonces tengo que borrar la referencia de los colores qye vienen en el theme
// import { colors, globalStyles } from '../../../config/theme/theme';
import { globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
	text: string;
	safe?: boolean;
	white?: boolean;
}



export const Title = ({ text, safe, white = false }: Props) => {

	const { top } = useSafeAreaInsets()
	const { colors } = useContext(ThemeContext);

	return (
		<View>
			<Text
				style=
				{
					{ ...globalStyles.title, 
						marginTop: safe ? top : 0, 
						marginBottom: 10, color: white ? 'white' : colors.text 
					}}
			>{text}</Text>
		</View>
	)
}
