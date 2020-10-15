# react-js-valida-cpf
Sistema frontend para aplicação Valida CPF. Para o funcionamento de toda a aplicação, veja também o [Sistema Backend em NodeJs](https://github.com/Valida-CPF/node-js-valida-cpf)

## Intro
**Esta aplicação deve ser executada localmente por ainda não ter nenhum deploy.**

O sistema frontend da aplicação foi desenvolvido em React com TypeScript. O sistema serve como interface ao usuário para fazer o upload de um arquivo Excel (.xlsx), que será
processado no backend e posteriormente visualizar o resultado de seu processamento, exibindo o dado pós-processado e seu status, que pode ser:
* Correto
* Errado
* Corrigido

O usuário ainda poderá fazer o download do arquivo excel contendo as colunas de dados processados pela aplicação.

## Visual
O visual da aplicação foi desenvolvido em CSS com o uso do Framework Material-UI. As imagens são de autoria própria.

## Rodar Aplicação
Por ainda não estar disponibilizada em um servidor alguns passos devem ser executados para que a aplicação rode com sucesso localmente.

#### 1. Git clone
```
git init
git clone https://github.com/Valida-CPF/react-js-valida-cpf.git
```

#### 2. Limpar cache
```
npm cache clean --force
```

#### 3. Excluir arquivos
Delete o arquivo **package-lock.json**

#### 4. Instalar NPM
```
npm install
```

#### 5. Rodar a aplicação
```
npm run start
```

## Workflow da aplicação
A aplicação é intuitiva e conta com elementos para auxiliar o usuário no uso da mesma. Basta carregar um arquivo na página inicial e em seguida clicar no botão 
"Carregar arquivo". Este botão estará desativado caso nenhum arquivo tenha sido carregado ainda.
Ao carregar o arquivo a aplicação o direcionará à tela de visualização dos dados verificados, onde será possível extrair a tabela exibida para arquivo .xlsx localmente.
