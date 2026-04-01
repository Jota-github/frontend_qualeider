"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Syringe, Scale, CheckCircle2 } from "lucide-react";
import { DashboardLayout } from "@/components/layout";
import { PageHeader } from "@/components/dashboard";
import { ErrorModal, SelectField } from "@/components/ui";

export default function DailyFormDemo() {
  const router = useRouter();
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Animais simulados para a demonstração
  const demoAnimals = [
    { id: 1, name: "Estrela", brinco: "045" },
    { id: 2, name: "Mimosa", brinco: "012" },
  ];

  const handleDemoSubmit = () => {
    setIsFinalizing(true);
    setTimeout(() => {
      setIsFinalizing(false);
      setModalOpen(true);
    }, 1000);
  };

  return (
    <>
      <DashboardLayout>
        <PageHeader
          title="Registro Diário de Ordenha e Sanidade"
          subtitle="Informe a pesagem em Kg e os testes de mastite"
        />

      <div className="flex-1 overflow-y-auto pb-24 p-4 space-y-6 max-w-4xl mx-auto">
        
        {demoAnimals.map((animal) => (
          <div key={animal.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* Cabeçalho do Card */}
            <div className="bg-[#1e3a29] text-white p-3 flex justify-between items-center">
                <span className="font-bold text-lg">{animal.name}</span>
                <span className="bg-white text-[#1e3a29] px-2 py-1 rounded text-xs font-bold">Nº {animal.brinco}</span>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pesagem */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                        <Scale size={16} className="text-[#d97706]" /> Pesagem (Kg)
                    </label>
                    <input 
                        type="number" 
                        placeholder="0.0" 
                        className="w-full border border-slate-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-[#d97706] focus:outline-none"
                    />
                </div>

                {/* Teste da Caneca */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                        <CheckCircle2 size={16} className="text-green-600" /> Caneca (Fundo Escuro)
                    </label>
                    <SelectField 
                        options={[
                            { value: "normal", label: "Normal (Sem Grumos)" },
                            { value: "grumos", label: "Grumos (Mastite Clínica)" }
                        ]}
                    />
                </div>

                {/* Teste CMT */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                        <Syringe size={16} className="text-purple-600" /> Teste CMT
                    </label>
                    <SelectField 
                        options={[
                            { value: "negativo", label: "Negativo" },
                            { value: "tracos", label: "Traços (+/-)" },
                            { value: "grau1", label: "Grau 1 (+)" },
                            { value: "grau2", label: "Grau 2 (++)" },
                            { value: "grau3", label: "Grau 3 (+++)" }
                        ]}
                    />
                </div>

            </div>
          </div>
        ))}

        {/* Botão Salvar */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={handleDemoSubmit}
            disabled={isFinalizing}
            className="w-full max-w-md bg-[#d97706] hover:bg-[#b45309] text-white p-4 rounded-xl shadow-lg font-bold text-lg flex justify-center items-center gap-2 transition-all"
          >
            <Save className="w-6 h-6" />
            {isFinalizing ? "Salvando Registros..." : "Finalizar Coleta Diária"}
          </button>
        </div>
      </div>
    </DashboardLayout>

    <ErrorModal
      isOpen={modalOpen}
      onClose={() => router.push("/dashboardUser")}
      title="Sucesso!"
      message="Pesagem e controles sanitários registrados no sistema."
      type="success"
    />
    </>
  );
}