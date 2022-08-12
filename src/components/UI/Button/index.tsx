import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../../../consts';

interface StyledButtonProps {
  className?: string;
  title?: string,
  br?: string
  padding?: string
  fs?: string
  fw?: string
}

const BaseButton = styled.button<StyledButtonProps>({
  color: 'red',
  cursor: 'pointer',
  '& > a': {
    textDecoration: 'none'
  },
});

const StyledButton: FC<StyledButtonProps> = ({ title, className }) => {
    return (
        <BaseButton className={className}> 
            {title}
        </BaseButton>
    )
}

export default StyledButton;

export const PrimaryButton = styled(StyledButton)`
  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 8px 26px;
  box-shadow: 15px 15px 35px rgba(226, 142, 15, 0.18);
  border-radius: 10px;
  border: none;
  background: ${props => props.theme.linear};
  @media ${device.tablet} {
    margin: 0 0 10px 10px;
    font-size: 16px;
    padding: 8px 20px;
  }
`;

export const RegisterButton = styled(StyledButton)`
  font-weight: 700;
  font-size: 20px;
  padding: 10px 36px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: ${props => props.theme.white};
  background: ${props => props.theme.linear};
  @media ${device.tablet} {
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 8px;
  }
`;

export const SiggleCreateButton = styled(StyledButton)`
  font-weight: 700;
  font-size: 20px;
  padding: 10px 36px;
  background: none;
  border-radius: 10px;
  border: 1px solid #FF8E1E;
  cursor: pointer;
  color: ${props => props.theme.white};
  @media ${device.tablet} {
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 8px;
    }
`;

export const BlogButton = styled(StyledButton)`
  color: ${props => props.theme.white};
  background: ${props => props.theme.linearBlue};
  font-weight: 700;
  font-size: 20px;
  padding: 10px 34px;
  border-radius: 10px;
  border: none;
`;