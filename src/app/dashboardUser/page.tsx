"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/layout";
import { PageHeader } from "@/components/dashboard";
import { MetricCard, EmptyState } from "@/components/ui";
import { Activity, Milk, Cat, AlertTriangle, Scale, ShieldAlert, UserSquare2 } from "lucide-react";
import dynamic from "next/dynamic";
import { ICON_SIZES } from "@/constants/ui";

const AnimalDistributionChart = dynamic(() => import("@/components/dashboard/AnimalDistributionChart"), { ssr: false });
const MilkLast7DaysChart = dynamic(() => import("@/components/dashboard/MilkLast7DaysChart"), { ssr: false });

export default function DashboardUser() {
  // SIMULAÇÃO DE PERFIL (Vaqueiro vs Gestor)
  const [activeProfile, setActiveProfile] = useState<"vaqueiro" | "gestor">("gestor");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center pr-8">
        <PageHeader
          title={activeProfile === "gestor" ? "Visão Estratégica (Gestor)" : "Painel Operacional (Vaqueiro)"}
          subtitle="Fazenda Esperança"
        />
        
        {/* Toggle de Perfil para Demonstração */}
        <div className="flex items-center bg-white p-1 rounded-lg shadow-sm border border-slate-200">
          <button
            onClick={() => setActiveProfile("vaqueiro")}
            className={`px-4 py-2 text-sm font-bold rounded-md flex items-center gap-2 transition-all ${activeProfile === "vaqueiro" ? "bg-[#d97706] text-white" : "text-slate-500 hover:bg-slate-100"}`}
          >
            <UserSquare2 size={16} /> Vaqueiro
          </button>
          <button
            onClick={() => setActiveProfile("gestor")}
            className={`px-4 py-2 text-sm font-bold rounded-md flex items-center gap-2 transition-all ${activeProfile === "gestor" ? "bg-[#1e3a29] text-white" : "text-slate-500 hover:bg-slate-100"}`}
          >
            <Activity size={16} /> Gestor (Prof. Paulo)
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">

        {/* ALERTAS SANITÁRIOS (Sempre visível para ambos para controle rápido) */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="text-red-600 w-6 h-6" />
            <h3 className="text-lg font-bold text-red-800">Alertas Sanitários e Manejo</h3>
          </div>
          <ul className="space-y-2 mt-3">
            <li className="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-red-100">
              <span className="font-semibold text-slate-700">🐄 Matriz 045 (Estrela)</span>
              <span className="text-red-600 font-bold text-sm bg-red-100 px-3 py-1 rounded-full">Suspeita de Mastite (CMT Traços)</span>
            </li>
            <li className="flex items-center justify-between bg-white p-3 rounded shadow-sm border border-amber-100">
              <span className="font-semibold text-slate-700">🐄 Matriz 012 (Mimosa)</span>
              <span className="text-amber-600 font-bold text-sm bg-amber-100 px-3 py-1 rounded-full">Período Seco Iniciado</span>
            </li>
          </ul>
        </div>

        {/* VISÃO DO VAQUEIRO (Foco no operacional do dia) */}
        {activeProfile === "vaqueiro" && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <MetricCard
                icon={<Activity size={ICON_SIZES.MD} />}
                iconColor="text-[#d97706]"
                iconBgColor="bg-amber-50"
                borderColor="border-[#d97706]"
                title="Tarefas de Ordenha Hoje"
                value="28 / 30"
                trend="Concluídas"
              />
              <MetricCard
                icon={<Scale size={ICON_SIZES.MD} />}
                iconColor="text-[#1e3a29]"
                iconBgColor="bg-green-50"
                borderColor="border-[#1e3a29]"
                title="Pesagem de Hoje"
                value="450"
                unit="Kg"
              />
          </section>
        )}

        {/* VISÃO DO GESTOR (Foco em médias e dados agregados) */}
        {activeProfile === "gestor" && (
          <>
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  icon={<Cat size={ICON_SIZES.MD} />}
                  iconColor="text-green-600"
                  iconBgColor="bg-green-50"
                  borderColor="border-[#1e3a29]"
                  title="Total de Matrizes"
                  value={45}
                />
                <MetricCard
                  icon={<Scale size={ICON_SIZES.MD} />}
                  iconColor="text-blue-600"
                  iconBgColor="bg-blue-50"
                  borderColor="border-[#1e3a29]"
                  title="Produção Total (Mês)"
                  value="12.450"
                  unit="Kg"
                />
                <MetricCard
                  icon={<Milk size={ICON_SIZES.MD} />}
                  iconColor="text-purple-600"
                  iconBgColor="bg-purple-50"
                  borderColor="border-[#d97706]"
                  title="Média por Vaca"
                  value="15.2"
                  unit="Kg/dia"
                />
                <MetricCard
                  icon={<AlertTriangle size={ICON_SIZES.MD} />}
                  iconColor="text-red-600"
                  iconBgColor="bg-red-50"
                  borderColor="border-red-500"
                  title="Taxa de Mastite"
                  value="4.5%"
                  trend="Controlado"
                />
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 opacity-75 pointer-events-none">
                {/* Deixando os gráficos visíveis mas inativos para a demo fluir melhor sem os dados reais */}
                <div className="bg-slate-100 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                    <p className="text-slate-500 font-bold">Gráfico de Distribuição do Rebanho</p>
                </div>
                <div className="bg-slate-100 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                    <p className="text-slate-500 font-bold">Curva de Lactação (Kg)</p>
                </div>
            </section>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}