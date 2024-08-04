import english from './en.json';
import german from './de.json';

const LANG = {
	
    GERMAN: 'de',
    ENGLISH: 'en',
};

export const getI18N = ({
	currentLocale = 'de',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.GERMAN) return {...english, ...german};
	return english;
};