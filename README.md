# React Vite Boilerplate

Este é um boilerplate para projetos React utilizando Vite como bundler. O projeto inclui configurações para Tailwind CSS, ESLint, Prettier, TypeScript, PostCSS e outras ferramentas comumente utilizadas em projetos React.

## Como Rodar o Projeto

Certifique-se de ter o Node.js instalado na sua máquina. Clone o repositório e execute os seguintes comandos no terminal:

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Isso iniciará o servidor de desenvolvimento em `http://localhost:5173`.

## Estrutura do Projeto

```
src/
|-- assets/
|-- components/
|   |-- ui/
|-- data/
|-- interfaces/
|-- pages/
|-- store/
|-- util/
|-- App.jsx
|-- main.jsx
|-- router.tsx
|-- index.css
```

- **assets:** Armazena arquivos estáticos como imagens, fontes, etc.
- **components/ui:** Componentes de interface de usuário reutilizáveis.
- **data:** Dados estáticos ou mocks.
- **interfaces:** Interfaces TypeScript para tipagem.
- **pages:** Componentes que servem como páginas na aplicação.
- **store:** Configuração e lógica do gerenciamento de estado (Redux, Mobx, etc.).
- **util:** Funções utilitárias ou helpers.

## Arquivos Principais

- **App.jsx:** Ponto de entrada da aplicação React.
- **main.jsx:** Configuração principal do React e inicialização da aplicação.
- **router.tsx:** Configuração das rotas, se aplicável.
- **index.css:** Arquivo de estilos globais e importação do tailwind.

## Ferramentas e Configurações

- **ESLint:** Linter para manter consistência no código.
- **Prettier:** Formatador de código para manter uma formatação consistente.
- **Vite:** Bundler rápido e moderno para projetos JavaScript.
- **TypeScript:** Superset de JavaScript com tipagem estática.
- **PostCSS:** Ferramenta de pós-processamento para CSS.
- **Tailwind CSS:** Framework de estilos utilitários.

## Exemplo de Componente

Dentro da pasta `components/ui`, você pode encontrar um exemplo de componente simples chamado `ExampleComponentUi.jsx`. Este componente pode ser utilizado como ponto de partida para a construção de componentes reutilizáveis.

```jsx
// components/ui/ExampleComponentUi.jsx

export default function ExampleComponentUi({ text }) {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-2">Example Component</h2>
      <p>{text}</p>
    </div>
  );
};
```

Aqui está um código em Markdown para baixar as extensões do Visual Studio Code que você listou:

# Extensões Recomendadas para o Visual Studio Code

## [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
## [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
## [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
## [Omni Theme](https://marketplace.visualstudio.com/items?itemName=rocketseat.theme-omni)
## [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
## [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
## [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=zhang-renyang.vscode-react)
## [vscode-react-native](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
## [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
## [Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare)

Copie e cole os links acima no navegador ou acesse diretamente o mercado de extensões do Visual Studio Code para baixar e instalar as extensões.

## Recomendação de configuração do vscode para auxiliar o eslint autofix problems ao salvar
```markdown
1. No editor de configurações do Visual Studio Code (`Ctrl + ,` ou `Cmd + ,`), adicione o seguinte trecho de código JSON para ativar a correção automática do ESLint ao salvar:

    ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
    ```

2. Salve as configurações.
```

Sinta-se à vontade para personalizar e expandir este boilerplate conforme necessário para atender às necessidades específicas do seu projeto.
