export interface FormattedDateProps {
    style?: any
    value: any
}

export interface FormattedMessageProps {
    style?: any
    id: string
}

export interface FormattedNumberProps {
    style?: any
    localeMatcher?: any
    formatStyle?: string
    value: any
    currency?: string
    currencyDisplay?: any
    useGrouping?: boolean
    minimumIntegerDigits?: number
    minimumFractionDigits?: number
    maximumFractionDigits?: number
    minimumSignificantDigits?: number
    maximumSignificantDigits?: number
}

export interface FormattedPluralProps {
    style?: any
    value: any
    textStyle?: object
    other?: any
}

export interface FormattedTimeProps {
    style?: any
    value: any
}
