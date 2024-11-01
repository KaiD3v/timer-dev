import { FaqButton } from "../FaqButtons";

const faqContent = [
  {
    id: 1,
    title: "O que é TimerDev?",
    description:
      "TimerDev é uma aplicação que gamifica o processo de estudo, ajudando você a monitorar o tempo dedicado a cada tarefa e a manter a produtividade elevada de forma divertida e eficiente.",
  },
  {
    id: 2,
    title: "Quais recursos estão disponíveis no TimerDev?",
    description:
      "Atualmente, o TimerDev oferece um dashboard de projetos, cronômetro para acompanhamento do tempo e a possibilidade de compartilhar seu perfil com informações sobre seu progresso. Em breve, adicionaremos um cronômetro personalizável, sistema de recompensas, monitoramento detalhado de progresso e relatórios diários e semanais.",
  },
  {
    id: 3,
    title: "O TimerDev é gratuito?",
    description:
      "Sim! O TimerDev é uma plataforma gratuita e de código aberto (open source), incentivando a colaboração e contribuição de toda a comunidade.",
  },
  {
    id: 4,
    title: "Em quais plataformas o TimerDev está disponível?",
    description:
      "Atualmente, o TimerDev está disponível apenas na versão web. No futuro, planejamos lançar aplicativos para dispositivos móveis, incluindo Android e iOS.",
  },
];

export function HomeFaq() {
  return (
    <main className="flex flex-col items-center w-full mb-11">
      <section className="w-full text-start mb-4">
        <h2 className="dark:text-white font-bold text-gray-700 text-3xl">FAQ</h2>
      </section>
      <section className="flex flex-col w-full justify-center items-center">
        {faqContent.length > 0 &&
          faqContent.map((content) => (
            <FaqButton
              key={content.id}
              title={content.title}
              description={content.description}
            />
          ))}
      </section>
    </main>
  );
}
