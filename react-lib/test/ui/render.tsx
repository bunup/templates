import { createRoot } from 'react-dom/client'
import { App } from './app'

function start() {
	const elem = document.getElementById('root')
	if (!elem) return
	const root = createRoot(elem)
	root.render(<App />)
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', start)
} else {
	start()
}
