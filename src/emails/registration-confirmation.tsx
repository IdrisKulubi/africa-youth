import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Button,
    Row,
    Column,
} from "@react-email/components";

interface RegistrationConfirmationEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    ticketType: "free" | "paid";
    category: string;
    organization?: string;
}

export default function RegistrationConfirmationEmail({
    firstName = "John",
    lastName = "Doe",
    email = "john@example.com",
    ticketType = "free",
    category = "professional",
    organization = "Example Organization",
}: RegistrationConfirmationEmailProps) {
    const previewText = `Welcome to AYBCIF 2026, ${firstName}! Your registration is confirmed.`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header with Logo */}
                    <Section style={logoSection}>
                        <Img
                            src="https://zenforwardafrica.org/africa-youth.png"
                            width="80"
                            height="80"
                            alt="AYBCIF 2026"
                            style={logo}
                        />
                    </Section>

                    {/* Main Content */}
                    <Section style={contentSection}>
                        <Heading style={heading}>
                            Registration Confirmed
                        </Heading>

                        <Text style={paragraph}>
                            Hello {firstName},
                        </Text>

                        <Text style={paragraph}>
                            Thank you for registering for the <strong>Africa Youth, Business & Climate Innovation Forum 2026</strong>.
                            We're thrilled to have you join us for this transformative event.
                        </Text>

                        {/* Event Details Card */}
                        <Section style={eventCard}>
                            <Text style={eventCardTitle}>Event Details</Text>
                            <Hr style={cardDivider} />

                            <Row style={detailRow}>
                                <Column style={detailLabel}>📅 Date</Column>
                                <Column style={detailValue}>May 28-29, 2026</Column>
                            </Row>

                            <Row style={detailRow}>
                                <Column style={detailLabel}>📍 Location</Column>
                                <Column style={detailValue}>Nairobi, Kenya</Column>
                            </Row>

                            <Row style={detailRow}>
                                <Column style={detailLabel}>🎫 Ticket Type</Column>
                                <Column style={detailValue}>
                                    {ticketType === "paid" ? "Paid Delegate" : "Free Delegate"}
                                </Column>
                            </Row>

                            <Row style={detailRow}>
                                <Column style={detailLabel}>👤 Category</Column>
                                <Column style={detailValue} className="capitalize">
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Column>
                            </Row>
                        </Section>

                        {/* Registration Summary */}
                        <Section style={summaryCard}>
                            <Text style={summaryTitle}>Your Registration</Text>
                            <Text style={summaryText}>
                                <strong>Name:</strong> {firstName} {lastName}
                            </Text>
                            <Text style={summaryText}>
                                <strong>Email:</strong> {email}
                            </Text>
                            {organization && (
                                <Text style={summaryText}>
                                    <strong>Organization:</strong> {organization}
                                </Text>
                            )}
                        </Section>

                        {/* CTA Button */}
                        <Section style={buttonSection}>
                            <Button style={button} href="https://zenforwardafrica.org/#programme">
                                View Event Programme
                            </Button>
                        </Section>

                        <Text style={paragraph}>
                            We'll send you more details closer to the event, including the venue address,
                            agenda updates, and networking opportunities.
                        </Text>

                        <Text style={paragraph}>
                            If you have any questions, feel free to reach out to us at{" "}
                            <Link href="mailto:info@zenforwardafrica.org" style={link}>
                                info@zenforwardafrica.org
                            </Link>
                        </Text>

                        <Text style={signoff}>
                            See you in Nairobi
                            <br />
                            <strong>The Zen Forward Africa Team</strong>
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Hr style={footerDivider} />

                        <Text style={footerText}>
                            Africa Youth, Business & Climate Innovation Forum 2026
                        </Text>

                        <Text style={footerLinks}>
                            <Link href="https://www.instagram.com/zen_forward_africa25" style={socialLink}>
                                Instagram
                            </Link>
                            {" • "}
                            <Link href="https://x.com/FowardZen78940" style={socialLink}>
                                Twitter
                            </Link>
                            {" • "}
                            <Link href="https://zenforwardafrica.org" style={socialLink}>
                                Website
                            </Link>
                        </Text>

                        <Text style={footerNote}>
                            © 2026 Zen Forward Africa. All rights reserved.
                            <br />
                            Nairobi, Kenya
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

// Apple-inspired styles
const main = {
    backgroundColor: "#f5f5f7",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "40px auto",
    maxWidth: "600px",
    borderRadius: "16px",
    overflow: "hidden" as const,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
};

const logoSection = {
    backgroundColor: "#1d1d1f",
    padding: "32px 0",
    textAlign: "center" as const,
};

const logo = {
    margin: "0 auto",
    borderRadius: "12px",
};

const contentSection = {
    padding: "40px 48px",
};

const heading = {
    color: "#1d1d1f",
    fontSize: "28px",
    fontWeight: "600" as const,
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    margin: "0 0 24px",
    textAlign: "center" as const,
};

const paragraph = {
    color: "#424245",
    fontSize: "16px",
    lineHeight: "1.7",
    margin: "0 0 20px",
};

const eventCard = {
    backgroundColor: "#f5f5f7",
    borderRadius: "12px",
    padding: "24px",
    margin: "24px 0",
};

const eventCardTitle = {
    color: "#1d1d1f",
    fontSize: "18px",
    fontWeight: "600" as const,
    margin: "0 0 12px",
};

const cardDivider = {
    borderColor: "#d2d2d7",
    margin: "16px 0",
};

const detailRow = {
    marginBottom: "12px",
};

const detailLabel = {
    color: "#86868b",
    fontSize: "14px",
    width: "40%",
    verticalAlign: "top" as const,
};

const detailValue = {
    color: "#1d1d1f",
    fontSize: "14px",
    fontWeight: "500" as const,
    width: "60%",
    verticalAlign: "top" as const,
};

const summaryCard = {
    backgroundColor: "#e8f5e9",
    borderRadius: "12px",
    padding: "20px 24px",
    margin: "24px 0",
    borderLeft: "4px solid #16a34a",
};

const summaryTitle = {
    color: "#166534",
    fontSize: "16px",
    fontWeight: "600" as const,
    margin: "0 0 12px",
};

const summaryText = {
    color: "#166534",
    fontSize: "14px",
    margin: "0 0 8px",
    lineHeight: "1.5",
};

const buttonSection = {
    textAlign: "center" as const,
    margin: "32px 0",
};

const button = {
    backgroundColor: "#16a34a",
    borderRadius: "24px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600" as const,
    textDecoration: "none",
    padding: "14px 32px",
    display: "inline-block",
};

const link = {
    color: "#16a34a",
    textDecoration: "underline",
};

const signoff = {
    color: "#424245",
    fontSize: "16px",
    lineHeight: "1.7",
    margin: "32px 0 0",
};

const footer = {
    padding: "0 48px 40px",
};

const footerDivider = {
    borderColor: "#e5e5e5",
    margin: "0 0 24px",
};

const footerText = {
    color: "#86868b",
    fontSize: "14px",
    textAlign: "center" as const,
    margin: "0 0 12px",
    fontWeight: "500" as const,
};

const footerLinks = {
    color: "#86868b",
    fontSize: "13px",
    textAlign: "center" as const,
    margin: "0 0 16px",
};

const socialLink = {
    color: "#16a34a",
    textDecoration: "none",
};

const footerNote = {
    color: "#aeaeb2",
    fontSize: "12px",
    textAlign: "center" as const,
    margin: "0",
    lineHeight: "1.6",
};
