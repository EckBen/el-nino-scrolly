import useScript from './useScript';

function App() {
  useScript(process.env.PUBLIC_URL + '/el_nino.dist.js');

  return (
    <div id="scrolly"></div>
  );
}

export default App;
