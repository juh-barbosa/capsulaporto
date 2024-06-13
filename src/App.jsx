import {useState} from "react";
import "./App.css"
import astronauta from './img/1000000084 1.png'
import axios from "axios";

export default function App(){
    const [status, setStatus] = useState(0)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function enviarMensagem(){
        axios.post('https://portohoot-backend.onrender.com/api/capsula',{
            email: email,
            mensagem: message
        }).then(() => {
            setStatus(status + 1)
        })
    }

    return(
        <section className="container">
            {
                status === 0 ?
                    <div className="container__first">
                        <div className="container__first_title">
                            <h1 className="container__first_title_one">CÁPSULA DO</h1>
                            <h1 className="container__first_title_two">TEMPO</h1>
                        </div>
                        <div className="container__first_button">
                            <button onClick={() => setStatus(status + 1)}>
                                COMEÇAR
                            </button>
                        </div>
                        <div className="container__first_img">
                            <img src={astronauta} alt="Astronauta" />
                        </div>
                    </div>
                    : status === 1 ?
                        <div className="container__first">
                            <span className="container__first_crypto">ESTÁ MENSAGEM SERÁ CRIPTOGRAFADA</span>
                            <div className="container__first_crypto_div">
                                <h1>RESPIRE FUNDO.<br/>ESSE MOMENTO É SEU</h1>
                                <span>DEIXE O TEMPO GUARDAR SUAS MEMÓRIAS E LEMBRE-SE DESTE INSTANTE QUANDO LER ISSO NO FUTURO. BOA SORTE 🤍</span>
                            </div>
                            <div className="container__first_input">
                                <input
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder={'E-mail Porto'}/>
                            </div>
                            <div className="container__first_click">
                                <button disabled={email === ''} onClick={() => setStatus(status + 1)}>
                                    VAMOS NESSA!
                                </button>
                                <img src={astronauta} alt="Astronauta"/>
                            </div>
                        </div>
                        :
                        status === 2 ?
                            <div className="container__first">
                                <span className="container__first_crypto">ESTÁ MENSAGEM SERÁ CRIPTOGRAFADA</span>
                                <div className="container__first_crypto_div">
                                    <h1>RESPIRE FUNDO.<br/>ESSE MOMENTO É SEU</h1>
                                </div>
                                <div className="container__first_message">
                                    <textarea
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        placeholder="Fale como você se vê daqui há 6 meses..."
                                        rows="10" // Ajuste o número de linhas conforme necessário
                                        cols="30" // Ajuste o número de colunas conforme necessário
                                    />
                                    <button onClick={() => enviarMensagem()}>ENVIAR</button>
                                </div>
                                <div className="container__first_img">
                                    <img src={astronauta} alt="Astronauta"/>
                                </div>
                            </div>
                            :
                            <div className="container__first">
                                <span className="container__first_crypto">ESTÁ MENSAGEM FOI CRIPTOGRAFADA</span>
                                <div className="container__first_crypto_div" style={{height: "20%"}}>
                                    <h1 style={{textAlign: "center"}}>OBRIGADO(A)</h1>
                                </div>
                                <div className="container__first_crypto_div">
                                    <h1>SAVE THE DATE</h1>
                                    <span style={{fontSize: "1.5rem"}}>06 DE DEZEMBRO DE 2024</span>
                                </div>
                                <div className="container__first_img" style={{justifyContent: "center", height: "10%"}}>
                                    <img src={astronauta} alt="Astronauta" style={{width: "248px", height: "248px"}}/>
                                </div>
                            </div>
            }
        </section>
    )
}