import React from 'react'
import styled from 'styled-components'
import { CustomDiv } from 'styles/GlobalCss'

const Input = styled.input.attrs({ type: 'checkbox' })`
margin-right: 1rem;
justify-content: center;
`

const CustomLabel = styled.label`
color: var(--input-color);
font-size: 16px;
line-height: 16.93px;
text-align: left;
font-weight: 400;
`;

export const Checkbox = ({ label, value, onChange }) => {
    return (

           <CustomDiv display="flex" justifyContent="left" alignitems="left" margin="1.5rem 0 0">
           <CustomLabel>
                <Input type="checkbox" checked={value} onChange={onChange} />
                      {label}
            </CustomLabel>
           </CustomDiv>
    )
}
