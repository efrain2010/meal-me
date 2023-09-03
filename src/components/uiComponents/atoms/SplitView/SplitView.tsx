import React, { FC } from "react";
import Styled, { css } from "styled-components";

type SplitMeasures = "15:85";

interface Props {
  split: SplitMeasures;
  startComponent: React.ReactNode;
  endComponent: React.ReactNode;
  startComponentAs?: React.ElementType;
  endComponentAs?: React.ElementType;
}

export const SplitView: FC<Props> = ({
  split,
  startComponent,
  endComponent,
  startComponentAs,
  endComponentAs,
}) => {
  const [startSize, endSize] = split.split(":");

  return (
    <MainSection className="flex space-x-4">
      <SplitSection className="flex" as={startComponentAs} $width={Number(startSize)}>
        {startComponent}
      </SplitSection>
      <SplitSection className="flex" as={endComponentAs} $width={Number(endSize)}>
        {endComponent}
      </SplitSection>
    </MainSection>
  );
};

const MainSection = Styled.section`
   display: flex;
   flex-direction: row;
`;

const SplitSection = Styled.section<{ $width: number }>`
   ${({ $width }) => css`
     flex-basis: ${$width}%;
   `};  
`;
