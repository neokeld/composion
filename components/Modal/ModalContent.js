import styled from '@emotion/styled';

import { CustomButton } from './CustomButton';
import { Box } from '../Box';

export const modalProps = {
	  ariaLabel: "Une modale d'ajout", //"A label describing the Modal's current content",
	  triggerText: "Submit" //"This is a button to trigger a Modal"
};

const Input = styled.input`
    width: 100%;
	padding: 11px 0;
	font-weight: 600;
    margin: 0px;
    border: medium none;
`;

const Field = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.33);
	margin-bottom: 12px;
`;

const Label = styled.label`
	margin: 6px 12px;
	font-size: 18px;
`;

const Title = styled.h1`
	font-weight: 600;
	margin-left: 24px;
`;

export const ModalContent = (
	<Box color="rgb(68, 68, 68)" padding="0 1em">
        <Title>Nouvel élément</Title>
        <form>
            <Field>
                <Label>Titre</Label>
                <Input name="title" autocomplete="off" value="" />
            </Field>
            <Field>
                <Label >Description</Label>
                <Input name="description" autocomplete="off" value="" />
            </Field>
			<Box direction="row" justify="end">
                <CustomButton type="submit">Ajouter</CustomButton>
			</Box>
        </form>
    </Box>
);