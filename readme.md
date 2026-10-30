# Barkodda Bela v4.0 — WAMP Kurulumu

Bu paket, Barkodda Bela'nın kasa dışındaki vardiya hayatını, güvenlik olaylarını ve çalışan gelişimini ekleyen **Living Shift Edition** sürümüdür.

## Bu sürümde neler değişti?

- Müşteri dosyası ve satış kontrolleri yalnızca kasa bölümünde görünür; başka bölümlerde yerini konuma özel saha görevi paneli alır
- Müşteriler arasında kamera, depo, market ve ofis görevlerinden oluşan vardiya molaları
- CAM 04'te çalışan veya yabancı ayrımı yapılan canlı güvenlik olayı
- Yabancı kişi görüldüğünde polisi çağırma; polis aracı, memur gelişi ve şüphelinin götürülme animasyonu
- Yanlış güvenlik kararlarında itibar ve maaş kesintisi
- 3. ve 5. normal müşteriyi yanlış reddetmede kademeli vardiya maaşı kesintisi
- Kasa parası ile kişisel maaşın birbirinden ayrılması
- Gece sonunda brüt maaş, kesinti, net ödeme ve performans notu gösteren vardiya raporu
- Maaşla alınabilen altı kalıcı ekipman
- Birinci şahıs ve üçüncü şahıs kasiyer görünümü
- Birinci şahısta eller ve taşınan koli; üçüncü şahısta yürüyen ve koli taşıyan kasiyer animasyonu
- Kasa, market, kamera, depo ve ofis için tamamen farklı ve hareketli sahneler
- Sürekli ekran titremesi kaldırıldı; kısa sarsıntı yalnızca vardiyaya girişte gösterilir
- Müşterinin market kapısından kasaya yürümesi, geliş/gidiş, nefes, göz kırpma, konuşma ve anormallik animasyonları
- Hareketli ürün bandı, ürün düşme ve barkod okutma animasyonları
- Müşterinin kendisinin söylediği nakit veya kredi kartı ödeme yöntemi
- Nakitte alınan para ve oyuncunun girdiği para üstü kontrolü
- Kartta fiş toplamının POS cihazına girildiği ayrı ödeme akışı
- Yanlış ödeme işlemlerinde kasa farkı, itibar kaybı ve şüphe artışı
- Ödeme ekranında dört işlem yapabilen mini hesap makinesi
- Gerçek zamanlı görünen dört CCTV kamerası, tarama çizgileri, odak ve hareket durumu
- Eksik rafı kontrol etme, depodan süt kolisi alma, markete taşıma ve rafı doldurma görevi
- Etkileşimli jeneratör, gizemli kutu ve personel dosyaları
- Depo fanı, yürüyen çalışan, koli taşıma; ofiste hareketli saat, bilgisayar, lamba ve kahve buharı
- İlk kez oynayanlar için dört adımlı eğitim
- Oyun sırasında her an görünen **Ürünleri okut → Müşteriyi kontrol et → Karar ver** rehberi
- Sıradaki hareketi söyleyen görev alanı ve durum bildirimleri
- Müşteri dosyası, risk seviyesi ve toplanan kanıtlar
- Barkod, menü, başarı, hata ve alarm ses efektleri
- Türkçe ve İngilizce arayüz
- Animasyon azaltma, parlaklık, kontrast, renk körlüğü ve diğer erişilebilirlik ayarları
- Hesapsız kullanımda tarayıcıya; hesapla kullanımda MySQL'e kayıt

## Gereksinimler

- Windows + WampServer (Apache, PHP 8.0+ ve MySQL)
- Güncel Chrome, Edge veya Firefox

## Kurulum

1. ZIP dosyasını çıkarın.
2. İçindeki `BarkoddaBela` klasörünü `C:\wamp64\www\` klasörüne kopyalayın.
3. Son yol şu şekilde olmalı: `C:\wamp64\www\BarkoddaBela`
4. WampServer'ı çalıştırın; Apache ve MySQL simgesinin yeşil olduğundan emin olun.
5. `http://localhost/phpmyadmin/` adresini açın.
6. **İçe Aktar** bölümünden paketteki `database.sql` dosyasını çalıştırın.
7. MySQL kullanıcı adınız `root`, şifreniz boş ise `.env` hazırdır. Farklıysa `.env` içindeki `DB_USER` ve `DB_PASS` değerlerini değiştirin.
8. Chrome'da şu adresi açın:

   **http://localhost/BarkoddaBela/frontend/**

## İlk oynanış testi

1. **Yeni Vardiya** düğmesine basın.
2. Dört ekranlık kısa eğitimi tamamlayın.
3. Tezgâhtaki bütün ürünlere tıklayarak barkoddan geçirin.
4. **İncele**, **Kameraya Bak** veya **Kimlik İste** ile kanıt toplayın.
5. Normal müşteride satışı tamamlayın; müşteri nakit derse para üstünü, kart derse POS tutarını girin.
6. Ödeme ekranındaki hesap makinesini kullanıp sonucu ödeme alanına aktarın.
7. Hırsız veya sahteciyi reddedin; insan olmayan varlıkta alarmı kullanın.
8. Müşteri ayrıldıktan sonra gösterilen saha görevini tamamlayın.
9. Kamera görevinde personel kartını inceleyin; yabancıysa **Polisi Çağır** düğmesini kullanın.
10. Market görevinde eksik rafı seçin, depodan süt kolisini alın ve rafa geri götürün.
11. Ofiste vardiya dosyasını, depoda jeneratörü kontrol edin.
12. Gece sonu raporundan maaş ve kesintileri inceleyin; ofisteki Personel Dolabı'ndan ekipman alın.
13. Üstteki `1Ş / 3Ş` düğmesiyle kasiyer görünümünü değiştirin.

## Kısayollar

- `K`: Kasa
- `M`: Market
- `C`: Kameralar
- `D`: Depo
- `O`: Ofis
- `A`: Alarm
- `ESC`: Duraklatma menüsü

Tuşlar, ayarlar menüsünden değiştirilebilir.

## Klasörler

- `frontend/`: Oyunun arayüzü, animasyonları ve oynanış kodu
- `backend/`: PHP API, hesap, oturum, kayıt ve kullanıcı ayarları
- `uploads/`: Gelecekte eklenecek içerikler için ayrılmış alan
- `database.sql`: Temiz MySQL kurulumu
- `migration.sql`: Eski kurulumu güncelleme
- `.env`: MySQL bağlantı ayarları

## Sorun giderme

- **Veritabanı hatası:** `database.sql` dosyasını yeniden içe aktarın ve `.env` bilgilerini kontrol edin.
- **Sayfa bulunamadı:** Klasör adının tam olarak `BarkoddaBela` olduğundan emin olun.
- **Ses gelmiyor:** Tarayıcılar sesleri ilk tıklamadan önce engelleyebilir. Oyunda herhangi bir düğmeye tıklayın ve ses ayarını kontrol edin.
- **Animasyonlar yavaş:** Ayarlar → Görüntü → Grafik kalitesini `Düşük` veya `Orta` yapın.
- **Ekran sarsıntısı istenmiyor:** Ayarlar → Görüntü → Ekran titremesini kapatın. Sürekli titreme v4.0'da kaldırılmıştır.
- **Apache portu 80 değil:** Adresi `http://localhost:PORT/BarkoddaBela/frontend/` biçiminde açın.
- **PHP sürümü eski:** WAMP menüsünden PHP 8.0 veya üzerini seçin.
