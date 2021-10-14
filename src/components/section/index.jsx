import React from 'react';
import './style.css';

export const Section = () => {

    return(
        <div className="container-section">

            <select className="button-renda">
                <option value="-">-</option>
                <option value="+">+</option>
            </select>
            <div className="add-descricao">
                <input type="text" 
                className="input-text"
                value="text"
                placeholder="adicionar descrição"
                />
            </div>
            <div className="valor">
                <input type="number"
                 value="text"
                 className="input-valor"
                 placeholder="Insira valor"/>
            </div>
            <button  
            className="btn"
             >
            Confirmar
             </button>

        </div>
    );
}
