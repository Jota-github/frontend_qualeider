// Colocamos os dados FORA da função para que o React não recrie as listas em loop
const today = new Date().toISOString();

const MOCK_ANIMALS = [
  { id: 1, name: "Mimosa", age: 4, animalType: "Vaca", status: "Ativo" },
  { id: 2, name: "Estrela", age: 2, animalType: "Novilha", status: "Ativo" }
];

const MOCK_COLLECTIONS = [
  { id: 1, collectionDate: today, quantity: 25, numOrdens: 2, numLactation: 1.5, rationProvided: true },
  { id: 2, collectionDate: today, quantity: 18, numOrdens: 2, numLactation: 1.2, rationProvided: false }
];

const MOCK_INVITES: any[] = [];

export function useUserDashboard(userId: number | null) {
  return {
    animals: MOCK_ANIMALS,
    collections: MOCK_COLLECTIONS,
    invites: MOCK_INVITES,
    isLoading: false,
  };
}