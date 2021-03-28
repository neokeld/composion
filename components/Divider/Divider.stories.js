import React from 'react';

import decorators from '../../.storybook/utils';
import { Divider } from './Divider';

import mdx from './Divider.mdx';

export default {
    title: 'Components/Divider',
    decorators,
    parameters: {
        docs: { 
          page: mdx
        }
    },
};

export const defaultDivider = () => {
    return <Divider title="Features" />;
};
