import { ReactNode } from "react";
import styled from "styled-components";

const Blockquote = ({ children }: { children: ReactNode }) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};

const StyledBlockquote = styled.blockquote`
  font-size: 0.875rem;
  font-style: italic;
  margin-bottom: 16px;
  padding-left: 16px;
  color: ${(p) => p.theme.blockquoteColor};
  border-left: 3px solid ${(p) => p.theme.blockquoteColor};
  transition: all var(--base-timing) ease-in-out;

  p {
    padding-bottom: 0px;
  }
`;

export default Blockquote;