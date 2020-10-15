import React, { useEffect, useState } from 'react';

import './styles.css';
import logo from '../../assets/logo.svg';
import { MyTable } from './MyTable';
import api from '../../services/api';
import Button from '@material-ui/core/Button';
import {FiDownload} from 'react-icons/fi';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


interface Item {
    Nome: String,
    Sobrenome: String,
    CPF: String,
    CPF_CHECK: String,
    status: String
}

const Tabela = () => {

    const [items, setItens] = useState<Item[]>([]);
    const [jsonTable, setJsonTable] = useState<JSON>();
    const [fileName, setFileName] = useState<string>();
    const [filePath, setFilePath] = useState<string>();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    function callExtractFn() {     
        api.post('downloadfile', jsonTable).then(response =>{
            var name = response.data.fileName;
            var address = response.data.filePath;
            setFileName(name);
            setFilePath(address);
            
        }).then(() => {
            handleOpen();
        });              
    }

    useEffect(() => {
        api.get('checkfile').then(response =>{
            setJsonTable(response.data);
            setItens(response.data);
        })
    }, []);

    return (
        <div id="page-table">
            <div className="content">
                <header>
                    <img src={logo} alt="Valida CPF"/>
                </header>
                <main>
                    <h1>Dados Lidos do Arquivo .XLSX</h1>

                    <br/>

                    <MyTable items={items}/>

                    <Button
                        variant="contained"
                        color="default"
                        onClick={callExtractFn}
                        startIcon={<FiDownload />}
                    >
                        Extrair arquivo
                    </Button>
                    <Dialog open={open} aria-labelledby="customized-dialog-title" onClose={handleClose}>
                        <DialogTitle>Download do Arquivo</DialogTitle>
                        <DialogContent>Faça o download do arquivo corrigido com os campos de verificação.</DialogContent>
                        <a href={filePath} download={fileName}>
                            <span>
                                <FiDownload/>
                            </span>
                            <strong> Baixar Arquivo</strong>
                        </a>
                    </Dialog>
                </main> 
            </div>
        </div>
    )
}

export default Tabela;