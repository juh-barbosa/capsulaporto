import { useState } from "react";
import "./home.css";
import axios from "axios";
import astronauta from "../../img/astronauta.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    setLoading(true); // Ativa o loading
    await axios
      .put("https://portohoot-backend.vercel.app/api/capsula/email/validate", {
        email: email,
        senha: password.toString(),
      })
      .then((response) => {
        setLoading(false); // Desativa o loading
        setModal(true)
        setMensagem(response.data.message)
      })
      .catch(() => {
        setLoading(false);
        setModal(true);
      });
  }

  return (
    <section className="container">
      {modal && (
        <div className="modal">
            <div className="modal-content">
                <h2>Vamos Conferir Juntos</h2>
                <div
                    dangerouslySetInnerHTML={{__html: mensagem}}
                    style={{fontFamily: "Poppins-Regular", lineHeight: "1.6", color: "black"}}
                />
                <button onClick={() => setModal(false)}>Fechar</button>
            </div>
        </div>
      )}
        {loading && (
            <div className="loading-overlay">
                <div className="loading-spinner"></div>
          <p>Carregando mensagem...</p>
        </div>
      )}
      <div className="container__title">
        <h1>CÁPSULA DO TEMPO</h1>
      </div>
      <div className="container__imagem">
        <img src={astronauta} alt="astronauta" className="floating" />
      </div>
      <div className="container__inputs">
        <div className="container__inputs_div">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Digite seu email porto"
          />
        </div>
        <div className="container__inputs_div">
          <label>Senha</label>
          <input
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <span className="container__inputs_aviso">
            * DATA DE ANIVERSÁRIO NO FORMATO DDMMAAAA *
          </span>
        </div>
      </div>
      <button
        className="container__button"
        onClick={async () => {
          await handleSubmit();
        }}
      >
        VISUALIZAR MENSAGEM
      </button>
    </section>
  );
}
