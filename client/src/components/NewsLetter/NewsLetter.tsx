import {
  Button,
  Container,
  Desc,
  Input,
  InputContainer,
  Title,
} from "./NewsLetter.styles";

import SendIcon from "@mui/icons-material/Send";

const NewsLetter: React.FC = () => {
  return (
    <Container>
      <Title>Join Our Fashion Community</Title>
      <Desc>Subscribe to get exclusive offers, style tips, and first access to new collections. Unsubscribe anytime.</Desc>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
