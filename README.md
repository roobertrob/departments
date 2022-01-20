##Rodando o projeto

Primeiramente, inicie o app no modo de desenvolvimento na porta 3000. A Api está programada para consultar neste endereço.

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

##Tecnologias utilizadas
- NextJS
- TailwindCSS
- Typescript
- Firebase 

##Itens do desafio - Soluções

1. Duas telas (Autenticação e index/home)

    Para a implementação deste item, utilizou-se o firebase para realizar a autenticação dos usuários. Nesta tela, o usuário pode logar com o Google ou criar uma senha utilizando o e-mail e a senha que desejar. Neste caso, o firebase se encarrega de validar se o que o usuário informou atende aos requisitos básicos. São eles: e-mail ter o formato de e-mail e senha ter mais que 6 caracteres. Após submeter os dados, o usuário tem acesso à página home.
    
    A estruturação do site consiste em vários componentes presentes na pasta "template" que constroem a aplicação. Para se ter acesso aos dados do usuário em toda a aplicação e também para proteger as rotas, utilizou-se ContextAPI. Para isso, envolvemos toda a aplicação em _app.tsx para que ocorra o compartilhamento dos dados por toda a aplicação. O contexto está presente na pasta data > context. Também dentro da pasta data, têm-se os hooks para que se possa utilizar o contexto criado. Para preservar os dados, utilizou-se cookies a fim de que o usuário possa manter o login e também a preferência de tema. Dentro do contexto criado, têm-se as funções que realizarão o login, cadastro, etc.

    As rotas privadas foram implementadas utilizando as funções presentes no contexto. Tais funções verficam se existem dados do usuário. Caso exista, ele é direcionado para a Home. 

2. Listagem de departamentos, input search e logout 
    Nesta tela, visualmente tem-se:
    - Menu lateral com: logotipo, botão de início, botão de logout
    - Cabeçalho contendo o título e subtítulo da página, botão para alternar tema e a imagem do usuário logado no momento. Caso ele tenha realizado login ou cadastro com e-mail e senha, uma imagem aleatória de perfil é retornada.
    - Input search
    - Tabela com departamentos

    O botão de logout chama uma função presente no contexto criado utillizando ContextAPI. Essa função define o usuário como null, e a rota privada o empurra para o login. Assim, ele não tem mais acesso à página Home, que contém os dados.

    A tabela de departamentos é gerada por meio de uma renderização condicional atrelada ao input de pesquisa. Tem-se, no mesmo projeto, uma API que retorna alguns departamentos ficticios. A requisição dos dados da API ocorre nessa mesma página.
    
    O input search faz parte das condições de renderização da tabela. Ele possui um escutador de eventos que detecta uma mudança de estado (onChange). Quando ocorre este evento, uma variável controlada por um useState salva esse valor. Em seguida, a renderização ocorre com um filter dos dados tendo como base o valor presente no input de pesquisa (que começa a ordernar a renderização da tabela quando possuir 3 ou mais caracteres)

3. Como melhorar a perfomance do app?
    Pode-se utilizar lazy-loading para que as imagens não sejam todas carregada inicialmente. Assim, o site seria carregado de acordo com a necessidade do usuário. Nativamente, o NextJS utiliza dessa técnica para melhorar a perfomance da aplicação.

4. Deploy

    Servidor de desenvolvimento: o próprio localhost:3000 pode ser considerado um. Porém, ao realizar o build, alguns problemas podem surgir. Tudo escrito utilizando frameworks será traduzido para javascript e html. Por isso alguns problemas podem surgir. Um servidor de homologação seria como um servidor para testes, mas com acesso controlado. Já um servidor de produção contém um domínio em que qualquer pessoa na web pode ter acesso e, portanto, é a etapa final da aplicação.

    Variáveis de ambiente são variáveis que não são versionadas e são armazenadas localmente. Elas podem (e devem) conter as chaves de acesso às API's, senhas de Bancos de Dados, dentre outras coisas. Para garantir a segurança da aplicação, essas variáveis devem estar armazenadas em um arquivo .env.local.






