import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

export default function Project() {
    return (
        <>
            <section class="projects-section" id="project">
                <h2 class="section-title">Projelerim</h2>
                <div class="projects-container">

                    <div class="project-card">
                        <h3>CareerBridge</h3>
                        <p>
                            CareerBridge, kullanıcıların güvenli bir şekilde kayıt olup giriş yapabildiği, rollerine
                            göre yönlendirildiği ve yapay zeka destekli kariyer danışmanlığı alabileceği modern
                            bir web uygulamasıdır. Kullanıcılar, ChatGPT ile entegre çalışan interaktif modül
                            sayesinde mesleki yönelimlerine dair rehberlik alabilir ve kendilerine özel bir kariyer
                            planı oluşturabilir. Uygulama, bireylerin daha bilinçli ve hedef odaklı kariyer kararları
                            almasına yardımcı olmayı hedeflemektedir.
                        </p>
                        <a href="https://github.com/Edaturannn/CareerBridge">Projeye Git</a>
                    </div>

                    <div class="project-card">
                        <h3>MyPersonalSpace</h3>
                        <p>
                            MyPersonalSpace, kullanıcıların güvenli bir şekilde kayıt olup giriş yapabildiği, kendi
                            içeriklerini oluşturup yönetebildiği ve görsel paylaşımlarını bulut ortamında
                            depolayabildiği bir kişisel profil yönetim platformudur. Uygulama, modern web
                            teknolojileri ile inşa edilerek güvenlik, performans ve erişilebilirlik açısından yüksek
                            standartlara sahiptir.
                        </p>
                        <a href="https://github.com/Edaturannn/MyPersonalSpace">Projeye Git</a>
                    </div>

                    <div class="project-card">
                        <h3>Hotel Booking App</h3>
                        <p>
                            Hotel_Project, kullanıcıların online otel rezervasyonu yapabilmesini, yöneticilerin ise
                            otel, oda ve kullanıcı bilgilerini yönetebilmesini sağlayan tam kapsamlı bir otel
                            yönetim sistemidir. Uygulama, kullanıcı ve yönetici panellerine sahip olup, modern
                            yazılım geliştirme prensiplerine uygun olarak tasarlanmıştır. Aynı zamanda sistem,
                            dış servislerle entegre edilerek hem kullanıcı deneyimini hem de yönetsel işlemleri
                            zenginleştirmektedir.
                        </p>
                        <a href="https://github.com/Edaturannn/Hotel_Project">Projeye Git</a>
                    </div>

                </div>
            </section>
        </>
    )
}
