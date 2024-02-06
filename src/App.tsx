import logo from './assets/Logo_nlw_escuro.svg'

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
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em audio que sera convertida em texto.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">ha 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            inventore, aliquid reprehenderit quod voluptas aut officiis maxime
            eius repellendus incidunt nemo necessitatibus tempora deserunt
            nesciunt vero sit recusandae qui quisquam.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to to-black/0 pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">ha 4 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            doloribus ducimus quis alias nobis, dolores soluta corrupti non
            perspiciatis hic cum corporis odio error rerum numquam! Harum
            perferendis ea iste!
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to to-black/0 pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">ha 5 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cum accusamus animi error necessitatibus a nulla vero officiis
            rerum? Quisquam rem ipsam fuga expedita repellendus placeat
            nesciunt, cum beatae consequatur.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to to-black/0 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
