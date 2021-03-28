import React from 'react';

import decorators from '../../.storybook/utils';
import { Layer } from './Layer';
import { Box } from '../Box';

import mdx from './Layer.mdx';

export default {
    title: 'Components/Layer',
    decorators,
    parameters: {
        docs: { 
          page: mdx
        }
    },
};

export const defaultLayer = () => {
    return <>
        <Layer zIndex={21}>
            <Box align="center" width="100%" height="100%" justify="center">
                <Box width="200px" height="200px" background="#eaeaea" />
            </Box>
        </Layer>
        <Layer zIndex={22}>
            <Box align="center" width="100%" height="100%" justify="center">
                <Box width="50px" height="50px" background="#003061" />
            </Box>
        </Layer>
    </>;
};
