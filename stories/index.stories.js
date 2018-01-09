import React from 'react';

import { storiesOf } from '@storybook/react';
import TextInput from '../client/components/common/TextInput'

storiesOf('TextInput', module).add('TextInput', () => <TextInput name="email" label="email"/>);
