import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { useForm } from "react-hook-form"

const BASE_URL = "http://localhost:5204";

export default function Contact() {
    const form = useForm(); // form objecti oluşturma

    const getAllData = async () => {
        const response = await axios.get(BASE_URL + "/api/Messages");
        console.log(response.data);
    }



    const craeteData = async (newData) => {
        const response = await axios.post(BASE_URL + "/api/Messages", newData);
        console.log(response.data);
    }

    const updateData = async (id, newData) => {
        const response = await axios.put(BASE_URL + "/api/Messages/" + id, newData);
        console.log(response.data);
    }

    useEffect(() => {
        getAllData();
    }
        , []);

    const handleSubmit = form.handleSubmit((data) => {

        craeteData({ ...data, subject: "iletişim" });
    });

    return (
        <>
            <section class="contact-section" id="contact">
                <h2 class="section-title">Bana Ulaşın</h2>
                <div class="contact-container">
                    <form class="contact-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Adınız Soyadınız" required {...form.register("name")} />
                        <input type="email" placeholder="E-posta Adresiniz" required {...form.register("email")} />
                        <textarea rows="5" placeholder="Mesajınız" required type="text"
                            {...form.register("messages")}
                        ></textarea>
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


