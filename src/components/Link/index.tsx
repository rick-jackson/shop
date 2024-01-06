import { LinkProps } from "next/link";
import * as Styled from "./Link.styled";

const Link: React.FC<
  LinkProps & { children: React.ReactNode; style?: React.CSSProperties }
> = ({ children, style, ...props }) => {
  return (
    <Styled.Link style={style} {...props}>
      {children}
    </Styled.Link>
  );
};

export default Link;
