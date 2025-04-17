import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2' // SweetAlert2 importu

const BASE_URL = "http://localhost:5204";

export default function Contact() {
    const form = useForm();

    const craeteData = async (newData) => {
        try {
            const response = await axios.post(BASE_URL + "/api/Messages", newData);
            console.log(response.data);

            // Başarı bildirimi
            Swal.fire({
                title: 'Mesajınız gönderildi!',
                icon: 'success',
                confirmButtonText: 'Tamam'
            });

            form.reset(); // Formu sıfırla
        } catch (error) {
            console.error("Hata oluştu:", error);
            Swal.fire({
                title: 'Hata!',
                text: 'Mesaj gönderilirken bir sorun oluştu.',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }
    }

    const handleSubmit = form.handleSubmit((data) => {
        craeteData({ ...data, subject: "iletişim" });
    });

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Bana Ulaşın</h2>
            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Adınız Soyadınız" required {...form.register("name")} />
                    <input type="email" placeholder="E-posta Adresiniz" required {...form.register("email")} />
                    <textarea rows="5" placeholder="Mesajınız" required {...form.register("messages")}></textarea>
                    <button type="submit">Gönder</button>
                </form>

                <div className="social-links">
                    <a href="https://github.com/Edaturannn" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/eda-turan-ba3413272/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </section>
    );
}
