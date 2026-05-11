"use client";

import "./page.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  School,
  Users,
  Lock,
  IdCard,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [perfilSelecionado, setPerfilSelecionado] =
    useState("responsavel");

  function handleLogin() {
    if (perfilSelecionado === "responsavel") {
     router.push("/dashboard/responsaveis");
    } else {
      router.push("/dashboard/instituicao");
    }
  }

  return (
    <main className="container">
      {/* Lado esquerdo */}
      <section className="leftSide">
        <h1>EDISPENSA</h1>
      </section>

      {/* Lado direito */}
      <section className="rightSide">
        <div className="loginCard">
          {/* Logo */}
          <div className="logoContainer">
            <div className="logoCircle">
              <School size={22} color="#FFF" />
            </div>

            <h1>EDISPENSA</h1>
            <p>Acesse sua conta para continuar</p>
          </div>

          {/* Seleção de Perfil */}
          <div className="perfilArea">
            <span>Selecione seu perfil</span>

            <div className="perfilButtons">
              {/* Responsável */}
              <button
                className={
                  perfilSelecionado === "responsavel"
                    ? "perfilButton active"
                    : "perfilButton"
                }
                onClick={() =>
                  setPerfilSelecionado("responsavel")
                }
              >
                <Users size={22} />
                <span>Responsável</span>
              </button>

              {/* Instituição */}
              <button
                className={
                  perfilSelecionado === "instituicao"
                    ? "perfilButton active"
                    : "perfilButton"
                }
                onClick={() =>
                  setPerfilSelecionado("instituicao")
                }
              >
                <School size={22} />
                <span>Instituição</span>
              </button>
            </div>
          </div>

          {/* Campo Dinâmico */}
          <div className="inputGroup">
            <label>
              {perfilSelecionado === "responsavel"
                ? "Registro de Matrícula (RM)"
                : "Código da ETEC"}
            </label>

            <div className="inputContainer">
              <IdCard size={18} color="#888" />

              <input
                type="text"
                placeholder={
                  perfilSelecionado === "responsavel"
                    ? "Ex: 123456"
                    : "Ex: ETEC2025"
                }
              />
            </div>
          </div>

          {/* Senha */}
          <div className="inputGroup">
            <div className="senhaLabel">
              <label>Senha</label>

              <button className="forgotPassword">
                Esqueci minha senha
              </button>
            </div>

            <div className="inputContainer">
              <Lock size={18} color="#888" />

              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="••••••••"
              />

              <button
                type="button"
                className="showPassword"
                onClick={() =>
                  setMostrarSenha(!mostrarSenha)
                }
              >
                {mostrarSenha ? (
                  <Eye size={18} color="#888" />
                ) : (
                  <EyeOff size={18} color="#888" />
                )}
              </button>
            </div>
          </div>

          {/* Botão Entrar */}
          <button
            className="loginButton"
            onClick={handleLogin}
          >
            Entrar
            <ArrowRight size={18} />
          </button>

          {/* Suporte */}
          <p className="supportText">
            Precisa de ajuda?{" "}
            <strong>
              Entre em contato com o suporte
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}