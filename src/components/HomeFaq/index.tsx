import { FaqButton } from "../FaqButtons";

export function HomeFaq() {
  return (
    <main className="flex flex-col items-center w-full mb-11">
      <section className="w-full text-start mb-4">
        <h2 className="font-bold text-gray-700 text-3xl">FAQ</h2>
      </section>
      <section className="flex flex-col w-full justify-center items-center">
        <FaqButton
          title="O que é TimerDev?"
          description="TimerDev é uma aplicação que gamifica o processo de estudo, ajudando você a monitorar o tempo dedicado a cada tarefa e a manter a produtividade elevada de forma divertida e eficiente."
        />
        <FaqButton
          title="Quais recursos estão disponíveis no TimerDev?"
          description="Atualmente, o TimerDev oferece um dashboard de projetos, cronômetro para acompanhamento do tempo e a possibilidade de compartilhar seu perfil com informações sobre seu progresso. Em breve, adicionaremos um cronômetro personalizável, sistema de recompensas, monitoramento detalhado de progresso e relatórios diários e semanais."
        />
        <FaqButton
          title="O TimerDev é gratuito?"
          description="Sim! O TimerDev é uma plataforma gratuita e de código aberto (open source), incentivando a colaboração e contribuição de toda a comunidade."
        />
        <FaqButton
          title="Em quais plataformas o TimerDev está disponível?"
          description="Atualmente, o TimerDev está disponível apenas na versão web. No futuro, planejamos lançar aplicativos para dispositivos móveis, incluindo Android e iOS."
        />
      </section>
    </main>
  );
}
