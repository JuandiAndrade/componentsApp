
import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Navigator } from './presentation/navigator/Navigatior';
import { PropsWithChildren, useContext } from 'react';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';


// Lo que hicimos al final es que mi use context pueda ser accedido en la primera parte para poder determinarlo 



//theme--> necesito envolver mi aplicacion en un proveedor para que pueda tener acceso a ese tema
// colocariamos todos los elementos (provider) para mantenerlo organizado
// const AppState = ({ children }: PropsWithChildren) => {
// ! ya no lo ocupamos porque lo simplificamos en ThemeContext
// const AppNavigation = ({ children }: PropsWithChildren) => {


// 	const { isDark } = useContext(ThemeContext);

// 	return (
// 		// Tenemos que asegurarnos de que ThemeProvider lo importemos de nuestro contexto y no de react native 
// 		// <NavigationContainer theme={DarkTheme}>
// 		// 	<ThemeProvider>
// 		// 		{children}
// 		// 	</ThemeProvider>
// 		// </NavigationContainer>
// 		<NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>

// 			{children}

// 		</NavigationContainer>

// 	)
// }


// const AppTheme = ({ children }: PropsWithChildren) => {

// 	return (
// 		<ThemeProvider>
// 			<AppNavigation>
// 				{children}
// 			</AppNavigation>
// 		</ThemeProvider>
// 	)

// }


// export const ComponentApp = () => {
// 	return (
// 		// <NavigationContainer>
// 		// 	<Navigator />
// 		// </NavigationContainer>
// 		<AppState>
// 			<Navigator />
// 		</AppState>
// 	)
// }

export const ComponentApp = () => {
	return (
		// <NavigationContainer>
		// 	<Navigator />
		// </NavigationContainer>



		// <AppTheme>
		// 	<Navigator />
		// </AppTheme>


		<ThemeProvider>
			<Navigator />
		</ThemeProvider>
	)
}
