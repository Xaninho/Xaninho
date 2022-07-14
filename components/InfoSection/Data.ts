
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
    img: './images/developer-activity.svg',
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const HomeObjTwo : HomeObject = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions witout getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: './images/next-js.svg',
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true
}

export const HomeObjThree : HomeObject = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions witout getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: './images/undraw_heatmap_uyye.svg',
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}