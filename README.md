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
- **main.jsx:** Configuração principal do React e inicialização do aplicativo.
- **router.tsx:** Configuração do roteador, se aplicável.
- **index.css:** Arquivo de estilos globais.

## Ferramentas e Configurações

- **ESLint:** Linter para manter consistência no código.
- **Prettier:** Formatador de código para manter uma formatação consistente.
- **Vite:** Bundler rápido e moderno para projetos JavaScript.
- **TypeScript:** Superset de JavaScript com tipagem estática.
- **PostCSS:** Ferramenta de pós-processamento para CSS.
- **Tailwind CSS:** Framework de estilos utilitários.

## Exemplo de Componente

Dentro da pasta `components/ui`, você pode encontrar um exemplo de componente simples chamado `ExampleComponent.jsx`. Este componente pode ser utilizado como ponto de partida para a construção de componentes reutilizáveis.

```jsx
// components/ui/ExampleComponent.jsx

export default function ExampleComponent({ text }) {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-2">Example Component</h2>
      <p>{text}</p>
    </div>
  );
};
```

Sinta-se à vontade para personalizar e expandir este boilerplate conforme necessário para atender às necessidades específicas do seu projeto.