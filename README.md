# Otoma Systems Dashboard 🚀

<div align="center">
  <img src="resources/images/company-logo.svg" alt="Otoma Systems Logo" width="200"/>
  
  ### Central de Aplicações Otoma Systems
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
</div>

---

## 📋 Sobre o Projeto

O **Otoma Systems Dashboard** é uma aplicação web moderna e responsiva desenvolvida para centralizar o acesso a todas as aplicações e serviços da Otoma Systems. Este projeto foi criado como parte do desafio da **Imersão Dev da Alura**, com o objetivo de demonstrar habilidades em desenvolvimento front-end e criar uma solução prática para gerenciamento de aplicações.

### 🎯 Propósito

- **Centralização**: Ponto único de acesso para todas as aplicações da empresa
- **Organização**: Categorização inteligente em aplicações públicas, privadas e administrativas
- **Segurança**: Sistema de autenticação para aplicações sensíveis
- **Experiência**: Interface moderna, intuitiva e totalmente responsiva

---

## ✨ Funcionalidades

### 🌐 Dashboard de Aplicações
- **Aplicações Públicas**: Acesso livre para todos os usuários
- **Aplicações Privadas**: Requer VPN ou login (seção colapsável)
- **Aplicações Administrativas**: Protegidas por senha com autenticação SHA-256

### 🔐 Sistema de Autenticação
- Autenticação client-side com hash SHA-256
- Modal de login elegante e responsivo
- Proteção de aplicações administrativas
- Gerador de hash de senha incluído

### 📱 Design Responsivo
- Interface adaptável para desktop, tablet e mobile
- Dark mode nativo
- Animações suaves e transições fluidas
- Cards interativos com hover effects

### 🎨 Páginas Incluídas
- **Home**: Apresentação da empresa com estatísticas e informações
- **Dashboard**: Central de aplicações organizada por categorias
- **About**: Informações sobre o fundador e contato
- **TeamSpeak**: Instruções de conexão com imagens ilustrativas
- **404**: Página de erro personalizada
- **Maintenance**: Página de manutenção

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS e animações
- **JavaScript (ES6+)**: Lógica de aplicação e manipulação do DOM

### Recursos
- **Font Awesome**: Ícones vetoriais
- **Web Crypto API**: Criptografia SHA-256 para autenticação
- **Fetch API**: Carregamento dinâmico de dados JSON
- **LocalStorage**: Persistência de dados no navegador

---

## 📁 Estrutura do Projeto

```
root/
├── README.md               # Documentação
├── index.html              # Página inicial
├── dashboard.html          # Dashboard de aplicações
├── about.html              # Sobre o fundador
├── teamspeak.html          # Instruções TeamSpeak
├── 404.html                # Página de erro 404
├── maintenance.html        # Página de manutenção
├── generate-hash.html      # Gerador de hash de senha
└── resources/
  ├── styles.css              # Estilos globais
  ├── script.js               # Lógica JavaScript
  ├── apps.json               # Dados das aplicações
  ├── auth.json               # Hash da senha admin
  └── images/
    ├── company-logo.svg      # Logo do site
    └── profile.png           # Imagem de perfil no about
```
---

## 🚀 Como Usar

### 1. Configure as Aplicações

Edite o arquivo `apps.json` com suas aplicações:

```json
{
  "public": [
    {
      "name": "Nome da App",
      "description": "Descrição breve",
      "url": "https://exemplo.com",
      "logo": "https://exemplo.com/logo.png",
      "requiresAuth": false
    }
  ],
  "private": [
    {
      "name": "App Privada",
      "description": "Requer VPN/Login",
      "url": "https://exemplo.com/private",
      "logo": "https://exemplo.com/logo.png",
      "requiresAuth": true,
      "authType": "VPN Required"
    }
  ],
  "admin": [
    {
      "name": "App Admin",
      "description": "Apenas administradores",
      "url": "https://exemplo.com/admin",
      "logo": "https://exemplo.com/logo.png",
      "requiresAuth": true,
      "authType": "Admin Only"
    }
  ]
}
```

### 2. Configure a Senha Admin

1. Abra `generate-hash.html` no navegador
2. Digite sua senha desejada
3. Copie o hash gerado
4. Cole no arquivo `auth.json`:

```json
{
  "passwordHash": "seu_hash_sha256_aqui"
}
```

### 3. Hospede o Projeto

#### Hospedagem Estática
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

---

## 🎨 Personalização

### Cores (CSS Variables)

Edite as variáveis no `styles.css`:

```css
:root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --bg-tertiary: #21262d;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --accent-primary: #8b5cf6;
    --accent-secondary: #6d28d9;
    --border-color: #30363d;
}
```

### Logo
Edite as imagens em resources/images:
- `company-logo.svg`: Logo exibido na nav bard e paginas standalone
- `profile.png`: Images de perfil no card do founder em About.html

### Informações da Empresa

Edite os arquivos HTML para personalizar:
- `index.html`: Estatísticas e informações da home
- `about.html`: Informações sobre o fundador

---

## 📱 Compatibilidade

### Dispositivos Testados
- 💻 Desktop (1920x1080 e superiores)
- 💻 Laptop (1366x768 e superiores)
- 📱 Tablet (768x1024)

