import React, { SFC } from 'react'
import { FormattedPlural } from 'react-intl'
import { Text } from 'react-native'

import { FormattedPluralProps } from './types'

const NativeFormattedPlural: SFC<FormattedPluralProps> = props => (
    <FormattedPlural {...props}>
        {(localized: string) => (
            <Text style={props.textStyle}>{localized}</Text>
        )}
    </FormattedPlural>
)

export default NativeFormattedPlural
