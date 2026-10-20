export interface AppProps {
  title?: string;
}

export function App({ title = 'testapp-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}