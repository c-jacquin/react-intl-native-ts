import React, { SFC } from 'react'
import { FormattedNumber } from 'react-intl'
import { Text } from 'react-native'

import { FormattedNumberProps } from './types'

const NativeFormattedNumber: SFC<FormattedNumberProps> = ({ style, formatStyle, ...other }) => (
  <FormattedNumber {...other} style={formatStyle}>
    {(localized: string) => <Text style={style}>{localized}</Text>}
  </FormattedNumber>
)

export default NativeFormattedNumber
