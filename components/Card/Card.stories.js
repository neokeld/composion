import React from 'react';

import decorators from '../../.storybook/utils';
import { Card, CardAnchor, CardTitleContent } from './Card';
import { Box } from '../Box';

export default {
    title: 'Components/Card',
    decorators,
};

export const defaultCard = () => {
    return <Card 
        title={<CardTitleContent>Plop</CardTitleContent>}
        description="Ceci est une description" />;
};

export const cardWithTheme = () => {
    const baseTheme = {
        Card_borderRadius: '6px',
        Card_boxShadow: '0 1px 2px rgba(48, 54, 60, 0.15)',
        CardRow_padding: '10px 20px',
        CardBody_height: '168px'
    };
    return <Card
            title={<CardTitleContent theme={baseTheme}>Plop</CardTitleContent>}
            description="Ceci est une description"
            theme={baseTheme} />
};

export const customTitle = () => {
    const baseTheme = {
        Card_borderRadius: '6px',
        Card_boxShadow: '0 1px 2px rgba(48, 54, 60, 0.15)',
        CardRow_padding: '10px 20px',
        CardBody_height: '168px'
    };
    const CustomTitle = () => <Box direction="row" justify="space-between">
        <CardTitleContent theme={baseTheme}>Plop</CardTitleContent>
        <span>test</span>
    </Box>;
    return <Card
            title={<CustomTitle />}
            description="Ceci est une description"
            theme={baseTheme} />;
};

export const withRow = () => {
    const baseTheme = {
        Card_borderRadius: '6px',
        Card_boxShadow: '0 1px 2px rgba(48, 54, 60, 0.15)',
        CardRow_padding: '10px 20px',
        CardBody_height: '168px',
        Card_width: '33.3%'
    };
    return <Box direction="row" margin="-1%" wrap="true">
        <Card
            title={<CardTitleContent theme={baseTheme}>Plop</CardTitleContent>}
            description="Ceci est une description"
            theme={baseTheme} />
        <Card
            title={<CardTitleContent theme={baseTheme}>Plop2</CardTitleContent>}
            description="Cela est une autre description"
            theme={baseTheme} />
        <Card
            title={<CardTitleContent theme={baseTheme}>Plop3</CardTitleContent>}
            description="Dernière description pour terminer"
            theme={baseTheme} />
    </Box>;
};

export const combined = () => {
    const baseTheme = {
        Card_borderRadius: '6px',
        Card_boxShadow: '0 1px 2px rgba(48, 54, 60, 0.15)',
        CardRow_padding: '10px 20px',
        CardBody_height: '168px',
        Card_basis: '31%',
        Card_margin: '1%'
    };
    // Une flex-basis d'environ 1/3 du conteneurs
    // le reste de l'espace étant le gap fait avec une margin pour le support navigateur
    const CustomTitle = ({title, nbPeople=0}) => <Box direction="row" justify="space-between">
        <CardTitleContent theme={baseTheme}>{title}</CardTitleContent>
        <div>
            <span>p</span>
            <span>{nbPeople}</span>
        </div>
    </Box>;
    return <Box direction="row" margin="-1%" wrap="true">
        <CardAnchor href="#" theme={baseTheme}>
            <Card
                title={<CustomTitle title="Plop 1" nbPeople={2} />}
                description="Ceci est une description"
                theme={baseTheme} />
        </CardAnchor>
        <CardAnchor href="#" theme={baseTheme}>
            <Card
                title={<CustomTitle title="Plop 2" nbPeople={0} />}
                description="Cela est une autre description"
                theme={baseTheme} />
        </CardAnchor>
        <CardAnchor href="#" theme={baseTheme}>
            <Card
                title={<CustomTitle title="Plop 3" nbPeople={4} />}
                description="Dernière description pour terminer"
                theme={baseTheme} />
        </CardAnchor>
        <CardAnchor href="#" theme={baseTheme}>
            <Card
                title={<CustomTitle title="Plop 4" nbPeople={3} />}
                description="Description 4"
                theme={baseTheme} />
        </CardAnchor>
    </Box>;
};