import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Form = styled.form`
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin: 0 auto;
`;
export const Input = styled.input`
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`;

export const Error = styled.span`
  font-size: 14px;
  color: red;
`;
