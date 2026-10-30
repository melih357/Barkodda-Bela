<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#09110e">
  <title>Barkodda Bela — Gece Vardiyası</title>
  <link rel="stylesheet" href="assets/style.css">
  <link rel="stylesheet" href="assets/theme.css">
</head>
<body>
  <div id="noise" aria-hidden="true"></div>
  <div id="toast" role="status" aria-live="polite"><b id="toastIcon">✓</b><span></span></div>

  <main id="menu" class="screen active" aria-label="Ana menü">
    <div class="menu-world" aria-hidden="true">
      <div class="store-sign"><i></i><span>24 SAAT</span><i></i></div>
      <div class="menu-window"><div class="rain"></div><div class="window-glow"></div></div>
      <div class="menu-shelves shelf-a"></div><div class="menu-shelves shelf-b"></div>
      <div class="menu-counter"><div class="menu-register">₺ 00.00</div></div>
    </div>
    <section class="menu-card">
      <div class="brand-mark"><span class="open-dot"></span><b data-i18n="openAllNight">7/24 AÇIK</b><small data-i18n="noExit">ÇIKIŞ GARANTİSİ YOK</small></div>
      <h1>BARKODDA <span>BELA</span></h1>
      <p class="menu-subtitle" data-i18n="tagline">Ürünü okut. Müşteriyi sorgula. Sabahı gör.</p>
      <div class="menu-actions">
        <button class="primary menu-main" id="newGame"><span>▶</span><b data-i18n="newGame">YENİ VARDİYA</b><small data-i18n="newGameHint">Hikâyeye başla</small></button>
        <button id="continueGame"><span>↻</span><b data-i18n="continue">DEVAM ET</b></button>
        <button data-open="settings"><span>⚙</span><b data-i18n="settings">AYARLAR</b></button>
        <button data-open="rules"><span>▤</span><b data-i18n="rulesBook">KURALLAR</b></button>
        <button data-open="account"><span>♙</span><b data-i18n="account">HESAP</b></button>
      </div>
      <div class="menu-tip"><span>!</span><p><b data-i18n="firstShift">İlk vardiyan mı?</b><br><small data-i18n="tutorialPromise">Oyun başladığında kısa eğitim seni yönlendirecek.</small></p></div>
    </section>
    <footer><span>v4.0 — LIVING SHIFT EDITION</span><span class="footer-status"><i></i><span data-i18n="autosaveReady">OTOMATİK KAYIT HAZIR</span></span></footer>
  </main>

  <main id="game" class="screen" aria-label="Oyun ekranı">
    <header class="hud">
      <div class="night-clock"><div><small id="nightLabel">GECE 1</small><span id="shiftStatus">VARDİYA BAŞLADI</span></div><strong id="clock">00:00</strong></div>
      <div class="hud-objective"><small data-i18n="currentTask">ŞU ANKİ GÖREV</small><b id="objective">Müşterinin ürünlerini okut</b></div>
      <div class="meters">
        <span class="meter money"><i>₺</i><small data-i18n="cash">KASA</small><b id="money">2500</b></span>
        <span class="meter salary"><i>◈</i><small>MAAŞ</small><b id="salary">0</b></span>
        <span class="meter reputation"><i>★</i><small data-i18n="reputation">İTİBAR</small><b id="rep">50</b></span>
        <span class="meter suspicion"><i>◉</i><small data-i18n="suspicion">ŞÜPHE</small><b id="susp">0</b></span>
      </div>
      <button id="viewToggle" class="icon-button view-toggle" aria-label="Kamera görünümünü değiştir"><span>1Ş</span><small>GÖRÜŞ</small></button>
      <button id="pauseBtn" class="icon-button" aria-label="Oyunu duraklat"><span>Ⅱ</span><small>ESC</small></button>
    </header>

    <section class="game-layout">
      <aside class="side" aria-label="Bölümler">
        <div class="side-brand">BB</div>
        <button class="loc active" data-loc="checkout"><span>▣</span><b data-i18n="checkout">KASA</b><kbd>K</kbd></button>
        <button class="loc" data-loc="market"><span>⌂</span><b data-i18n="market">MARKET</b><kbd>M</kbd></button>
        <button class="loc" data-loc="cameras"><span>◉</span><b data-i18n="cameras">KAMERA</b><kbd>C</kbd></button>
        <button class="loc" data-loc="storage"><span>▤</span><b data-i18n="storage">DEPO</b><kbd>D</kbd></button>
        <button class="loc" data-loc="office"><span>▧</span><b data-i18n="office">OFİS</b><kbd>O</kbd></button>
        <button class="side-help" id="helpBtn" aria-label="Eğitimi aç">?</button>
      </aside>

      <section class="play-area">
        <div class="location-head">
          <div><small id="locationEyebrow">ÖN KASA • KAMERA 01</small><h2 id="locationTitle">Kasa Alanı</h2></div>
          <div class="location-state"><i></i><span id="locationState">Alan güvenli</span></div>
        </div>

        <div id="scene" class="scene checkout" aria-live="polite">
          <div class="scene-vignette"></div>
          <div class="checkout-scene scene-layer">
            <div class="store-backdrop"><div class="fluorescent"><i></i></div><div class="price-board"><span>SU</span><b>₺15</b><span>EKMEK</span><b>₺22</b><span>KAHVE</span><b>₺45</b></div><div class="night-window"><div class="rain"></div><span>OPEN</span></div><div class="entry-door"><i></i><b>GİRİŞ</b></div><div class="back-shelves"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
            <div class="customer-walker" id="customerWalker" aria-hidden="true"><div class="walker-head"></div><div class="walker-body"></div><i class="walker-leg left"></i><i class="walker-leg right"></i><b class="walker-bag"></b></div>
            <div class="customer-wrap" id="customerWrap">
              <div class="speech" id="speech"><span></span><i></i></div>
              <div class="anomaly" id="anomalyMark"><i></i><b>!</b></div>
              <div class="customer" id="customerAvatar">
                <div class="customer-shadow"></div><div class="hair"></div><div class="ear left"></div><div class="ear right"></div>
                <div class="head"><i class="eye left"></i><i class="eye right"></i><em class="nose"></em><b class="mouth"></b></div>
                <div class="neck"></div><div class="body"><i class="collar left"></i><i class="collar right"></i><span class="badge"></span></div>
              </div>
            </div>
            <div class="counter">
              <div class="counter-edge"></div>
              <div class="scanner-unit"><small data-i18n="scanHere">BURADA OKUT</small><button class="scanner" id="scanner" aria-label="Barkod okuyucu"><i></i><span>BARKOD</span></button><em id="scanStatus">HAZIR</em></div>
              <div class="belt-wrap"><div class="belt-lines"></div><div id="belt" class="belt"></div><small id="beltHint">Ürüne tıkla ve barkoddan geçir</small></div>
              <div class="register"><small data-i18n="total">TOPLAM</small><div id="total">₺0</div><span id="scanCount">0 / 0 ÜRÜN</span></div>
            </div>
          </div>

          <div class="market-scene scene-layer">
            <div class="aisle-sign"><small>REYON 03</small><b>ATIŞTIRMALIK & İÇECEK</b></div>
            <div class="aisle aisle-left"><div class="shelf-row"><i></i><i></i><i></i><i></i></div><div class="shelf-row"><i></i><i></i><i></i><i></i></div><div class="shelf-row"><i></i><i></i><i></i><i></i></div></div>
            <div class="aisle aisle-right"><div class="shelf-row"><i></i><i></i><i></i></div><div class="shelf-row"><i></i><i></i><i></i></div><div class="shelf-row"><i></i><i></i><i></i></div></div>
            <div class="market-floor"></div><div class="scene-worker" id="marketWorker" aria-hidden="true"><span></span><i></i><i></i><b></b></div><button class="scene-hotspot stock-hotspot" id="stockHotspot" data-scene-action="stock"><i>!</i><span><b data-i18n="lowStock">EKSİK STOK</b><small id="stockHint" data-i18n="checkShelf">Rafı kontrol et</small></span></button>
          </div>

          <div class="cameras-scene scene-layer">
            <div class="cctv-grid">
              <button class="feed active" data-cam="01"><span class="feed-label">CAM 01 • KASA</span><i class="rec">REC</i><div class="feed-checkout"><i></i><b></b></div><div class="scanline"></div></button>
              <button class="feed" data-cam="02"><span class="feed-label">CAM 02 • GİRİŞ</span><i class="rec">REC</i><div class="feed-door"><i></i><b></b></div><div class="scanline"></div></button>
              <button class="feed" data-cam="03"><span class="feed-label">CAM 03 • REYON</span><i class="rec">REC</i><div class="feed-aisle"><i></i><b></b></div><div class="scanline"></div></button>
              <button class="feed danger-feed" data-cam="04"><span class="feed-label">CAM 04 • ARKA KAPI</span><i class="rec">SİNYAL ZAYIF</i><div class="feed-back"><i></i><b>?</b></div><div class="scanline"></div></button>
            </div>
            <div class="camera-focus"><span id="cameraFocusLabel">CAM 01 • KASA</span><b id="cameraFocusStatus">HAREKET: NORMAL</b><i></i></div>
            <div class="security-incident" id="securityIncident" hidden>
              <div class="incident-live"><i></i><span>CANLI OLAY</span><b id="incidentTimer">00:18</b></div>
              <div class="incident-person" id="incidentPerson"><span></span><i></i><b id="incidentBadge">?</b></div>
              <div class="incident-copy"><small>CAM 04 • ARKA KAPI</small><h3 id="incidentTitle">Yetkisiz giriş olabilir</h3><p id="incidentText">Kişiyi dikkatlice incele. Personelse yanlış alarm maaşından kesilir.</p></div>
              <div class="incident-actions"><button id="markStaff"><span>▣</span><b>PERSONEL OLARAK İŞARETLE</b></button><button id="callPolice" class="police-call"><span>☎</span><b>POLİSİ ÇAĞIR</b></button></div>
            </div>
            <div class="police-response" id="policeResponse" aria-hidden="true"><div class="police-car"><i></i><b>POLİS</b><em></em></div><div class="police-officer"><span></span><i></i></div><div class="escorted-suspect"><span></span><i></i></div><strong>ŞÜPHELİ GÖZALTINA ALINDI</strong></div>
            <div class="camera-console"><span><i></i> CANLI KAYIT</span><b id="cameraTime">00:00:00</b><small data-i18n="cameraHint">Detay için bir kamera görüntüsüne tıkla</small></div>
          </div>

          <div class="storage-scene scene-layer">
            <div class="storage-light"></div><div class="storage-fan"><i></i><i></i><i></i></div><div class="storage-shelf left"><div><i></i><i></i></div><div><i></i><i></i></div><div><i></i><i></i></div></div><div class="storage-shelf right"><div><i></i><i></i></div><div><i></i><i></i></div><div><i></i><i></i></div></div>
            <div class="storage-door"><span>PERSONEL HARİCİ GİRİLMEZ</span><i></i></div>
            <div class="scene-worker" id="storageWorker" aria-hidden="true"><span></span><i></i><i></i><b></b></div>
            <button class="generator" data-scene-action="generator"><i></i><span><b>JENERATÖR</b><small id="generatorState">ÇALIŞIYOR • %86</small></span></button>
            <button class="supply-crate" id="supplyCrate" data-scene-action="crate"><i>3×</i><span><b>SÜT KOLİSİ</b><small>Rafa götürmek için al</small></span></button>
            <button class="scene-hotspot box-hotspot" data-scene-action="box"><i>?</i><span><b data-i18n="unmarkedBox">İŞARETSİZ KUTU</b><small data-i18n="inspectBox">İncelemek için tıkla</small></span></button>
          </div>

          <div class="office-scene scene-layer">
            <div class="office-wall"><div class="case-board"><b>VARDİYA NOTLARI</b><span class="photo p1"></span><span class="photo p2"></span><span class="note n1">03:33<br>KAPIYI AÇMA</span><span class="note n2">AYNAYI<br>KONTROL ET</span><i></i><em></em></div><div class="wall-clock"><i></i><b></b></div><div class="office-lamp"><i></i></div></div>
            <div class="office-desk"><button class="rules-object" data-open="rules"><span>GECE<br>KURALLARI</span><i></i></button><div class="computer"><div><span>BB-OS</span><b>KAMERA SİSTEMİ<br>BAĞLI</b><em>_</em></div><i></i></div><button class="file-object" data-scene-action="files"><i></i><span>ESKİ PERSONEL<br>DOSYALARI</span></button><button class="locker-object" data-open="staffShop"><i></i><span>PERSONEL<br>DOLABI</span></button><div class="desk-mug"><i></i></div></div>
          </div>
          <div class="player-avatar" id="playerAvatar" aria-hidden="true"><span class="player-head"></span><span class="player-body"><i>BB</i></span><b class="player-arm left"></b><b class="player-arm right"></b><em class="player-leg left"></em><em class="player-leg right"></em><strong id="carriedItem"></strong></div>
          <div class="first-person-hands" aria-hidden="true"><i class="hand-left"></i><i class="hand-right"></i><b id="heldItem"></b></div>
          <div class="scene-transition" aria-hidden="true"></div>
        </div>

        <div class="shift-flow" aria-label="Satış adımları">
          <div class="flow-step active" data-flow="scan"><i>1</i><span><b data-i18n="scanProducts">ÜRÜNLERİ OKUT</b><small id="flowScan">0/0 tamamlandı</small></span></div>
          <em></em><div class="flow-step" data-flow="inspect"><i>2</i><span><b data-i18n="checkCustomer">MÜŞTERİYİ KONTROL ET</b><small id="flowInspect">İpucu bekleniyor</small></span></div>
          <em></em><div class="flow-step" data-flow="decide"><i>3</i><span><b data-i18n="makeDecision">KARAR VER</b><small id="flowDecide">Sat veya reddet</small></span></div>
        </div>
      </section>

      <aside class="panel" id="registerPanel">
        <section class="customer-card">
          <div class="card-label"><span data-i18n="customerFile">MÜŞTERİ DOSYASI</span><i id="customerStatus">BEKLİYOR</i></div>
          <div class="customer-id"><div class="id-photo"><span id="idInitial">?</span><i></i></div><div><h2 id="customerName">—</h2><p id="customerDesc">Müşteriyi dikkatlice incele.</p></div></div>
          <div class="risk-row"><span data-i18n="riskAnalysis">RİSK ANALİZİ</span><div><i id="riskBar"></i></div><b id="riskText">BİLİNMİYOR</b></div>
          <div id="clues" class="clues"><p data-i18n="noClue">Henüz bir bulgu yok.</p></div>
        </section>
        <section class="action-section">
          <div class="section-title"><span data-i18n="controls">KONTROLLER</span><small id="actionHint">Önce ürünleri okut</small></div>
          <div class="investigate-actions">
            <button id="inspect"><span>⌕</span><b data-i18n="inspect">İNCELE</b><small data-i18n="inspectHint">Davranışına bak</small></button>
            <button id="cameraCheck"><span>◉</span><b data-i18n="lookCamera">KAMERAYA BAK</b><small data-i18n="cameraActionHint">Görüntüyü karşılaştır</small></button>
            <button id="askId"><span>▣</span><b data-i18n="askId">KİMLİK İSTE</b><small data-i18n="idHint">Bilgileri doğrula</small></button>
          </div>
          <div class="decision-actions">
            <button class="sell" id="completeSale" disabled><span>✓</span><b data-i18n="completeSale">SATIŞI TAMAMLA</b><small id="saleButtonHint">Tüm ürünleri okut</small></button>
            <button class="danger" id="rejectSale"><span>×</span><b data-i18n="rejectSale">SATIŞI REDDET</b></button>
            <button class="alarm" id="alarm"><span>!</span><b data-i18n="soundAlarm">ALARMI ÇALIŞTIR</b><small data-i18n="alarmHint">Sadece ciddi tehlikede</small></button>
          </div>
        </section>
        <section class="rules-peek"><div><span>▤</span><b data-i18n="tonightRule">BU GECEKİ KURAL</b></div><p id="rulePeek">Gölgesi ters yöne düşen müşteriye fiş verme.</p><button data-open="rules" data-i18n="allRules">Tüm kuralları aç →</button></section>
      </aside>
      <aside class="field-panel" id="fieldPanel" aria-live="polite">
        <section class="field-task-card">
          <div class="field-kicker"><span id="fieldTaskType">SAHA GÖREVİ</span><i id="fieldTaskStatus">AKTİF</i></div>
          <div class="task-icon" id="fieldTaskIcon">▤</div>
          <h2 id="fieldTaskTitle">Market turunu tamamla</h2>
          <p id="fieldTaskText">Görev ayrıntıları burada gösterilir.</p>
          <div class="task-progress"><i id="fieldTaskProgress"></i></div>
          <small id="fieldTaskReward">ÖDÜL • +₺20 MAAŞ</small>
          <button class="primary" id="returnCheckout" hidden>KASAYA DÖN <span>→</span></button>
        </section>
        <section class="discipline-card">
          <div><small>HATALI RET</small><b><span id="wrongRejects">0</span> / 3</b></div>
          <div><small>MAAŞ KESİNTİSİ</small><b id="wagePenalty">₺0</b></div>
          <p>3. ve 5. yanlış müşteri kararında vardiya ücretinden kesinti yapılır.</p>
        </section>
        <button class="shop-shortcut" data-open="staffShop"><span>▧</span><div><b>PERSONEL MAĞAZASI</b><small>Maaşınla kalıcı ekipman al</small></div><em>→</em></button>
      </aside>
    </section>

    <footer class="game-footer"><span id="customerProgress">MÜŞTERİ 0 / 5</span><div class="night-progress"><i id="progressBar"></i><b id="progressMarker"></b></div><span id="footerTip">İPUCU: Şüpheli davranışlarda kamerayı kontrol et.</span><span class="autosave"><i></i><span data-i18n="autosave">OTOMATİK KAYIT</span></span></footer>
  </main>

  <div class="modal" id="payment"><div class="window payment-window"><button class="close" aria-label="Kapat">×</button><div class="payment-head"><div class="modal-icon" id="paymentIcon">₺</div><div><small data-i18n="payment">ÖDEME EKRANI</small><h2 id="payTitle">Toplam ₺0</h2></div><span class="payment-method" id="paymentMethod">NAKİT</span></div><div class="customer-payment-line"><i></i><p id="payInfo"></p></div><div class="payment-layout"><section class="payment-terminal"><div class="cash-panel" id="cashPanel"><div class="cash-notes" id="cashNotes"></div><label><span>VERECEĞİN PARA ÜSTÜ</span><input id="changeInput" inputmode="decimal" type="number" min="0" step="0.01" placeholder="0,00"><small id="changeHelp"></small></label></div><div class="card-panel" id="cardPanel" hidden><div class="pos-device"><div><small>BB POS • TEMASSIZ</small><strong id="posDisplay">₺0,00</strong><span>İŞLEM TUTARINI GİR</span></div><i></i><i></i><i></i></div><label><span>POS CİHAZINA GİRİLEN TUTAR</span><input id="cardAmountInput" inputmode="decimal" type="number" min="0" step="0.01" placeholder="0,00"><small id="cardHelp">Fişteki toplamı eksiksiz gir.</small></label></div><button class="confirm-payment" id="confirmPayment"><span>✓</span><b>ÖDEMEYİ ONAYLA</b><small id="confirmPaymentHint">Para üstünü kontrol et</small></button></section><aside class="calculator" aria-label="Mini hesap makinesi"><div class="calculator-title"><span>HESAP MAKİNESİ</span><button id="useCalc" title="Sonucu ödeme alanına aktar">SONUCU AKTAR</button></div><output id="calcDisplay">0</output><div class="calc-keys"><button data-calc="C">C</button><button data-calc="⌫">⌫</button><button data-calc="÷">÷</button><button data-calc="×">×</button><button data-calc="7">7</button><button data-calc="8">8</button><button data-calc="9">9</button><button data-calc="-">−</button><button data-calc="4">4</button><button data-calc="5">5</button><button data-calc="6">6</button><button data-calc="+">+</button><button data-calc="1">1</button><button data-calc="2">2</button><button data-calc="3">3</button><button class="equals" data-calc="=">=</button><button class="zero" data-calc="0">0</button><button data-calc=".">,</button></div></aside></div><div class="receipt-result" id="receiptResult" hidden><span></span><div><b></b><small></small></div></div></div></div>
  <div class="modal" id="pause"><div class="window pause-window"><div class="pause-bars">Ⅱ</div><small data-i18n="shiftPaused">VARDİYA DURAKLATILDI</small><h2 data-i18n="timeNeverStops">Bu markette zaman asla gerçekten durmaz.</h2><button class="primary close" data-i18n="resume">DEVAM ET</button><button data-open="settings" data-i18n="settings">AYARLAR</button><button data-open="controls" data-i18n="controls">KONTROLLER</button><button data-open="staffShop">PERSONEL MAĞAZASI</button><button id="restartNight" data-i18n="restartNight">GECEYİ YENİDEN BAŞLAT</button><button id="toMenu" data-i18n="backMenu">ANA MENÜYE DÖN</button></div></div>
  <div class="modal" id="rules"><div class="window rules-window"><button class="close">×</button><div class="rules-cover"><span>ÖZEL MÜLKİYET</span><h2 data-i18n="rulesBook">KURALLAR DEFTERİ</h2><small id="rulesNight">GECE 1</small></div><div class="paper"><ol id="ruleList"></ol><p class="note">“Kasa açığı verirsen maaşından keserim. Başka bir şey açılırsa beni arama.”</p></div></div></div>
  <div class="modal" id="controls"><div class="window"><button class="close">×</button><small data-i18n="quickGuide">HIZLI REHBER</small><h2 data-i18n="controls">Kontroller</h2><div class="control-grid"><span><i>✦</i><b data-i18n="interact">Etkileşim</b><kbd id="keyInteract">E</kbd></span><span><i>◉</i><b data-i18n="cameras">Kameralar</b><kbd id="keyCamera">C</kbd></span><span><i>▣</i><b data-i18n="checkout">Kasa</b><kbd id="keyRegister">K</kbd></span><span><i>▤</i><b data-i18n="storage">Depo</b><kbd id="keyStorage">D</kbd></span><span><i>▧</i><b data-i18n="office">Ofis</b><kbd id="keyOffice">O</kbd></span><span><i>!</i><b data-i18n="alarm">Alarm</b><kbd id="keyAlarm">A</kbd></span><span><i>Ⅱ</i><b data-i18n="pause">Duraklat</b><kbd>ESC</kbd></span></div></div></div>
  <div class="modal" id="tutorial"><div class="window tutorial-window"><button class="close tutorial-skip" id="skipTutorial" data-i18n="skip">ATLA ×</button><div class="tutorial-visual"><div class="mini-register"><i></i><span></span><b></b></div><div class="tutorial-ring"><span id="tutorialNumber">1</span></div></div><small data-i18n="firstNightGuide">İLK GECE REHBERİ</small><h2 id="tutorialTitle">Kasaya hoş geldin</h2><p id="tutorialText">Ürünleri tek tek okut, müşterinin davranışlarını kontrol et ve kurallara göre karar ver.</p><div class="tutorial-dots"><i class="active"></i><i></i><i></i><i></i><i></i></div><button class="primary" id="tutorialNext">DEVAM ET <span>→</span></button></div></div>
  <div class="modal" id="staffShop"><div class="window shop-window"><button class="close">×</button><div class="shop-head"><div><small>PERSONEL DOLABI • KALICI GELİŞİM</small><h2>Vardiya Kazançlarını Harca</h2><p>Kasa parası değil, yalnızca kazandığın maaş kullanılır.</p></div><div class="salary-wallet"><span>MAAŞ BAKİYESİ</span><b>₺<i id="shopSalary">0</i></b></div></div><div class="shop-grid" id="shopGrid"></div></div></div>
  <div class="modal" id="nightReport"><div class="window report-window"><div class="report-stamp">VARDİYA RAPORU</div><small id="reportNight">GECE 1 TAMAMLANDI</small><h2 id="reportGrade">PERFORMANS: B</h2><div class="report-grid"><div><span>DOĞRU KARAR</span><b id="reportCorrect">0</b></div><div><span>HATALI RET</span><b id="reportWrong">0</b></div><div><span>GÖREV</span><b id="reportTasks">0</b></div><div><span>OLAY</span><b id="reportIncidents">0</b></div></div><div class="pay-slip"><span>BRÜT MAAŞ</span><b id="reportGross">₺0</b><span>KESİNTİ</span><b class="deduction" id="reportPenalty">-₺0</b><strong>NET ÖDEME</strong><em id="reportNet">₺0</em></div><button class="primary" id="nextNight">SONRAKİ GECEYE BAŞLA <span>→</span></button></div></div>
  <div class="modal" id="account"><div class="window"><button class="close">×</button><small data-i18n="cloudSave">KAYIT MERKEZİ</small><h2 data-i18n="accountSave">Hesap ve Kayıt</h2><div id="authForms" class="auth"><form id="loginForm"><h3 data-i18n="login">Giriş Yap</h3><input name="email" type="email" placeholder="E-posta" required><input name="password" type="password" placeholder="Şifre" required><button data-i18n="login">GİRİŞ YAP</button></form><form id="registerForm"><h3 data-i18n="register">Kayıt Ol</h3><input name="username" placeholder="Kullanıcı adı" required><input name="email" type="email" placeholder="E-posta" required><input name="password" type="password" placeholder="Şifre (en az 6)" required><button data-i18n="register">KAYIT OL</button></form></div><div id="accountPanel" hidden><p>Giriş yapan: <b id="username"></b></p><button id="saveGame" data-i18n="saveGame">OYUNU KAYDET</button><button id="loadGame" data-i18n="loadGame">KAYDI YÜKLE</button><button class="danger" id="resetProgress" data-i18n="resetProgress">İLERLEMEYİ SIFIRLA</button><button id="logout" data-i18n="logout">HESAPTAN ÇIK</button></div></div></div>
  <div class="modal" id="settings"><div class="window settings"><button class="close">×</button><small data-i18n="personalize">DENEYİMİ KİŞİSELLEŞTİR</small><h2 data-i18n="settings">Ayarlar</h2><div class="tabs"><button class="active" data-tab="sound">SES</button><button data-tab="language">DİL</button><button data-tab="display">GÖRÜNTÜ</button><button data-tab="gameplay">OYNANIŞ</button><button data-tab="access">ERİŞİLEBİLİRLİK</button><button data-tab="keys">TUŞLAR</button></div><div id="settingsContent"></div><button class="primary apply-settings" id="applySettings" data-i18n="applySettings">AYARLARI UYGULA</button></div></div>
  <script src="assets/app.js"></script>
</body>
</html>
