import React, { SFC } from 'react'
import { FormattedTime } from 'react-intl'
import { Text } from 'react-native'

import { FormattedTimeProps } from './types'

const NativeFormattedTime: SFC<FormattedTimeProps> = props => (
    <FormattedTime {...props}>
        {(localized: string) => (
            <Text style={props.style}>{localized}</Text>
        )}
    </FormattedTime>
)

export default NativeFormattedTime
