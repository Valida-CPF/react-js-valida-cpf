import React, { ChangeEvent, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './estilo.css';
import api from '../../services/api';

const Home = () => {
    
    const [hasFile, setHasFile] = useState<string>();

    function onChangeHandler(this: any, event: ChangeEvent<HTMLInputElement>) {
        var selectedFile;
        setHasFile("http://localhost:3000/file-checker");

        if(event.target.files !== null){
            selectedFile = event.target.files[0];

             const data = new FormData();
             data.append('file', selectedFile);
             api.post("/upload", data).then(response => {
                 
             });
        }
    }

    return(
        <div id="home">
            <div className="content">
                <header>
                    <img src={logo} alt="Valida CPF"/>
                </header>
                <main>
                    <h1>Corrija os CPFs de suas tabelas de uma forma muito mais simples.</h1>
                    <p>Verifique os dados de suas tabelas, veja se existem inconsistências e baixe o arquivo .xlsx corrigido.</p>
                    <form action="/" method="post" encType="multipart/form-data"><br/>
                    <input type="file" accept=".xlsx" id="input-button" multiple name="filetoupload" onChange={onChangeHandler} />                    
                    <a type="submit" href={hasFile ? hasFile : "/"}>
                        <span>
                            <FiUpload/>
                        </span>
                        <strong>Carregar arquivo</strong>
                    </a>
                    </form>                    
                </main> 
            </div>
        </div>
    )
}

export default Home;