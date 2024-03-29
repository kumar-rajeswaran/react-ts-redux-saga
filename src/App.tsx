import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routers'
import './assets/css/app.css'

export default function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}
