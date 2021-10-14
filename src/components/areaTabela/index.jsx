import React from 'react';
import './style.css'
import {Itens} from '../../scripts/itens/itens'

export const AreaTabela = () => {
    return(
        <div className="container-valor">
            <div className="valor-renda">
                <div className="item-topo">
                    RENDA
                </div>
                <div className="item-modificar">
                    <div className="item-descricao">
                    Salario
                    </div>
                    <div className="item-dinheiro">
                    {Itens.map( e => e.data)}
                    </div>
                </div>
            </div>
            <div className="valor-gastos">
                <div className="item-topo">
                    CUSTO
                </div>
                <div className="item-modificar">
                    <div className="item-descricao">
                    Super Market
                    </div>
                    <div className="item-dinheiro">
                    - R$ 550,00
                    </div>
                </div>
            </div>
        </div>
    )
}