import React from 'react';

import decorators from '../../.storybook/utils';
import { Divider } from './Divider';

export default {
    title: 'Components/Divider',
    decorators,
};

export const defaultDivider = () => {
    return <Divider title="Features" />;
};
