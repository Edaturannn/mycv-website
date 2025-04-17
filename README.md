Bu projeyi, kişisel CV'mi dijital bir platformda modern ve etkileşimli bir şekilde sunmak amacıyla geliştirdim. Backend kısmını ASP.NET Core 9 ile oluşturdum. RESTful API mimarisi sayesinde verileri kontrollü ve güvenli bir şekilde dış dünyaya sundum. Bu API yapısı, React tabanlı kullanıcı arayüzümün dinamik olarak içerikleri API'den almasını sağladı.

Frontend tarafını React kütüphanesiyle geliştirdim ve arayüzü tamamen responsive (mobil uyumlu) olacak şekilde tasarladım. Kullanıcı arayüzündeki verileri Axios kütüphanesiyle backend API'den çektim. Böylece istemci ile sunucu arasında hızlı, senkronize ve modern bir veri alışverişi kurmuş oldum.

İletişim formunun oluşturulmasında react-hook-form kütüphanesinden yararlandım. Bu kütüphane sayesinde form yönetimi daha kolay, temiz ve hatasız bir şekilde gerçekleştirildi. Form verilerinin doğrulanması ve submit işlemleri kullanıcı deneyimini artıracak şekilde basitleştirildi.

Veritabanı yönetimi için projede PostgreSQL kullandım. Veritabanını Docker üzerinde bir container olarak çalıştırdım. Geliştirme sürecinde PostgreSQL’in Docker imajını kullanarak hızlıca ayağa kaldırılabilir bir veritabanı ortamı oluşturdum. Bu sayede uygulamanın farklı ortamlarda kolayca taşınabilir ve yeniden üretilebilir olmasını sağladım.

CORS (Cross-Origin Resource Sharing) yapılandırmasını Program.cs dosyası üzerinden gerçekleştirdim. Tüm servis bağımlılıklarını, middleware ayarlarını ve CORS kurallarını burada tanımladım. Bu yapı sayesinde frontend ve backend farklı portlarda çalışırken aralarındaki iletişimde herhangi bir erişim kısıtı yaşanmadı.

Proje klasör yapısını iki ana başlık altında organize ettim: Backend kodları mycv-websiteAPI, frontend kodları ise mycv-websiteUI klasörlerinde yer alıyor. Bu modüler yapı, kodun okunabilirliğini ve bakımını önemli ölçüde artırdı.

Geliştirme sürecinde temiz kod ilkelerine ve sürdürülebilir mimariye dikkat ettim. Frontend tarafında bileşen bazlı yapı, backend tarafında servis bazlı organizasyon tercih ettim. Hedefim yalnızca çalışan bir proje sunmak değil, aynı zamanda ileride geliştirilmeye açık, test edilebilir ve genişletilebilir bir altyapı oluşturmaktı.

Bu proje, React ve ASP.NET Core 9 teknolojilerinin Docker ve PostgreSQL ile birlikte nasıl entegre çalışabileceğine dair pratik bir örnek sunmakta. Aynı zamanda kişisel portföyümde hem teknik bilgi birikimimi hem de yazılım geliştirme disiplinimi sergileyen önemli bir parça olarak yer almaktadır.
