import App from 'app/App'
import 'app/styles/index.scss'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom'
import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit");

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <BrowserRouter basename={'/day-word-client/'}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
)
