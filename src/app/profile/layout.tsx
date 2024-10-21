import Link from "next/link";
import { Container } from "../../components/Container";

export default function ProfilePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