---

## 🔒 Segurança

### Autenticação Client-Side
⚠️ **Importante**: A autenticação é feita no lado do cliente usando SHA-256. Isso oferece proteção básica, mas não é adequado para dados extremamente sensíveis.

**Como funciona**:
1. Senha é inserida pelo usuário
2. JavaScript gera hash SHA-256 da senha
3. Hash é comparado com o hash armazenado em `auth.json`
4. Se corresponder, acesso é concedido

---

## 🎓 Desafio Imersão Dev - Alura

Este projeto foi desenvolvido como parte do desafio da **Imersão Dev da Alura**, aplicando conceitos de:

### Conceitos Aplicados
- ✅ HTML semântico e acessível
- ✅ CSS moderno com variáveis e animações
- ✅ JavaScript ES6+ e manipulação do DOM
- ✅ Fetch API e consumo de JSON
- ✅ Design responsivo e mobile-first
- ✅ Boas práticas de desenvolvimento web
- ✅ Organização de código e arquivos
- ✅ Versionamento com Git

### Desafios Superados
- 🎯 Criação de sistema de autenticação client-side
- 🎯 Carregamento dinâmico de aplicações via JSON
- 🎯 Design responsivo para múltiplos dispositivos
- 🎯 Implementação de seções colapsáveis
- 🎯 Modal de autenticação com animações
- 🎯 Páginas de erro personalizadas

### Aprendizados
- 📚 Manipulação avançada do DOM
- 📚 Promises e async/await
- 📚 CSS Grid e Flexbox
- 📚 Animações CSS
- 📚 Fetch API e tratamento de erros
- 📚 Configuração de servidores web

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga os padrões de código existentes
- Teste em múltiplos navegadores
- Atualize a documentação se necessário
- Descreva claramente suas mudanças no PR

### Ideias para Contribuição

- 🎨 Novos temas de cores
- 🌐 Traduções para outros idiomas
- 🔧 Melhorias de performance
- 🐛 Correção de bugs
- 📱 Melhorias de responsividade
- ♿ Melhorias de acessibilidade
- 🔒 Melhorias de segurança

---

## 🐛 Problemas Conhecidos

### Android
- ⚠️ Alguns navegadores Android podem ter problemas com authenticaçao da section admin

### iOS Safari
- ⚠️ Animações podem ser mais lentas em dispositivos antigos
- ⚠️ Backdrop-filter pode não funcionar em versões antigas

### Soluções Aplicadas
- ✅ Fallback para imagens quebradas
- ✅ Tratamento de erros robusto
- ✅ Compatibilidade cross-browser testada

## 📚 Documentação Adicional

### Estrutura de Dados - apps.json

```json
{
  "public": [
    {
      "name": "string",           // Nome da aplicação
      "description": "string",    // Descrição breve
      "url": "string",            // URL da aplicação
      "logo": "string",           // URL do logo
      "requiresAuth": boolean     // Requer autenticação
    }
  ],
  "private": [...],  // Mesmo formato
  "admin": [...]     // Mesmo formato com authType
}
```

### Estrutura de Dados - auth.json

```json
{
  "passwordHash": "string"  // Hash SHA-256 da senha
}
```
---

## 🔗 Links Úteis

### Recursos Utilizados
- [Font Awesome Icons](https://fontawesome.com/)
- [Dashboard Icons](https://dashboardicons.com/icons/)

### Alura
- [Imersão Dev](https://www.alura.com.br/imersao-dev)
- [Cursos de Front-end](https://www.alura.com.br/cursos-online-front-end)

---

## 👤 Autor

**MathWintruff**
- 🌐 GitHub: [@MathWintruff](https://github.com/MathWintruff)
- 💼 LinkedIn: [MathWintruff](https://linkedin.com/in/mathwintruff)
- 📧 Email: opensource@otoma.com.br
- 🏢 Empresa: Otoma Systems

---

## 🙏 Agradecimentos

- **Alura** pela Imersão Dev e todo o conteúdo educacional de qualidade
- **Font Awesome e Dashboard Icons** pelos ícones incríveis e gratuitos
- **Comunidade Open Source** por inspiração, recursos e ferramentas

---

## 💡 FAQ

### Como altero a senha admin?
1. Abra `generate-hash.html`
2. Digite a nova senha
3. Copie o hash gerado
4. Substitua o valor em `auth.json`

### Como adiciono uma nova aplicação?
Edite `apps.json` e adicione um novo objeto na categoria desejada (public, private ou admin).

### O projeto funciona offline?
Sim, após o primeiro carregamento, desde que os arquivos estejam localmente disponíveis.

### Como faço backup das configurações?
Faça backup dos arquivos `apps.json` e `auth.json`.

### Suporta múltiplos usuários admin?
Atualmente não. Todos os admins compartilham a mesma senha. Para múltiplos usuários, considere implementar um backend.

---

<div align="center">
  
  ### ⭐ Se este projeto foi útil, considere dar uma estrela!
  
  **Desenvolvido com 💜 por Otoma Systems**
  
  [⬆ Voltar ao topo](#otoma-systems-dashboard-)
  
</div>
