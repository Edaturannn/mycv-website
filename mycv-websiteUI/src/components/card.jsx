import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resim from '../assets/img.png'

export default function Card() {
    return (
        <>
            <section class="about-section" id="about">
                <div class="about-container">
                    <div class="about-image">
                        <img src alt="Profil Fotoğrafı" />
                    </div>
                    <div class="about-text">
                        <h1>Ben Kimim?</h1>
                        <p>
                            Ben Eda Turan, Bilecik Şeyh Edebali Üniversitesi Yönetim Bilişim Sistemleri 3. sınıf
                            öğrencisiyim. Yazılım geliştirme alanında hem akademik hem de uygulamalı olarak
                            kendimi geliştirmekteyim. Özellikle ASP.NET Core, Entity Framework, RESTful API
                            mimarisi, güvenli kimlik doğrulama sistemleri ve Docker teknolojileri üzerine
                            odaklanarak projeler geliştiriyorum.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}
