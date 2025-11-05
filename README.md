# 💬 Real-Time Chat App

Gerçek zamanlı mesajlaşma deneyimi sunan modern bir chat uygulaması.  
Kullanıcılar anında mesaj gönderip alabilir, giriş yaparak kendi hesaplarıyla oturum açabilir.  
Bu proje, **Firebase Firestore** altyapısı ile gerçek zamanlı veri akışı ve **TailwindCSS** ile modern UI deneyimi sağlar.

---

## 🚀 Özellikler

- ⚡ **Gerçek Zamanlı Mesajlaşma:**  
  Firebase Firestore ile tüm kullanıcılar arasında anında veri senkronizasyonu.

- 🔐 **Kullanıcı Girişi & Kayıt Sistemi:**  
  Firebase Authentication ile güvenli oturum açma ve kullanıcı yönetimi.

- 🧭 **React Router:**  
  Login, Register ve Chat ekranları arasında yönlendirme.

- 🧠 **Context API:**  
  Kullanıcı bilgilerini ve oturum durumunu global olarak yönetme.

- ✅ **Protected Routes:**  
  Sadece giriş yapmış kullanıcıların erişebildiği güvenli sayfa yapısı.

- 🎨 **TailwindCSS:**  
  Responsive, sade ve modern tasarım yapısı.

---

## 🧰 Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|------------|-----------|
| **React + Vite** | Modern ve hızlı front-end yapısı |
| **Firebase (Auth & Firestore)** | Gerçek zamanlı veri tabanı ve kullanıcı yönetimi |
| **TailwindCSS** | Responsive ve minimalist tasarım |
| **React Router** | Sayfa yönlendirme ve koruma sistemi |
| **Context API** | Global state yönetimi |
| **ESLint** | Kod kalitesi ve düzeni |

### EKRAN GÖRÜNTÜSÜ
![EkranKayd2025-11-05170315-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/84cf5aea-b412-44b6-8d0b-27e63e403883)



## ⚙️ Kurulum ve Çalıştırma

Projeyi kendi ortamında çalıştırmak için aşağıdaki adımları izle:

### 1️⃣ Depoyu klonla
git clone https://github.com/bekirsglm/chat-app.git


2️⃣ Proje klasörüne gir
cd chat-app

3️⃣ Gerekli paketleri yükle
npm install

4️⃣ Ortam değişkenlerini oluştur
Ana dizinde .env dosyası oluştur ve kendi Firebase ayarlarını ekle:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


5️⃣ Uygulamayı başlat
npm run dev



🧭 Proje Yapısı
src/
 ┣ components/
 ┃ ┣ ChatRoom.jsx
 ┃ ┣ Message.jsx
 ┃ ┗ Navbar.jsx
 ┣ context/
 ┃ ┗ AuthContext.jsx
 ┣ pages/
 ┃ ┣ Login.jsx
 ┃ ┣ Register.jsx
 ┃ ┗ Chat.jsx
 ┣ firebase.js
 ┣ App.jsx
 ┗ main.jsx


💡 Öğrenilenler

Bu proje sayesinde:

Gerçek zamanlı veri akışı (real-time data flow)

Firebase Authentication yönetimi

React Context API ile global state

Protected routing

Tailwind ile responsive UI tasarımı
konularında derinlemesine pratik kazanıldı.

👥 Katkıda Bulunanlar

@Udemig & Mehmet Can Seyhan & Furkan Evin




