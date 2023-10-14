export const Results = ({ score, questionsFiltered, onReset }) => {
  return (
    <div className="flex flex-col justify-evenly items-center shadow-xl rounded-lg p-10 w-[400px] h-[600px] ml-2 mr-2 mt-10 border border-solid gap-5">
      <h1 className="text-3xl font-bold">Resultados</h1>
      <span className="text-8xl">🏆</span>
      <div className="flex flex-col gap-5 text-center text-lg font-bold">
        <span>Acertaste</span>
        <span className="font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse">
          {((score / questionsFiltered.length) * 100).toFixed(0)}%
        </span>
        <span>
          de las preguntas ({score} de {questionsFiltered.length})
        </span>
      </div>
      <button
        className="border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900"
        onClick={onReset}
      >
        Vamos de nuevo
      </button>
    </div>
  );
};
