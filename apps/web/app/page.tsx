import { Title } from "@repo/ui/Title/Title";
import { Button } from "@repo/ui/Button/Button";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <Button appName="web">Click me!</Button>
      <Title>Apps/Web/HomePage</Title>
    </main>
  );
}
