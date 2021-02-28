import styled from '@emotion/styled';

export const Row = styled('div')(
    { 
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-1%', // pour annuler les margins des cards et donc émuler un flex gap
    }
);
