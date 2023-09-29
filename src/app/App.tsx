import classNames from 'classnames';
import { Suspense } from 'react'
import { AppRouter } from './providers/router';

function App() {

  return (

    <div className={classNames('app')}>
          <Suspense fallback=''>

              <div className='content-page'>

                  <AppRouter />
              </div>
          </Suspense>
      </div>

  );
}

export default App
