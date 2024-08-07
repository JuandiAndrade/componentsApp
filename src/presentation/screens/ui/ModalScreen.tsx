
import { Modal, Platform, Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Buttom } from '../../components/ui/Button'
import { useState } from 'react'

export const ModalScreen = () => {

	const [isVisible, setSsVisible] = useState(false);


	return (
		<CustomView margin>
			<Title text='Modal' safe />


			<Buttom
				text="Abrir Modal"
				onPress={() => setSsVisible(true)}
			/>


			<Modal
				visible={isVisible}
				animationType='slide'
			>
				<View style={{
					flex: 1,
					backgroundColor: 'rgba(0,0,0,0.1)'
				}}>
					<View style={{ paddingHorizontal: 10 }}>
						<Title text='Modal Content' safe />
					</View>

					<View style={{ flex: 1 }} />
					<Buttom
						text='Cerrar Modal'
						onPress={() => setSsVisible(false)}
						styles={{
							height: Platform.OS === 'android' ? 40 : 60,
							borderRadius: 0
						}}
					/>
				</View>
			</Modal>

		</CustomView>
	)
}
