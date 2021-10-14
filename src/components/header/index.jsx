import React, {useState} from 'react';
import './style.css';
import {MesAtual} from '../../scripts/data/data';

export const Header = () => {
    const [valorRenda, setValorRenda] = useState(0)
    const [valorGastos, setValorGastos] = useState(0)
    const [valorRestante, setValorRestante] = useState(0)



    return(
        <div className="header-container">
            <div className="orcamento-mes">
                Orçamento disponível em {MesAtual}
            </div>
            <div className="valor-ganho">
                $ {valorRestante}
            </div>

            <div className="box-header color-header-renda">
                <div className="box-renda">
                    RENDA
                </div>
                <div className="box-valor">
                   $ {valorRenda}
                </div>
            </div>

            <div className="box-header color-header-gasto">
                <div className="box-gastos">
                    GASTOS
                </div>
                <div className="box-valor">
                   $ - {valorGastos}
                </div>
            </div>
        </div>
    );
}