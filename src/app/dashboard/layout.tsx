import Link from "next/link";
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
      <header className="flex justify-between pt-2">
        <h1 className="text-2xl font-semibold">Projetos</h1>
        <Link
          href={"/dashboard/project/new"}
          className="bg-blue-500 text-white font-semibold hover:bg-blue-500/80 ease-in duration-100 shadow-2xl py-1 px-6 rounded"
        >
          Adicionar
        </Link>
      </header>
      {children}
    </Container>
  );
}
