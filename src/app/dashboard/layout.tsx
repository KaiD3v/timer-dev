import { Container } from "../../components/Container";
import { DashboardHeader } from "./components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <DashboardHeader />
      {children}
    </Container>
  );
}
