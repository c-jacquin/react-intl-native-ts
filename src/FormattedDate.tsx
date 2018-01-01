import React, { SFC } from 'react'
import { FormattedDate } from 'react-intl'
import { Text } from 'react-native'

import { FormattedDateProps } from './types'

const NativeFormattedDate: SFC<FormattedDateProps> = props => (
    <FormattedDate {...props}>
        {(localized: string) => (
            <Text style={props.style}>{localized}</Text>
        )}
    </FormattedDate>
)

export default NativeFormattedDate
