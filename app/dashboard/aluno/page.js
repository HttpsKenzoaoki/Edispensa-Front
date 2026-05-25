"use client";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [aba, setAba] = useState("dashboard");
  const [popup, setPopup] = useState(false);

  const solicitacoes = [
    {
      data: "25/05/2026",
      motivo: "Consulta médica",
      status: "PENDENTE",
    },
  ];

  const historico = [
    {
      data: "15/05/2024",
      motivo: "Consulta Médica",
      status: "APROVADA",
    },
    {
      data: "28/04/2024",
      motivo: "Problema de Transporte",
      status: "NEGADA",
    },
  ];

  return (
    <main className="page">
      <aside className="sidebar">
        <h2>Main Menu</h2>
        <span>Academic Minimalism</span>

        <nav>
          <button
            className={aba === "dashboard" ? "active" : ""}
            onClick={() => setAba("dashboard")}
          >
            ▦ Dashboard
          </button>

          <button
            className={aba === "requests" ? "active" : ""}
            onClick={() => setAba("requests")}
          >
            ▤ Requests
          </button>

          <button
            className={aba === "history" ? "active" : ""}
            onClick={() => setAba("history")}
          >
            ↺ History
          </button>
        </nav>
      </aside>

      <section className="content">
        <header className="top">
          <div>
            <h1>Olá, João Silva</h1>
            <p>Bem-vindo ao seu painel de dispensas.</p>
          </div>

          <button className="new-btn" onClick={() => setPopup(true)}>
            + Solicitar Nova Dispensa
          </button>
        </header>

        {aba === "dashboard" && (
          <>
            <section className="cards">
              <div className="status-card">
                <h2>Status Atual</h2>
                <h3><span></span> Em Aula</h3>
                <p>Sua próxima aula de Matemática termina às 11:30.</p>
                <p>Nenhuma dispensa ativa no momento.</p>
              </div>

              <div className="summary-card">
                <h3>Resumo do Semestre</h3>
                <p>Dispensas Aprovadas <strong>4</strong></p>
                <p>Dispensas Negadas <strong>1</strong></p>
                <p>Pendentes <strong>1</strong></p>
              </div>
            </section>

            <Tabela titulo="Minhas Últimas Solicitações" dados={historico} />
          </>
        )}

        {aba === "requests" && (
          <Tabela titulo="Solicitações em andamento" dados={solicitacoes} />
        )}

        {aba === "history" && (
          <Tabela titulo="Histórico de Solicitações" dados={historico} />
        )}
      </section>

      {popup && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setPopup(false)}>
              ×
            </button>

            <h2>Solicitar Nova Dispensa</h2>

            <label>Motivo da dispensa</label>
            <input type="text" placeholder="Ex: Consulta médica" />

            <label>Data</label>
            <input type="date" />

            <label>Horário de saída</label>
            <input type="time" />

            <label>Observações</label>
            <textarea placeholder="Explique o motivo da solicitação"></textarea>

            <button className="send-btn" onClick={() => setPopup(false)}>
              Enviar Solicitação
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function Tabela({ titulo, dados }) {
  return (
    <section className="table-section">
      <h2>{titulo}</h2>

      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Motivo</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.data}</td>
              <td>{item.motivo}</td>
              <td>
                <span className={`badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>👁</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}