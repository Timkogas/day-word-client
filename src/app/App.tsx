import classNames from 'classnames';
import { Suspense } from 'react'
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';


function App() {

  return (

    <div className={classNames('app')}>
          <Suspense fallback=''>
              <Header/>
              <div className='content-page'>
                  <AppRouter />
              </div>
          </Suspense>
      </div>

  );
}

export default App
