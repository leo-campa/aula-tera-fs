import { Link } from 'react-router-dom';

const Sumary = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Componentes Funcional</h1>
        <Link to={'/functional/chapter1'}> Capítulo 1</Link>
        <Link to={'/functional/chapter2'}> Capítulo 2</Link>
        <Link to={'/functional/chapter2/memo'}> Capítulo 2 com Memo</Link>
        <Link to={'/functional/chapter2/use-memo'}>
          {' '}
          Capítulo 2 com useMemo
        </Link>
        <Link to={'/functional/chapter2/use-callback'}>
          {' '}
          Capítulo 2 com useCallback
        </Link>
        <Link to={'/functional/chapter2/use-context'}>
          {' '}
          Capítulo 2 com useContext
        </Link>
        <Link to={'/functional/chapter4'}> Capítulo 4</Link>
        <Link to={'/functional/chapter5'}> Capítulo 5</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Componentes De Classe</h1>
        <Link to={'/class/chapter1'}> Capítulo 1</Link>
        <Link to={'/class/chapter2'}> Capítulo 2</Link>
        <Link to={'/class/chapter2/should-update'}>
          {' '}
          Capítulo 2 com Should Update
        </Link>

        <Link to={'/class/chapter4'}> Capítulo 4</Link>
        <Link to={'/class/chapter5'}> Capítulo 5</Link>
      </div>
    </div>
  );
};

export default Sumary;
