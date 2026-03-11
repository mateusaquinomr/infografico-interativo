import { getBens, deleteBem } from "../../bens/services/bensService"

export default function AdminBens() {
    const bens = getBens()

    return (
        <div style={{ padding: 40 }}>
            <h1>Administração de Bens</h1>

            {bens.map((bem) => (
                <div key={bem.id} style={{ marginBottom: 10 }}>

                    {bem.title}

                    <button

                        onClick={() => deleteBem(bem.id.toString())}
                        style={{ marginLeft: 10 }}
                    >
                        Excluir
                    </button>
                </div>
            ))}
        </div>
    )
}