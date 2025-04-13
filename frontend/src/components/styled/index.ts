import styled from '@emotion/styled';
import { 
  space, 
  layout, 
  color, 
  typography, 
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  FlexboxProps,
  MarginProps,
  BackgroundProps
} from 'styled-system';

interface BaseProps extends SpaceProps, LayoutProps {}
interface TextProps extends BaseProps, TypographyProps {}
interface FlexProps extends BaseProps, FlexboxProps {}
interface ButtonProps extends SpaceProps, LayoutProps, ColorProps, MarginProps, BackgroundProps {
  bg?: string;
}

export const Container = styled('div')<BaseProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  ${space}
  ${layout}
`;

export const Grid = styled('div')<BaseProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  ${space}
  ${layout}
`;

export const Card = styled('div')<BaseProps>`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ${space}
  ${layout}
`;

export const Button = styled('button')<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: ${({ bg }) => bg || '#007bff'};
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: ${({ bg }) => bg || '#0056b3'};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  ${space}
  ${layout}
  ${color}
`;

export const Input = styled('input')<BaseProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  ${space}
  ${layout}
`;

export const Select = styled('select')<BaseProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  ${space}
  ${layout}
`;

export const Heading = styled('h1')<TextProps>`
  color: #333;
  margin-bottom: 20px;
  ${typography}
  ${space}
`;

export const Text = styled('p')<TextProps>`
  color: #666;
  ${typography}
  ${space}
`;

export const Flex = styled('div')<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`; 