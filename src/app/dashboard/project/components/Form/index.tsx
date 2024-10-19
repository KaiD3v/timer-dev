"use client";

export function NewProjectForm() {
  return (
    <form className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mt-11">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Novo Projeto</h1>
        <p className="text-gray-600">
          Adicione um novo projeto para se dedicar!
        </p>
      </header>
      <main className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome do Projeto
          </label>
          <input
            type="text"
            placeholder="Digite o nome do seu projeto"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Categoria do Projeto
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name=""
            id=""
          >
            <option value="">Opção 1</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Criar
        </button>
      </main>
    </form>
  );
}
