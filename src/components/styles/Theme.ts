
export type Theme = {
    colors: {
        header: string;
        footer: string,
        body: string
    },
    mobile: string
}

export interface ThemeProps {
    theme?: Theme
}

export const defaultTheme: Theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px'
}