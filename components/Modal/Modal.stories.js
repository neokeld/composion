import React from 'react';

import decorators from '../../.storybook/utils';
import { Layer } from '../Layer';
import { Box } from '../Box';

import { modalProps, ModalContent } from './ModalContent';
import { Modal } from './Modal';

export default {
    title: 'Components/Modal',
    decorators,
};

export const modal = () => {
    return <>
        <Layer zIndex={21}>
            <Box align="center" width="100%" height="100%" justify="center">
                <Box width="200px" height="200px" background="#eaeaea">
                    <h1>Modal Title</h1>
                    <p>Modal Text</p>
                </Box>
            </Box>
        </Layer>
    </>;
};

export const modal2 = () => {
    return <>
        <Modal {...modalProps}>{ModalContent}</Modal>
    </>;
};
