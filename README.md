# 🤖 Chatbot React Project

## 🌍 English

This project is a simple chatbot application built with **React**, **HTML**, **CSS**, and **JavaScript**.  
It is designed to interact with AI models (such as Ollama or custom APIs) and provide a web-based interface.

### 🚀 Features
- Interactive chatbot UI
- Easy integration with backend (API or AI models)
- Simple and customizable frontend

### 🛠️ Technologies Used
- React  
- JavaScript (ES6+)  
- HTML5 / CSS3  
- Nginx (for deployment inside Docker container)

### 📦 How to Run (Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/irem864/chatbot-react-project.git
   cd chatbot-react-project
Install dependencies:

bash
Kodu kopyala
npm install
Start the development server:

bash
Kodu kopyala
npm start
Open http://localhost:3000 in your browser.

🐳 Deployment with Docker & Nginx
Build the React app:

bash
Kodu kopyala
npm run build
This creates a build/ folder.

Use the provided Dockerfile with Nginx:

bash
Kodu kopyala
docker build -t chatbot-react-project .
docker run -d -p 8080:80 chatbot-react-project
Visit http://localhost:8080 🎉

🇹🇷 Türkçe
Bu proje React, HTML, CSS ve JavaScript ile geliştirilmiş basit bir sohbet botu uygulamasıdır.
AI modelleri (örneğin Ollama veya kendi API’niz) ile etkileşim kurabilir ve web tabanlı bir arayüz sunar.

🚀 Özellikler
Etkileşimli chatbot arayüzü

Backend (API veya AI modelleri) ile kolay entegrasyon

Basit ve özelleştirilebilir frontend

🛠️ Kullanılan Teknolojiler
React

JavaScript (ES6+)

HTML5 / CSS3

Nginx (Docker container içerisinde yayınlama için)

📦 Çalıştırma (Geliştirme Ortamı)
Reponun kopyasını alın:

bash
Kodu kopyala
git clone https://github.com/irem864/chatbot-react-project.git
cd chatbot-react-project
Bağımlılıkları yükleyin:

bash
Kodu kopyala
npm install
Geliştirme sunucusunu başlatın:

bash
Kodu kopyala
npm start
Tarayıcınızdan http://localhost:3000 adresine gidin.

🐳 Docker & Nginx ile Yayınlama
React uygulamasını build edin:

bash
Kodu kopyala
npm run build
Bu işlem build/ klasörünü oluşturur.

Sağlanan Dockerfile ile imaj oluşturun:

bash
Kodu kopyala
docker build -t chatbot-react-project .
docker run -d -p 8080:80 chatbot-react-project
http://localhost:8080 adresinden uygulamanıza erişebilirsiniz 🎉

yaml
Kodu kopyala

