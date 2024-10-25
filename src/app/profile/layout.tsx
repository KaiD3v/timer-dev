import Link from "next/link";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";

export default function ProfilePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
