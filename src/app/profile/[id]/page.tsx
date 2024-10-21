export default function ProfilePublicPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>TESTE: {id}</h1>
    </div>
  );
}
