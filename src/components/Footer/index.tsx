import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as Styled from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <span>Author Vitalii Sekreta</span>
        <div>
          <IconButton size="small">
            <Styled.IconLink href="https://t.me/jacksonSSSSSS">
              <TelegramIcon />
            </Styled.IconLink>
          </IconButton>
          <IconButton size="small">
            <Styled.IconLink href="https://github.com/rick-jackson">
              <GitHubIcon />
            </Styled.IconLink>
          </IconButton>
          <IconButton size="small">
            <Styled.IconLink href="https://www.linkedin.com/in/vitalii-sekreta-390410245/">
              <LinkedInIcon />
            </Styled.IconLink>
          </IconButton>
          <IconButton size="small">
            <Styled.IconLink href="mailto:vitaliisekreta@gmail.com">
              <EmailIcon />
            </Styled.IconLink>
          </IconButton>
        </div>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
