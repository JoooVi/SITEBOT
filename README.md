# Bot Website

Este projeto é um site para um bot que inclui informações sobre os termos de serviço e a política de privacidade.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
bot-website
├── src
│   ├── index.html          # Página principal do site
│   ├── styles              # Diretório para arquivos de estilo
│   │   └── style.css       # Estilos CSS do site
│   ├── scripts             # Diretório para arquivos de script
│   │   └── app.js          # Código JavaScript do site
│   └── pages               # Diretório para páginas adicionais
│       ├── terms-of-service.html  # Termos de serviço do bot
│       └── privacy-policy.html    # Política de privacidade do bot
├── package.json            # Configuração do npm
├── .gitignore              # Arquivos a serem ignorados pelo git
└── README.md               # Documentação do projeto
```

## Como Configurar

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd bot-website
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Como Executar

Para executar o site, você pode usar um servidor local. Uma opção é usar o `live-server`:

1. Instale o `live-server` globalmente:
   ```
   npm install -g live-server
   ```

2. Inicie o servidor:
   ```
   live-server src
   ```

O site será aberto automaticamente no seu navegador padrão.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.