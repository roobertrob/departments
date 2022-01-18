interface InputProps {
    label: string,
    valor: any,
    obrigatorio?: boolean,
    tipo?: 'text' | 'email' | 'password',
    naoRenderiza?: boolean
    valorAlterado: (novoValor: any) => void
}
export default function Input(props: InputProps) {
   return props.naoRenderiza? null : (
        <div className="flex flex-col mt-3">
            <label>{props.label}</label>
            <input type={props.tipo ?? 'text'}
                    value={props.valor}
                    onChange={e => props.valorAlterado?.(e.target.value)}
                    required={props.obrigatorio}
                    className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-400 focus:outline-none focus:bg-white`} />
        </div>
    )
}