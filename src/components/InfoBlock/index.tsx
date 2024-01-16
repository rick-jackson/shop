import { Typography } from "@mui/material";
import * as Styled from "./InfoBlock.styled";

type InfoBlockProps = {
  icon: React.ReactNode;
  text: string;
};

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, text }) => {
  return (
    <Styled.Info>
      {icon}
      <Typography variant="h3">{text}</Typography>
    </Styled.Info>
  );
};

export default InfoBlock;
