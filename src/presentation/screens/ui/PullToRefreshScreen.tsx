
import { RefreshControl, Text, View } from 'react-native'
import { Title } from '../../components/ui/Title'
import { CustomView } from '../../components/ui/CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useContext, useState } from 'react'
import { colors, globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {

	const {colors} = useContext(ThemeContext);

	const [isRefreshing, setIsRefreshing] = useState(false)

	const { top } = useSafeAreaInsets();

	const onRefresh = () => {
		setIsRefreshing(true)
		setTimeout(() => {
			setIsRefreshing(false);
		}, 4000)
	}

	return (
		<ScrollView
			refreshControl={
				<RefreshControl
					refreshing={isRefreshing}
					progressViewOffset={top}
					colors={[colors.primary, 'red', 'orange', 'green']}
					onRefresh={onRefresh}
					progressBackgroundColor={colors.cardBackground}
					tintColor={colors.primary}
				/>}

			style={[globalStyles.mainContainer, globalStyles.globalMargin]}
		>

			<Title text='Pull to refresh' safe />
		</ScrollView>
	)
}
