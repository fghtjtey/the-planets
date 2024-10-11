//from react
import { createRoot } from 'react-dom/client'


//from App
import App from './App.jsx'

//index css
import './index.css'

//fonts
import '@fontsource-variable/league-spartan';
import '@fontsource-variable/antonio';

createRoot(document.getElementById('root')).render(<App />)
