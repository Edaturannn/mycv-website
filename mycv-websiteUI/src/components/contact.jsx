import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

export default function Contact() {
    return (
        <>
            <section class="contact-section" id="contact">
                <h2 class="section-title">Bana Ulaşın</h2>
                <div class="contact-container">
                    <form class="contact-form">
                        <input type="text" placeholder="Adınız Soyadınız" required />
                        <input type="email" placeholder="E-posta Adresiniz" required />
                        <textarea rows="5" placeholder="Mesajınız" required type="text"></textarea>
                        <button type="submit">Gönder</button>
                    </form>
                    <div class="social-links">
                        <a href="https://github.com/Edaturannn" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/eda-turan-ba3413272/" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}


