import styled from 'styled-components';


export const FormContacts = styled.form`
   width: 600px;
    display: flex;
    flex-direction: column;
    padding: ${p => p.theme.space[4]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    margin-bottom: ${p => p.theme.space[2]}px;
   
`;
 
export const FormInput = styled.input`
 line-height:${p => p.theme.space[2]}px;

    height: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[4]}px;
   border: ${p => p.theme.borders.normal};
   border-radius: ${p => p.theme.radii.normal};
   font-size: ${p => p.theme.fontSize.m}px;
  
    font: inherit;
    line-height: $line-height;
    letter-spacing: 0.01em;

    resize: none;
    margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Label = styled.label`
 margin-bottom: ${p => p.theme.space[4]}px;
 font-family: ${p => p.theme.fonts.dody};
  font-size: ${p => p.theme.fontSize.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;