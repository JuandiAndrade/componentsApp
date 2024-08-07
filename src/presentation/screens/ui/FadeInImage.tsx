
import { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, Text, View } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
	uri: string;
	style?: StyleProp<ImageStyle>
}



export const FadeInImage = ({ uri, style }: Props) => {


	const { animatedOpacity, fadeIn } = useAnimation()
	const [isLoadin, setIsLoadin] = useState(true)


	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>

			{
				isLoadin && (
					<ActivityIndicator
						style={{ position: 'absolute' }}
						color='grey'
						size={30}
					/>
				)
			}

			<Animated.Image
				source={{ uri }}
				onLoadEnd={() => {
					fadeIn({ duration: 1000 });
					setIsLoadin(false)
				}}
				style={[style, { opacity: animatedOpacity }]}
			/>


		</View>
	)
}
