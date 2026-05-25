"use client";

import "./page.css";

import Link from "next/link";
import { ArrowLeft, Mail, School, Send } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="container">
      <section className="leftSide">
        <h1>EDISPENSA</h1>
      </section>


      <section className="rightSide">
        <div className="loginCard">

          <div className="logoContainer">
            <div className="logoCircle">
              <School size={22} color="#FFF" />
            </div>

            <h1>Esqueci minha senha</h1>
            <p>
              Informe o e-mail cadastrado para receber o link de
              recuperação.
            </p>
          </div>

          <div className="inputGroup">
            <label htmlFor="email">E-mail</label>

            <div className="inputContainer">
              <Mail size={18} color="#888" />

              <input
                id="email"
                type="email"
                placeholder="seuemail@exemplo.com"
              />
            </div>
          </div>

          <button className="loginButton" type="button">
            Enviar link
            <Send size={18} />
          </button>

          <Link className="backLink" href="/login">
            <ArrowLeft size={16} />
            Voltar para o login
          </Link>

          <p className="supportText">
            Não recebeu o e-mail?{" "}
            <strong>
              Verifique o spam ou contate o suporte
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
