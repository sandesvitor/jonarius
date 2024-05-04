## API MOCK DATABASE PARA ESTUDOS PLUS POKEMON INFO

Essa é uma API voltada para estudos, usando apenas um array e estabelecendo funções básicas de database com um plus de buscar informações em uma API de Pokemon.

# Funções

```shell
API
├── Adicionar usuário
├── Checar lista de usuários
├── Busca um usuário e retorna informações
├── Mudar e-mail de um usuário específico
├── Excluir um usuário específico
├── EXTRA: Busca um pokemon específico e retorna informações sobre ele
```

## COMO UTILIZAR

Request | URL | o que faz | comentários |
--------|-----|-----------|-------------|
`POST`|http://localhost:8080/users|Adiciona o usuário baseado nas informações "name" e "e-mail" inseridas no body| necessária a nomenclatura correta """name": $nome" e o mesmo para e-mail|
`GET`|http://localhost:8080/users|Checa a lista de usuários mostrando todos já cadastrados até o momento| Lista mostrada em ordem de cadastro|
`GET`|http://localhost:8080/users/$numero|Busca um usário baseado na "id" dele e retorna suas informações|id definida em ordem progressiva de cadastro|
`PUT`|http://localhost:8080/users/$numero|Muda o e-mail de um usuário específico baseado na "id" dele|Caso a id não exista volta uma mensagem de erro|
`DEL`|http://localhost:8080/users/$numero|Exclui o usuário baseado na "id" dele|Caso a id não exista volta uma mensagem de erro|
`GET`|http://localhost:8080/pokemon/$nomeDoPokemon|Busca o pokemon pelo nome e retorna informações sobre ele|Função extra inserida como estudo usando a https://pokeapi.co/|

## GETTING STARTED

# o que é necessário:
nome |utilidade |
--------------------|--------------------------------------------------------------------------------------|
Node Packet Manager | Serve para gerenciar e instalar as bibliotecas, pacotes e dependências de terceiros. | 
Axios| Encapsula e organiza a função 'FETCH' do Javascript|
Cors | Protocolo de comunicação|
Express | 

```shell
install npm 
install axios
install cors
install express
```
código usado para função GET 
```shell
app.get("/users", (req, res) => {
    console.log(`[GET /users]`)
    res.status(200).json(db.getUsers());
})
```

## LIBRARIES USADAS

express
cors
axios


