import React, { FC, PropsWithChildren } from "react";
import styled, { ExecutionProps, css } from "styled-components";
import { FONT_SIZE } from "../contants";

type sizeType = keyof typeof FONT_SIZE;

export const Text: FC<
  PropsWithChildren<{ className?: string; as?: ExecutionProps["as"]; size?: sizeType }>
> = ({ className, as, children, size = "px14" }) => {
  return (
    <StyledText className={className} as={as} $size={size}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{ $size: sizeType }>`
  ${({ $size }) => css`
    font-size: ${FONT_SIZE[$size]};
  `}
`;
