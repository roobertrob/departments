interface InputProps {
    placeholder: string,
    valor?: any,
    obrigatorio?: boolean,
    tipo?: 'search',
    valorAlterado?: (novoValor: any) => void

}
export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col mb-2">
            <input type={props.tipo ?? 'text'}
                placeholder={props.placeholder}
                value={props.valor}
                onChange={e => props.valorAlterado?.(e.target.value)}
                required={props.obrigatorio}
                className={`px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-400 focus:outline-none focus:bg-white`} />
        </div>
    )
}