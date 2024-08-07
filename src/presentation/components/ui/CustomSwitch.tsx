
import { useContext, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
// import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';


interface Props {
	isOn: boolean;
	text?: string;


	onChange: (value: boolean) => void;
}



export const CustomSwitch = ({ isOn, onChange, text }: Props) => {

	const {colors} = useContext(ThemeContext);

	return (
		<View style={[
			styles.switchRow,
			{backgroundColor: colors.cardBackground}
			]}>

			{
				text && (<Text style={{ color: colors.text }}>{text}</Text>)
			}

			<Switch
				thumbColor={Platform.OS === 'android' ? colors.primary : ''} //'' asi digo el color que viene por defecto
				ios_backgroundColor="#3e3e3e"
				onValueChange={onChange}
				value={isOn}
			/>
		</View>
	)
}



const styles = StyleSheet.create({
	switchRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 5
	}
})