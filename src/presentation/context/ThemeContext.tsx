import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkColors, lightColors, ThemeColors } from '../../config/theme/theme';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';


type ThemeColor = 'light' | 'dark';


interface ThemeContextProps {
	currentTheme: ThemeColor;
	colors: ThemeColors;
	isDark: boolean;

	// me va a ayudar a determinar el color
	setTheme: (theme: ThemeColor) => void
}


// esto nos va a ayudar a saber que propiedades tiene y tambien nos va a obligar a que nuestro proveedor tiene que implementar esos colores y funcionalidades 
export const ThemeContext = createContext({} as ThemeContextProps);



// el ThemeProvider es el que va a proveher la informacion sobre el estado actual de nuestro contexto
export const ThemeProvider = ({ children }: PropsWithChildren) => {

	// Cambio de tema basado en el sistema operativo, nos lo ofrece React
	const colorScheme = useColorScheme();

	const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

	useEffect(() => {
		if (colorScheme === 'dark') {
			setCurrentTheme('dark')
		} else {
			setCurrentTheme('light')
		}

	}, [colorScheme])



	// En el caso de que asi no nos funcione cambiarlo desde el sistema operativo:
	// Tambien el appState como me dice background o activa , puedo saber si una persona esta en la App o no
	// useEffect(() => {
	// 	const subscription = AppState.addEventListener('change', nextAppState => {
	// 		// console.log(nextAppState)
	// 		const colorScheme = Appearance.getColorScheme();
	// 		setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light')
	// 	})
	// 	return () => {
	// 		subscription.remove();
	// 	};
	// }, []);


	const isDark = currentTheme === 'dark';
	const colors = isDark ? darkColors : lightColors;


	const setTheme = (theme: ThemeColor) => {
		setCurrentTheme(theme);
	}

	return (
		// <ThemeContext.Provider
		// 	value={{
		// 		currentTheme: currentTheme,
		// 		colors: (currentTheme === 'light' ? lightColors : darkColors),
		// 		setTheme: setTheme,
		// 		isDark: (currentTheme === 'light' ? false : true),
		// 	}}
		// >
		// 	{children}
		// </ThemeContext.Provider>



		<NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
			<ThemeContext.Provider
				value={{
					currentTheme: currentTheme,
					colors: colors,
					isDark: isDark,
					setTheme: setTheme,
				}}
			>
				{children}
			</ThemeContext.Provider>
		</NavigationContainer>
	)
}