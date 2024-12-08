# TimerDev

![TimerDev](/public/image-4.png)

**TimerDev** é uma aplicação inovadora que gamifica o processo de estudo, ajudando você a monitorar e administrar seu tempo de maneira eficiente e divertida. Com ele, você mantém a produtividade em alta enquanto avança nas suas metas por meio de relatórios e recompensas.  
Atualmente, o projeto está em fase inicial, mas novas funcionalidades estão a caminho!

## 🚀 Funcionalidades

- **Dashboard de Projetos:** Crie, edite e acompanhe projetos de estudo e tarefas.
- **Cronometragem de Tarefas:** Registre o tempo dedicado para cada atividade.
- **Perfil Compartilhável:** Exiba seu progresso e evolução por meio de um perfil público.
- **Futuras Funcionalidades:**
  - Cronômetro personalizável.
  - Sistema de recompensas para incentivar a consistência.
  - Acompanhamento de progresso com relatórios diários e semanais.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js / Next.js
- **Banco de Dados:** MongoDB
- **ORM:** PrismaORM
- **Estilização:** Tailwind CSS

## 📦 Como Instalar e Executar Localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/KaiD3v/timer-dev.git
   cd timerdev
   ```
2. Configure a sua .env local conforme o arquivo **.env.example**
3. Faça a build do Container Docker:
   ```bash
   docker build -t docker-timerdev .
   ```
4. Inicie o container:
```bash
   docker run -p 3000:3000 --name docker-timerdev timer-dev
``` 
ou o ambiente completo utilizando o Compose
```bash
   # Diretamente com o Compose
   docker compose up -d 
   # Utilizando a Makefile
   make up
```
5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 🌐 Acesso à Plataforma

Atualmente, o **TimerDev** está disponível apenas na **versão web**. No futuro, pretendemos disponibilizar aplicativos para Android e iOS.

## 🆓 Licença

Este projeto é **open source** e distribuído sob a licença MIT. Contribuições são bem-vindas!

## 🧑‍💻 Contribuindo

Siga estas etapas para contribuir:

1. Fork o projeto.
2. Crie uma nova branch para sua funcionalidade:
   ```bash
   git checkout -b minha-funcionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adicionei nova funcionalidade"
   ```
4. Envie para o repositório:
   ```bash
   git push origin minha-funcionalidade
   ```
5. Abra um Pull Request.

## 📞 Contato

Se tiver alguma dúvida ou sugestão, entre em contato:

- **E-mail:** contato.kaidev@gmail.com.com
- **LinkedIn:** [Kaique Melo](https://www.linkedin.com/in/kaique-ricardo-de-melo-98969b256/)

---
