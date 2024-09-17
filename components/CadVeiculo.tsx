import React from 'react'

const CadVeiculo = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 max-h-screen'>
        <div className='h-40'>

        </div>
        <h1 className='text-4xl font-bold mt-10'>Ajuste de Veiculos:</h1>
        <div className='flex flex-col items-center justify-center'>
        <form className='flex flex-col text-3xl p-9 items-center justify-center'>
            <label className="text-xl font-semibold mt-8">Modelo do carro:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type='text' placeholder="Jetta" ></input>
            <label className="text-xl font-semibold mt-8">Marca do carro:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type='text' placeholder="BMW" ></input>
            <label className="text-xl font-semibold mt-8">Ano do carro:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type='text' placeholder="2022" ></input>
            <label className="text-xl font-semibold mt-8">Placa do carro:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type='text' placeholder="YPQ567" ></input>
            <label className="text-xl font-semibold mt-8">Operação que deseja realizar:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type='text' placeholder="Cadastrar ou excluir" ></input>
             
             <button type="submit" className="w-44 h-10 mt-10 bg-blue-800 hover:bg-blue-600
            font-semibold text-xl text-white rounded-full mb-8">
                Enviar
            </button>
          </form>
          </div>
    </div>
  )
}

export default CadVeiculo