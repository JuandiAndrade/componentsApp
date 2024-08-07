
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Card } from '../../components/ui/Card'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'
import { Platform } from 'react-native'

export const TextInputScreen = () => {

	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: ''
	})

	return (
		<KeyboardAvoidingView
			// KeyboardAvoidingView lo implementamos solo para IOS porque sino no se comporta como en android (que se oculta el teclado cuando toco la pantalla)
			behavior={Platform.OS === 'ios' ? 'padding' : undefined} >

			<ScrollView>

				<CustomView margin>
					<Title text='Text Inputs' safe />

					<Card>
						<TextInput
							style={globalStyles.input}
							placeholder='Nombre Completo'
							autoCapitalize={'words'}
							autoCorrect={false}
							onChangeText={value => setForm({ ...form, name: value })}
						/>
						<TextInput
							style={globalStyles.input}
							placeholder='Correo electrónico'
							autoCapitalize={'none'}
							autoCorrect={false}
							keyboardType='email-address'
							onChangeText={value => setForm({ ...form, email: value })}
						/>
						<TextInput
							style={globalStyles.input}
							placeholder='Teléfono'
							keyboardType='phone-pad'
							onChangeText={value => setForm({ ...form, phone: value })}
						/>
					</Card>

					<View style={{ height: 10 }} />

					<Card>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
						<Text>{JSON.stringify(form, null, 2)}</Text>
					</Card>

					<View style={{ height: 20 }} />

					<Card>
						<TextInput
							style={globalStyles.input}
							placeholder='Teléfono'
							keyboardType='phone-pad'
							onChangeText={value => setForm({ ...form, phone: value })}
						/>
					</Card>

				</CustomView>
				<View style={{ height: 20 }} />

			</ScrollView>
		</KeyboardAvoidingView>
	)
}
