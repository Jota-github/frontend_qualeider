"use client";

import { DashboardLayout } from "@/components/layout";
import { PageHeader } from "@/components/dashboard";
import { Button } from "@/components/ui";
import { UserPlus, UserCog, Trash2, ShieldCheck, UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ManageUsers() {
  const router = useRouter();

  // Dados simulados para a demonstração
  const collaborators = [
    {
      id: 1,
      name: "Professor Paulo",
      email: "paulo@unifavip.edu.br",
      role: "Admin",
      status: "Ativo",
      lastAccess: "Hoje, 08:30"
    },
    {
      id: 2,
      name: "Vaqueiro",
      email: "operacional@fazendaesperanca.com",
      role: "Gestor",
      status: "Ativo",
      lastAccess: "Ontem, 17:45"
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pr-8">
        <PageHeader
          title="Colaboradores e Acessos"
          subtitle="Gerencie quem pode visualizar e editar os dados da fazenda"
        />
        <Button 
          variant="primary" 
          className="mt-4 md:mt-0 flex gap-2 items-center"
          onClick={() => {}} // Inativo para demo
        >
          <UserPlus size={18} /> Novo Colaborador
        </Button>
      </div>

      <div className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4 font-bold text-slate-700">Colaborador</th>
                  <th className="p-4 font-bold text-slate-700">Cargo / Permissão</th>
                  <th className="p-4 font-bold text-slate-700">Status</th>
                  <th className="p-4 font-bold text-slate-700">Último Acesso</th>
                  <th className="p-4 font-bold text-center text-slate-700">Ações</th>
                </tr>
              </thead>
              <tbody>
                {collaborators.map((user) => (
                  <tr key={user.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                          <UserCircle size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-fit ${
                        user.role === "Admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {user.role === "Admin" ? <ShieldCheck size={14} /> : <UserCog size={14} />}
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      {user.lastAccess}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Editar">
                          <UserCog size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 transition-colors" title="Remover">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mensagem informativa para a Demo */}
          <div className="p-4 bg-amber-50 border-t border-amber-100 text-amber-800 text-xs text-center">
            <strong>Modo Demonstração:</strong> As permissões de Admin permitem visualização de relatórios financeiros, enquanto Gestor foca no manejo zootécnico.
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}