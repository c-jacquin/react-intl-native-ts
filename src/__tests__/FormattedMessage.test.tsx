import * as React from 'react'
import { Text } from 'react-native'
import * as renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'

import FormattedMessage from '../FormattedMessage'

describe('FormattedMessage', () => {
    it('should renders correctly', () => {
        const tree = renderer
            .create(
                <IntlProvider locale="en" messages={{  bar: 'foo' }}>
                    <FormattedMessage style={{}} id={'bar'} />
                </IntlProvider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
