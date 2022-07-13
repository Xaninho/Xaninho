import developerActivity from '../../images/svg-1.svg';

type HomeObject = {
    id?: string;
    lightBg?: boolean;
    lightText?: boolean;
    lightTextDesc?: boolean;
    topLine?: string;
    headline?: string;
    description?: string;
    buttonLabel?: string;
    imgStart?: boolean;
    img?: any;
    alt?: string;
    dark?: boolean;
    primary?: true;
    darkText?: boolean;
}

export const HomeObjOne : HomeObject = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions witout getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../public/favicon.ico').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}