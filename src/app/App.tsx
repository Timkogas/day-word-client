import classNames from 'classnames';
import { Suspense } from 'react'
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Navbar } from 'widgets/Navbar';


function App() {

  return (

    <div className={classNames('app')}>
          <Suspense fallback=''>
              <Header/>
              <div className='content-page'>
                  <AppRouter />
              </div>
              <Navbar/>
          </Suspense>
      </div>

  );
}

export default App
