import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Eda Turan. Tüm hakları saklıdır.</p>
                <div className="footer-links">
                    <a href="https://github.com/Edaturannn" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/eda-turan-ba3413272/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </footer>
        </>
    )
}
