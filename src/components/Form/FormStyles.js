import styled from "styled-components";

export const FormWrapper = styled.div`
 display: flex: 
 justify-content: center;
 flex-direction: column
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 0 0 6rem;
  box-sizing: border-box;
  
  @media screen and (min-device-width: 1400px) and (max-device-width: 1600px) {
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
}

@media only screen and (min-device-width: 764px) and (max-device-width: 1199px) {
 
}

@media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    padding: 0;
}

@media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 0;
}
`;

export const Input = styled.input`
  background-color: var(--white);
  border: 1px solid var(--primary);
  height: 48px;
  padding: 0 16px;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 4px;
  font-weight: 600;
  box-sizing: border-box;
  color: var(--primary);
  font-size: 14px;
  line-height: 17.05px;
  margin-bottom: 1rem;

//   &:last-child {
//     margin-bottom: 0;
//   }

  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    line-height: 17.05px;
    font-weight: 400;
    color: var(--primary);
    opacity: 0.2;
  }

  &:focus {
    color: var(--orange);
    background-color: var(--white);
    border-color: var(--orange);
    outline: 0;
    box-shadow: none !important;
  }
  
`;

export const InputErrors = styled.div`
  width: 100%;
  font-size: 13px !important;
  color: #dc3545;
  margin: 0.5rem 0;
  padding: 0;
`;

export const IconHolder = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
margin: 0px;
padding: 0px;
position: absolute;
right: 3%;
top: 22%;
`;
