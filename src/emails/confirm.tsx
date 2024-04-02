import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";

  
  interface ConfirmEmailProps {
    userFirstname: string;
    activationURL: string;
  }
  
 export const ConfirmEmail = ({
    userFirstname,
    activationURL
  }: ConfirmEmailProps) => (
    <Html>
      <Head />
      <Preview>
        Welcome to BrainBoost - Your Ultimate Quiz Creation and Answering Platform
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src='https://i.imgur.com/OiWfhfc.png'
            width="190"
            height="100"
            alt="Koala"
            style={logo}
          />
          <Text style={greetings}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
         Please confirm your account with the link below
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={activationURL}>
              Confirm email
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Brainboost  team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
          </Text>
        </Container>
      </Body>
    </Html>
  );
  

  ConfirmEmail.PreviewProps = {
    userFirstname: "Alan",
    activationURL: 'http://localhost:3000'
  } as ConfirmEmailProps;

  export default ConfirmEmail;

  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const greetings = {
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: 'bold'
  }
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#047D99",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
