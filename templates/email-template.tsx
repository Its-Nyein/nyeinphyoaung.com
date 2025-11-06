import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  const initials = name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio contact form</Preview>
      <Body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          backgroundColor: "#000000",
          padding: "40px 20px",
          margin: "0",
          lineHeight: "1.6",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* Header Section - Clean, minimal design aligned with app theme */}
          <Section
            style={{
              background: "rgba(59, 130, 246, 0.9)",
              padding: "32px 30px",
              textAlign: "center" as const,
              position: "relative" as const,
              boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)",
            }}
          >
            <Heading
              style={{
                margin: "0 0 12px 0",
                fontSize: "28px",
                fontWeight: "700",
                color: "#ffffff",
                letterSpacing: "-0.025em",
                lineHeight: "1.2",
              }}
            >
              New Contact Message
            </Heading>
            <Text
              style={{
                margin: "0",
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.95)",
                fontWeight: "500",
              }}
            >
              Someone reached out via your portfolio
            </Text>
          </Section>

          {/* Content Section */}
          <Section style={{ padding: "40px 30px" }}>
            {/* Greeting */}
            <Heading
              as="h2"
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "24px",
                color: "#ffffff",
                letterSpacing: "-0.025em",
              }}
            >
              Hello!
            </Heading>

            {/* Message Introduction */}
            <Text
              style={{
                marginBottom: "32px",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              You received a new message from{" "}
              <strong style={{ color: "#ffffff" }}>{name}</strong> via your
              portfolio contact form.
            </Text>

            {/* Sender Info Card */}
            <Section
              style={{
                background: "rgba(59, 130, 246, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderLeft: "4px solid rgba(59, 130, 246, 0.9)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "32px",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.1)",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse" as const,
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        width: "60px",
                        paddingRight: "16px",
                        verticalAlign: "top",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "rgba(59, 130, 246, 0.9)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#ffffff",
                          textAlign: "center" as const,
                          border: "2px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        {initials}
                      </div>
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <Heading
                        as="h3"
                        style={{
                          margin: "0 0 8px 0",
                          fontSize: "20px",
                          fontWeight: "700",
                          color: "#ffffff",
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {name}
                      </Heading>
                      <Link
                        href={`mailto:${email}`}
                        style={{
                          color: "rgba(96, 165, 250, 1)",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {email}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Message Section */}
            <Section
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "32px",
              }}
            >
              <Text
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "rgba(255, 255, 255, 0.7)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.8px",
                }}
              >
                Message
              </Text>

              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  whiteSpace: "pre-wrap" as const,
                  wordWrap: "break-word" as const,
                  margin: "0",
                }}
              >
                {message}
              </Text>
            </Section>

            {/* Action Button */}
            <Section style={{ textAlign: "center" as const }}>
              <Link
                href={`mailto:${email}?subject=Re: Your message&body=Hi ${name},%0D%0A%0D%0A`}
                style={{
                  display: "inline-block",
                  padding: "16px 32px",
                  background: "rgba(59, 130, 246, 0.9)",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  boxShadow: "0 8px 24px rgba(59, 130, 246, 0.25)",
                  letterSpacing: "0.025em",
                }}
              >
                Reply to {name.split(" ")[0]}
              </Link>
            </Section>

            {/* Alternative Link Section */}
            <Section
              style={{
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Text
                style={{
                  fontSize: "13px",
                  color: "rgba(255, 255, 255, 0.5)",
                  marginBottom: "10px",
                }}
              >
                Or copy this email address:
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  color: "rgba(96, 165, 250, 1)",
                  wordBreak: "break-all" as const,
                  margin: "0",
                }}
              >
                {email}
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "25px 30px",
              textAlign: "center" as const,
            }}
          >
            <Text
              style={{
                margin: "5px 0",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              This is an automated message from your portfolio contact form.
            </Text>
            <Text
              style={{
                margin: "5px 0",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Message received at {currentDate}
            </Text>

            <div
              style={{
                margin: "15px 0",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            />

            <Text
              style={{
                margin: "15px 0 0 0",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.4)",
              }}
            >
              © {currentYear} All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
