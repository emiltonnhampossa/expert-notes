import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

export default function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col text-left bg-slate-700 p-5 gap-3">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em audio que sera convertida em texto.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md outline-none flex flex-col">
          <Dialog.Close className="absolute top-0 right-0 p-2 bg-slate-800 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              Adicionar Nota
            </span>

            <p className="text-sm leading-6 text-slate-400">
              Comece{' '}
              <button className="font-medium text-lime-400 hover:underline">
                gravando uma nota
              </button>{' '}
              em audio ou se preferir{' '}
              <button className="font-medium text-lime-400 hover:underline">
                utilize apenas texto.
              </button>
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
