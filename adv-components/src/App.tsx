import Button from './components/Button';

function App() {
  return (
    <main>
      <p>
        <Button el="button" type="button">
          A Button
        </Button>
      </p>
      <p>
        <Button el="anchor" href="https://example.com">
          An Anchor
        </Button>
      </p>
    </main>
  );
}

export default App;
