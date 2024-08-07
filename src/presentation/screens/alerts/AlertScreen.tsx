
import { Alert, Text, View } from 'react-native'
import prompt from 'react-native-prompt-android';
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Buttom } from '../../components/ui/Button'
import { showPrompt } from '../../../config/theme/adapters/promt.adapter';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {

	const {isDark} = useContext(ThemeContext);
	// El cambio de tema no funciona para android, tendriamos que buscr otro paquete

	const createTwoButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		],
		{
			userInterfaceStyle: isDark ? 'dark' : 'light'
		}
	);


	const createThreeButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Ask me later',
				onPress: () => console.log('Ask me later pressed'),
			},
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		]
		,{
			// Solo funciona en adroid y hace que si toco fuera de la alerta se ceirra
			cancelable:true,
			userInterfaceStyle: isDark ? 'dark' : 'light'
		});



		
		// const showPrompt = () => {
			
		// 	// !Codigo nativo
		// 	// No funciona para android

		// 	// Alert.prompt(
		// 	// 	'¿Correo electronico?',
		// 	// 	'Enim comodo ut amet esse aliqua.',
		// 	// 	(valor: string) => console.log({valor}),
		// 	// 	'secure-text',
		// 	// 	'Soy el valor por defecto',
		// 	// 	'numbrer-pad'
		// 	// )

		// 	// !con paquete
		// 	prompt(
		// 		'Enter password',
		// 		'Enter your password to claim your $1.5B in lottery winnings',
		// 		[
		// 		 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		// 		 {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
		// 		],
		// 		{
		// 				type: 'secure-text',
		// 				cancelable: false,
		// 				defaultValue: 'test',
		// 				placeholder: 'placeholder'
		// 		}
		// );
		// }

		const onShowPrompt = () => {

			showPrompt({
				title:'Enter password',
				subTitle:'Enter your password to claim your $1.5B in lottery winnings',
				buttons:[
					{
						text: 'Ok',
						onPress: () => console.log('Ok')
					}
				],
				placeholder: 'Placeholder'
			})
		}


	return (
		<CustomView style={globalStyles.globalMargin}>
			<Title safe text='Alertas' />

			<Buttom
				text='Alerta - 2 Botones'
				onPress={createTwoButtonAlert}
			/>
			<View style={{ height: 10 }} />
			<Buttom
				text='Alerta - 3 Botones'
				onPress={createThreeButtonAlert}
			/>
			<View style={{ height: 10 }} />
			<Buttom
				text='Promt - Input'
				onPress={onShowPrompt}
			/>

		</CustomView>
	)
}
