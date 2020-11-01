#### <div align="right">- Projeto Finalizado <div>
# <div align="center">mobile<div>
## <div align="center">Aplicação mobile simula extração de dados de uma API do backend<div>
### <div align="center">Sumário <div>
### <div align="center">================= <div>
<!--ts-->
   - [Requisitos](#Requisitos)
   - [Tecnologias utilizadas](#tecnologias-utilizadas)
   - [Autor](#autor)
   - [Licença](#Licença)
<!--te-->
## <div align="center">Requisitos<div>
Antes de começar é necessário instalar algumas ferramentas, tais como um editor de códigos para realizar compilação dos mesmos. Os códigos desse repositório foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/), [Git Bash](https://gitforwindows.org/), [Android Studio](https://developer.android.com/studio) e o [Insomnia](https://insomnia.rest/download/). Após instalados, será necessário instalar o também o [Yarn](https://yarnpkg.com/) para que seja possível automatizar as instalações de todas as dependências que foram usadas nessa aplicação.

No terminal, realize a clonagem do repositório.\
$ git clone <https://github.com/Ricnaga/mobile> \
Acesse o projeto.\
$ cd mobile \
Execute o comando yarn para reaver todos as dependências instaladas dessa aplicação.\
$ yarn
Feito todos os passos acima é hora de iniciar a aplicação.\
$ yarn android para iniciar aplicação dentro do android\
$ yarn ios para iniciar aplicação dentro do ios\

OBS: para esse projeto foi configurar o localhost com o comando adb reverse tcp:3333 tcp:3333\

Para testar as rotas é necessário configurar o Insomnia com as rotas(No exemplo desse repositório, foi realizado a configuração das rotas via interface).\
GET: http://localhost:3333/projects \
POST: http://localhost:3333/projects \
PUT: http://localhost:3333/projects/id \
DELETE: http://localhost:3333/projects/id

## <div align="center">Tecnologias utilizadas<div>
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ECMAscript](https://www.ecma-international.org/publications/standards/Standard.htm)
- [Git Bash](https://gitforwindows.org/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Android Studio](https://developer.android.com/studio)
- [Insomnia](https://insomnia.rest/download/)

## <div align="center">Autor<div>
Exercícios extraídos da [Rocketseat](https://rocketseat.com.br/), realizados e respondidos por minha pessoa :) \
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona \
<a href="https://www.linkedin.com/in/ricardo-nagatomy-56553254"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy-08130"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>

## <div align="center">Licença<div>

![GitHub](https://img.shields.io/github/license/Ricnaga/mobile)