import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/63623829?s=460&u=9f6eb118ecd681b5d3ef99fed1c999f0164152ef&v=4.com/account" alt="Rafael Rebel"/>
                <div>
                    <strong>Rafael Rebel</strong>
                    <span>Engenharia</span>
                </div>
            </header>

            <p>
                Engenheiro mecânico, cursando engenharia de computação.
                <br /><br />
                Procurando seu lugar no mercado de trabalho. Vê seu trabalho na Aurea como uma oportunidade de se desenvolver profissionalmente e alcançar seus objetivos.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato 
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;