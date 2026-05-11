"use client";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [modalAutorizacao, setModalAutorizacao] = useState(false);
  const [modalHistorico, setModalHistorico] = useState(false);
  const [modalSolicitacoes, setModalSolicitacoes] = useState(false);

  const solicitacoes = [
    {
      aluno: "Beatriz S.",
      motivo: "Passeio escolar para o museu",
      horario: "12 Mai, 08:00",
      enviadoPor: "Coordenação",
    },
  ];

  const historico = [
    {
      titulo: "Saída com Avós",
      aluno: "Lucas S.",
      responsavel: "João Avô",
      data: "Hoje, 17:30",
      status: "Agendado",
    },
    {
      titulo: "Passeio Escolar - Museu",
      aluno: "Beatriz S.",
      responsavel: "Coordenação",
      data: "12 Mai, 08:00",
      status: "Concluído",
    },
    {
      titulo: "Consulta médica",
      aluno: "Lucas S.",
      responsavel: "Mariana",
      data: "08 Mai, 14:20",
      status: "Concluído",
    },
  ];

  return (
    <main className="container">
      <aside className="sidebar">
        <h1>Main Menu</h1>
        <p>Minimalismo Acadêmico</p>

        <nav>
          <button className="menuItem active">▦ Painel</button>

          <button
            className="menuItem"
            onClick={() => setModalSolicitacoes(true)}
          >
            📄 Solicitações
          </button>

          <button className="menuItem" onClick={() => setModalHistorico(true)}>
            ↺ Histórico
          </button>
        </nav>
      </aside>

      <section className="content">
        <div className="topArea">
          <div>
            <h2>Olá, Mariana</h2>
            <p>Visão geral dos seus dependentes.</p>
          </div>

          <button
            className="addButton"
            onClick={() => setModalAutorizacao(true)}
          >
            + Autorizar Nova Saída
          </button>
        </div>

        <div className="cards">
          <div className="studentCard">
            <div className="studentTop">
              <img src="/lucas.png" alt="Foto do Lucas" />
              <div>
                <h3>Lucas S.</h3>
                <p>6º Ano B</p>
              </div>
              <span className="status green">● Na Escola</span>
            </div>

            <div className="cardFooter">
              <span>Próxima saída autorizada</span>
              <strong>Hoje, 17:30</strong>
            </div>

            <div className="yellowLine"></div>
          </div>

          <div className="studentCard">
            <div className="studentTop">
              <img src="/beatriz.png" alt="Foto da Beatriz" />
              <div>
                <h3>Beatriz S.</h3>
                <p>9º Ano A</p>
              </div>
              <span className="status gray">● Em Casa</span>
            </div>

            <div className="cardFooter">
              <span>Última saída</span>
              <strong>Ontem, 13:00</strong>
            </div>
          </div>
        </div>

        <h2 className="sectionTitle">Autorizações Recentes</h2>

        <div className="authorizations">
          <div className="authItem">
            <div className="authIcon">🚶</div>

            <div className="authInfo">
              <h4>Saída com Avós</h4>
              <p>Lucas S. • João Avô</p>
            </div>

            <div className="authDate">
              <strong>Hoje, 17:30</strong>
              <span className="pending">Agendado</span>
            </div>
          </div>

          <div className="authItem">
            <div className="authIcon">🎓</div>

            <div className="authInfo">
              <h4>Passeio Escolar - Museu</h4>
              <p>Beatriz S. • Coordenação</p>
            </div>

            <div className="authDate">
              <strong>12 Mai, 08:00</strong>
              <span>Concluído</span>
            </div>
          </div>
        </div>

        <button className="historyButton" onClick={() => setModalHistorico(true)}>
          Ver Histórico Completo
        </button>
      </section>

      {modalAutorizacao && (
        <Modal onClose={() => setModalAutorizacao(false)}>
          <h2>Nova Autorização de Saída</h2>
          <p>Preencha os dados para autorizar a dispensa do aluno.</p>

          <form className="formulario">
            <label>
              Aluno
              <select>
                <option>Lucas S. - 6º Ano B</option>
                <option>Beatriz S. - 9º Ano A</option>
              </select>
            </label>

            <label>
              Data da saída
              <input type="date" />
            </label>

            <label>
              Horário permitido
              <input type="time" />
            </label>

            <label>
              Responsável pela retirada
              <input type="text" placeholder="Ex: João Silva" />
            </label>

            <label>
              Observação
              <textarea placeholder="Ex: saída médica, compromisso familiar..." />
            </label>

            <div className="modalButtons">
              <button type="button" onClick={() => setModalAutorizacao(false)}>
                Cancelar
              </button>
              <button type="submit" className="confirmar">
                Autorizar Saída
              </button>
            </div>
          </form>
        </Modal>
      )}

      {modalHistorico && (
        <Modal onClose={() => setModalHistorico(false)}>
          <h2>Histórico de Solicitações e Saídas</h2>
          <p>Veja as últimas autorizações, solicitações e dispensas registradas.</p>

          <div className="listaModal">
            {historico.map((item, index) => (
              <div className="itemModal" key={index}>
                <div>
                  <h4>{item.titulo}</h4>
                  <p>
                    {item.aluno} • {item.responsavel}
                  </p>
                </div>

                <div className="itemDireita">
                  <strong>{item.data}</strong>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {modalSolicitacoes && (
        <Modal onClose={() => setModalSolicitacoes(false)}>
          <h2>Solicitações da Escola</h2>
          <p>Aqui aparecem pedidos enviados pela escola para saída dos alunos.</p>

          {solicitacoes.length > 0 ? (
            <div className="listaModal">
              {solicitacoes.map((item, index) => (
                <div className="solicitacaoCard" key={index}>
                  <h4>{item.motivo}</h4>
                  <p>
                    <strong>Aluno:</strong> {item.aluno}
                  </p>
                  <p>
                    <strong>Horário:</strong> {item.horario}
                  </p>
                  <p>
                    <strong>Enviado por:</strong> {item.enviadoPor}
                  </p>

                  <div className="botoesSolicitacao">
                    <button className="negar">Recusar</button>
                    <button className="aceitar">Aceitar</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="semSolicitacoes">
              <h3>Sem solicitações no momento</h3>
              <p>A escola ainda não enviou nenhuma solicitação de saída.</p>
            </div>
          )}
        </Modal>
      )}
    </main>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="modalFundo">
      <div className="modal">
        <button className="fechar" onClick={onClose}>
          ×
        </button>

        {children}
      </div>
    </div>
  );
}