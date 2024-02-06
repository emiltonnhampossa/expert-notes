import logo from './assets/Logo_nlw_escuro.svg'
import NewNoteCard from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="nlw-expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px] ">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus ducimus quis alias nobis, dolores soluta corrupti non perspiciatis hic cum corporis odio error rerum numquam! Harum perferendis ea iste!',
          }}
        />
      </div>
    </div>
  )
}
