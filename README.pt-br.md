<div style="text-align: center">
    <h1>FILMES POPULARES</h1>
    <div ><a href='./README.md'style='cursor: pointer'>EN - README</a> || <a href='./README.es.md' style='cursor: pointer'>ES - README</a></div>
</div>

<div style="text-align: center">
    <h2>PREVIEW</h2>
    <img src='assets/preview.png' alt='deployed preview'></img>
    <a style='text-decoration: none; text-transform: uppercase' href='https://itsdamel.github.io/popular-movies/' target='_blank'>VER LIVE🚀</a>
</div>

<div style="text-align: center">
    <h2>Desenvolvido com:</h2>
    <img alt='Javascript' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'>
    <img alt='HTML' src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'>
    <img alt='CSS' src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'>

</div>

<div style="text-align: center">
    <h2>Funcionalidades</h2>
    <h3>
        Este projeto é um dos desafios do <a href='https://alura-7dayscode.vercel.app/' target='_blank'>ALURA #7DAYSOFCODE</a>.<br><br> A proposta do desafio era:
    </h3>     
    <ul style="text-align: left">
        <li>Criar uma página que consume a <a href='https://developer.themoviedb.org/docs' target='_blank'>API do TMDB</a>, mostrando de forma dinamica os filmes mais populares do momento.</li><br>
        <li>Usando um endpoint diferente da mesma API, permitir que o usuario pudesse pesquisar filmes por titulo em qualquer idioma.</li><br>
        <li>Permitir que o usuario pudesse favoritar e desfavoritar qualquer filme e visualizar apenas os filmes favoritados ao clicar na checkbox.</li><br>
        <li>Salvar os filmes favoritados pelo usuario no cache do navegador.</li>
    </ul>
    
</div>

<div style="text-align: center">
    <h3>
        As funcionalidades adicionais que coloquei na aplicação foram:
    </h3>     
    <ul style="text-align: left; font-size: 16px">
        <li> Deixar a página 100% responsiva a diferentes tipos de tela. </li><br>
        <li>Adicionei navegação com tab para os usuarios que navegam a página com auxilio do leitor de tela.</li><br>
        <li> Página personalizada caso a pesquisa do usuario seja inválida.</li><br>
        <li>Página personalizada caso o usuario tente pesquisar com um imput vazio.</li><br>
        <li>Página personalizada caso o usuario tente visualizar filmes favoritados sem ter nenhum filme favoritado.</li><br>
        <li>Imagem de erro padrão quando API não retorna a capa de um filme.</li><br>
        <li>Filmes com descrição maior que 300 caracteres tem sua descrição "cortada".</li><br> 
    </ul>
    
</div>

<div>
    <h2>Boas praticas</h2>
    <p> Nesse projeto, apliquei o padrão de <strong>arquitetura MVC</strong>, dividindo toda a aplicação em diferentes diretórios e arquivos .js de acordo com o contexto de cada um. Também usei <strong>programação orientada a objetos</strong>, criando uma classe para objetos "filmes" apenas com os atributos necessarios, fazer isso também me permitiu manipular o estado de favoritado do filme, tratar erros frequentes com a capa de filmes mais desconhecidos, formatar review com ponto flutuante e prevenir que filmes com descrições muito grandes "quebrassem" seus cards. Trabalhei muito com versionamento de código com git pelo terminal.</p>
</div>

<div>
    <h2>Comentarios pessoais</h2>
    <p>Esse é o primeiro projeto que faço dedicado ao meu portifólio. A ideia é que seja o mais simples para que fique claro minha evolução com projetos maiores. Pensar que em agosto eu não sabia nada de manipulação de DOM ou chamadas de API, para agora ser capaz de entregar um excelente projeto como esse faz com que eu me apaixone ainda mais pelo que faço. Todo o tempo que passei lendo artigos de otimização, arquitetura, boas práticas e código limpo valeu muito apena pela facilidade em que desenvolvi esse projeto. Em suma não me tomou muito tempo(Uma semana e meia dedicando 2h por dia), foi muito divertido do inicio ao fim, tive vários desafios que ao serem superados, me tornaram uma desenvolvedora melhor. Ainda tenho algumas ideias como adicionar uma página dedicada para cada um dos filmes, e adicionar mais eventos de teclado para deixar o site mais acessivel, então espero poder voltar para esse projeto algum dia. </p>
    <p>Se você leu até aqui, eu agradeço o interesse e paciência! Espero que tenha um dia incrivel :)</p>

</div>