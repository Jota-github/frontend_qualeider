"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/layout";
import { PageHeader } from "@/components/dashboard";
import { Button, InputField, SelectField, ErrorModal } from "@/components/ui";

export default function AddAnimal() {
  const router = useRouter();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função simulada para demonstração
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simula um carregamento de 1 segundo e meio
    setTimeout(() => {
      setIsSubmitting(false);
      setModalOpen(true);
    }, 1500);
  };

  return (
    <>
      <DashboardLayout>
        <PageHeader
          title="Cadastro Zootécnico"
          subtitle="Registre os dados detalhados e a genealogia da matriz"
        />

        <div className="p-6 md:p-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 md:p-8">
            <form onSubmit={handleDemoSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Nome do Animal *" type="text" required disabled={isSubmitting} />
                <InputField label="Nº do Brinco/Registro *" type="text" placeholder="Ex: 045" required disabled={isSubmitting} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SelectField
                  label="Tipo de Animal *"
                  required
                  disabled={isSubmitting}
                  options={[{ value: "vaca", label: "Vaca Leiteira" }, { value: "novilha", label: "Novilha" }]}
                />
                <InputField label="Raça" type="text" placeholder="Ex: Girolando" disabled={isSubmitting} />
                <InputField label="Data de Nascimento *" type="date" required disabled={isSubmitting} />
              </div>

              <div className="border-t border-slate-200 pt-6 mt-6">
                <h3 className="font-bold text-[#1e3a29] mb-4">Genealogia (Filiação)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Nome/Nº do Pai (Touro)" type="text" placeholder="Ex: Trovão FIV" disabled={isSubmitting} />
                  <InputField label="Nome/Nº da Mãe (Matriz)" type="text" placeholder="Ex: Estrela 012" disabled={isSubmitting} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? "SALVANDO FICHA..." : "CADASTRAR MATRIZ"}
                </Button>
                <Button type="button" variant="outline" fullWidth onClick={() => router.push("/manageMyAnimals")}>
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DashboardLayout>

      <ErrorModal
        isOpen={modalOpen}
        onClose={() => router.push("/manageMyAnimals")}
        title="Sucesso!"
        message="Ficha zootécnica salva com sucesso! A genealogia foi vinculada."
        type="success"
      />
    </>
  );
}