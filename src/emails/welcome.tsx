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

  
  interface WelcomeEmailProps {
    userFirstname: string;
  }
  
 export const WelcomeEmail = ({
    userFirstname,
  }: WelcomeEmailProps) => (
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
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
          We are thrilled to have you on board with BrainBoost, 
          your new go-to platform for creating and answering quizzes.
           Our mission is to make learning and testing more engaging, 
           interactive, and effective for everyone.
            At BrainBoost, we believe in the power of quizzes to enhance knowledge, 
            boost confidence, and foster a love for learning. Whether you're an educator
             looking to assess your students' understanding, a team leader wanting to test
              your team's knowledge, or simply someone eager to expand their knowledge base,
               BrainBoost is designed to cater to your needs.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://getkoala.com">
              Get started
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
  

  WelcomeEmail.PreviewProps = {
    userFirstname: "Alan",
  } as WelcomeEmailProps;

  export default WelcomeEmail;

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
