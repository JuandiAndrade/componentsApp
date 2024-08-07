
import prompt from 'react-native-prompt-android';


interface Options {

    title: string,
    subTitle: string,
    buttons?: PromptButton[],
    promptType?: 'plain-text' | 'secure-text',
    placeholder?: string,
    defaultValue?: string, 

}

interface PromptButton {
    text: string,
    onPress: () => void,
    style?: "cancel" | "default" | "destructive"
}

export const showPrompt = ({ 
    title,
    subTitle,
    buttons,
    promptType = 'plain-text',
    placeholder, 
    defaultValue,
}: Options) => {

    prompt(
        title,
        subTitle,
        // 'Enter password',
        // 'Enter your password to claim your $1.5B in lottery winnings',
        buttons,
        // [
        //     { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        //     { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
        // ],
        {
            type: promptType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder
        }
    );
}