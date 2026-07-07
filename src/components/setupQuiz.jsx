const CATEGORIES = [
  { id: 9, name: 'General Knowledge' },
  { id: 11, name: 'Entertainment: Film' },
  { id: 12, name: 'Entertainment: Music' },
  { id: 15, name: 'Entertainment: Video Games' },
  { id: 21, name: 'Sports' }
];

const DIFFICULTIES = ['easy', 'medium', 'hard'];
const TYPES = ['multiple', 'boolean'];

function SetupQuiz({ setPhase, updateSetting, settings }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-violet-500 via-fuchsia-500 to-orange-400 flex items-center justify-center p-6 animate-fade-in">
      <div className="bg-white rounded-3xl border-4 border-violet-600 shadow-xl p-8 w-full max-w-md">
        <h1 className="font-display text-3xl font-bold text-violet-700 text-center mb-6">
          Setup Quiz 🎯
        </h1>

        <label className="block text-sm font-semibold text-gray-600 mb-1">Kategori</label>
        <select
          value={settings.category}
          onChange={(e) => updateSetting("category", e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl border-2 border-violet-200 focus:border-violet-500 outline-none font-medium"
        >
          <option value="">Pilih kategori</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <label className="block text-sm font-semibold text-gray-600 mb-1">Tingkat Kesulitan</label>
        <select
          value={settings.difficulty}
          onChange={(e) => updateSetting("difficulty", e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-xl border-2 border-violet-200 focus:border-violet-500 outline-none font-medium capitalize"
        >
          {DIFFICULTIES.map((diff) => (
            <option key={diff} value={diff}>{diff}</option>
          ))}
        </select>

        <label className="block text-sm font-semibold text-gray-600 mb-1">Tipe Soal</label>
        <select
          value={settings.type}
          onChange={(e) => updateSetting("type", e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-xl border-2 border-violet-200 focus:border-violet-500 outline-none font-medium"
        >
          {TYPES.map((type) => (
            <option key={type} value={type}>{type === "multiple" ? "Pilihan Ganda" : "Benar/Salah"}</option>
          ))}
        </select>

        <button
          onClick={() => setPhase("loading")}
          className="w-full bg-violet-600 hover:bg-violet-700 active:scale-95 transition text-white font-bold text-lg py-3 rounded-xl shadow-md"
        >
          Mulai Quiz 🚀
        </button>
      </div>
    </div>
  );
}

export default SetupQuiz;