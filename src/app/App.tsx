import classNames from 'classnames';
import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Navbar } from 'widgets/Navbar';
import { useAppDispatch } from './providers/StoreProvider/config/store';
import { getVkBridgeLaunchParamsSelector, getVkBridgeLaunchParamsThunk } from 'entities/vkBridge';
import { useSelector } from 'react-redux';


function App() {

  const dispatch = useAppDispatch()
  const launchParams = useSelector(getVkBridgeLaunchParamsSelector)

  useEffect(() => {
    dispatch(getVkBridgeLaunchParamsThunk())
  }, [dispatch])

  return (

    <div className={classNames('app')}>
      <Suspense fallback=''>
        <Header />
        <div className='content-page'>
          <AppRouter />
        </div>
        <Navbar />
      </Suspense>
    </div>

  );
}

export default App
