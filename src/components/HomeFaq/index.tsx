import { FaqButton } from "../FaqButtons";

export function HomeFaq() {
  return (
    <main className="flex flex-col items-center w-full mb-11">
      <section className="w-full text-start mb-4">
        <h2 className="font-bold text-gray-700 text-3xl">FAQ</h2>
      </section>
      <section className="flex w-full justify-center items-center">
        <FaqButton title="O que é TimerDev?" description="Timer dev é um..."/>
      </section>
    </main>
  );
}
