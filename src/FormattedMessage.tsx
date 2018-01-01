import React, { SFC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Text } from 'react-native'

import { FormattedMessageProps } from './types'

const NativeFormattedMessage: SFC<FormattedMessageProps> = props => (
  <FormattedMessage {...props}>{(localized: string) => <Text style={props.style}>{localized}</Text>}</FormattedMessage>
)

export default NativeFormattedMessage
