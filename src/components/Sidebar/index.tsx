import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-6">
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard">Início</Link>
        <Link href="/dashboard/agenda">Agenda</Link>
        <Link href="/dashboard/pacientes">Pacientes</Link>
        <Link href="/dashboard/contatos">Contatos</Link>
        <Link href="/dashboard/funcionarios">Funcionários</Link>
        <Link href="/dashboard/fornecedores">Fornecedores</Link>
        <Link href="/dashboard/campanhas">Campanhas</Link>
        <Link href="/dashboard/despesas">Despesas</Link>
      </nav>
    </aside>
  );
}
