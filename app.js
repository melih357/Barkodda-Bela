const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>[...p.querySelectorAll(s)];
const API='../backend/api.php?action=';

const products=[
  {tr:'Su',en:'Water',price:15,kind:'water'},{tr:'Ekmek',en:'Bread',price:22,kind:'bread'},
  {tr:'Süt',en:'Milk',price:32,kind:'milk'},{tr:'Cips',en:'Chips',price:30,kind:'chips'},
  {tr:'Kola',en:'Cola',price:35,kind:'cola'},{tr:'Kahve',en:'Coffee',price:45,kind:'coffee'},
  {tr:'Pil',en:'Batteries',price:50,kind:'battery'},{tr:'Konserve',en:'Canned food',price:48,kind:'can'},
  {tr:'Sandviç',en:'Sandwich',price:52,kind:'food'},{tr:'Çikolata',en:'Chocolate',price:29,kind:'chocolate'},
  {tr:'Mum',en:'Candle',price:24,kind:'candle'},{tr:'Sakız',en:'Gum',price:12,kind:'gum'}
];

const people=[
  {name:'Murat Abi',nameEn:'Murat',type:'normal',line:'Kolay gelsin. Yola çıkmadan kahve alayım dedim.',lineEn:'Evening. I wanted coffee before hitting the road.',clue:'Yorgun ama sıradan görünüyor.',clueEn:'He looks tired, but ordinary.',skin:'#b99a7b',hair:'#28241f',shirt:'#6d3435'},
  {name:'Kırmızı Montlu Kadın',nameEn:'Woman in Red',type:'entity',line:'Beni daha önce burada görmedin.',lineEn:'You have never seen me here before.',clue:'Aynada görüntüsü yok.',clueEn:'She has no reflection in the mirror.',skin:'#c99f80',hair:'#391d1c',shirt:'#8c292d'},
  {name:'Aceleci Öğrenci',nameEn:'Student in a Hurry',type:'normal',line:'Abi hızlı olabilir miyiz? Otobüsü kaçıracağım.',lineEn:'Can we be quick? I am going to miss my bus.',clue:'Sürekli saate bakıyor.',clueEn:'He keeps looking at the clock.',skin:'#b78467',hair:'#171d1a',shirt:'#31586a'},
  {name:'Bay Tekrar',nameEn:'Mr. Repeat',type:'entity',line:'Her zamankinden. Her zamankinden. Her zamankinden.',lineEn:'The usual. The usual. The usual.',clue:'Aynı cümleyi durmadan tekrarlıyor.',clueEn:'He repeats the exact same sentence.',skin:'#a98d79',hair:'#34302b',shirt:'#4a5a4f'},
  {name:'Nihat Bey',nameEn:'Mr. Nihat',type:'thief',line:'Ben sadece bakıyorum.',lineEn:'I am only looking.',clue:'Ceketi alışılmadık derecede şişkin.',clueEn:'His coat looks unusually bulky.',skin:'#a77c5f',hair:'#191817',shirt:'#443e42'},
  {name:'Gece Hemşiresi',nameEn:'Night Nurse',type:'normal',line:'Uzun bir nöbetti. Bir su yeter.',lineEn:'It was a long shift. Just water, please.',clue:'Kimliği ve gölgesi normal.',clueEn:'Her ID and shadow are normal.',skin:'#d1a58b',hair:'#5a392e',shirt:'#e2ded2'},
  {name:'Kapısız Adam',nameEn:'The Doorless Man',type:'entity',line:'Kapıyı açmadım. Kapı beni açtı.',lineEn:'I did not open the door. The door opened me.',clue:'Giriş kamerasında görünmüyor.',clueEn:'He does not appear on the entrance camera.',skin:'#9a8e7e',hair:'#181b18',shirt:'#2e3b35'},
  {name:'Kasaba Gazetecisi',nameEn:'Local Reporter',type:'normal',line:'Burada önce çalışan kasiyeri tanıyor muydun?',lineEn:'Did you know the cashier who worked here before?',clue:'Eski çalışanlar hakkında bilgi taşıyor.',clueEn:'She knows something about past employees.',skin:'#bd8f70',hair:'#3f2820',shirt:'#8b6430'},
  {name:'Sahteci Selim',nameEn:'Counterfeit Selim',type:'fraud',line:'Para yeni basıldı, kokusu ondandır.',lineEn:'The money is freshly printed. That is the smell.',clue:'Banknot üzerindeki tarih 2039.',clueEn:'The banknote is dated 2039.',skin:'#b98b6b',hair:'#25211d',shirt:'#56372d'},
  {name:'Sessiz Çocuk',nameEn:'The Silent Child',type:'entity',line:'...',lineEn:'...',clue:'Gölgesi ters yöne düşüyor.',clueEn:'The shadow points in the wrong direction.',skin:'#c6a78b',hair:'#201e1b',shirt:'#48586e'}
];

const rules={
  tr:['Gölgesi ters yöne düşen müşteriye fiş verme.','Aynada görünmeyen müşteriden kimlik isteme; alarmı kullan.','Aynı cümleyi üç kez söyleyen kişiye satış yapma.','Saat 03.33’te arka kapı üç kez vurulursa açma.','Normal müşterileri gereksiz yere kovma. İtibar her şeydir.'],
  en:['Never give a receipt to a customer whose shadow points the wrong way.','Do not ask an invisible reflection for ID; use the alarm.','Refuse anyone repeating the same sentence three times.','If the back door knocks three times at 03:33, do not open it.','Do not reject ordinary customers. Reputation matters.']
};

const dictionary={
  tr:{openAllNight:'7/24 AÇIK',noExit:'ÇIKIŞ GARANTİSİ YOK',tagline:'Ürünü okut. Müşteriyi sorgula. Sabahı gör.',newGame:'YENİ VARDİYA',newGameHint:'Hikâyeye başla',continue:'DEVAM ET',settings:'AYARLAR',rulesBook:'KURALLAR DEFTERİ',account:'HESAP',firstShift:'İlk vardiyan mı?',tutorialPromise:'Oyun başladığında kısa eğitim seni yönlendirecek.',autosaveReady:'OTOMATİK KAYIT HAZIR',currentTask:'ŞU ANKİ GÖREV',cash:'KASA',reputation:'İTİBAR',suspicion:'ŞÜPHE',checkout:'KASA',market:'MARKET',cameras:'KAMERA',storage:'DEPO',office:'OFİS',scanHere:'BURADA OKUT',total:'TOPLAM',lowStock:'EKSİK STOK',checkShelf:'Rafı kontrol et',cameraHint:'Detay için bir kamera görüntüsüne tıkla',unmarkedBox:'İŞARETSİZ KUTU',inspectBox:'İncelemek için tıkla',scanProducts:'ÜRÜNLERİ OKUT',checkCustomer:'MÜŞTERİYİ KONTROL ET',makeDecision:'KARAR VER',customerFile:'MÜŞTERİ DOSYASI',riskAnalysis:'RİSK ANALİZİ',noClue:'Henüz bir bulgu yok.',controls:'KONTROLLER',inspect:'İNCELE',inspectHint:'Davranışına bak',lookCamera:'KAMERAYA BAK',cameraActionHint:'Görüntüyü karşılaştır',askId:'KİMLİK İSTE',idHint:'Bilgileri doğrula',completeSale:'SATIŞI TAMAMLA',rejectSale:'SATIŞI REDDET',soundAlarm:'ALARMI ÇALIŞTIR',alarmHint:'Sadece ciddi tehlikede',tonightRule:'BU GECEKİ KURAL',allRules:'Tüm kuralları aç →',autosave:'OTOMATİK KAYIT',payment:'ÖDEME EKRANI',change:'PARA ÜSTÜ',cashPay:'NAKİT ÖDEME',cardPay:'KART ÖDEME',shiftPaused:'VARDİYA DURAKLATILDI',timeNeverStops:'Bu markette zaman asla gerçekten durmaz.',resume:'DEVAM ET',restartNight:'GECEYİ YENİDEN BAŞLAT',backMenu:'ANA MENÜYE DÖN',quickGuide:'HIZLI REHBER',interact:'Etkileşim',alarm:'Alarm',pause:'Duraklat',skip:'ATLA ×',firstNightGuide:'İLK GECE REHBERİ',cloudSave:'KAYIT MERKEZİ',accountSave:'Hesap ve Kayıt',login:'GİRİŞ YAP',register:'KAYIT OL',saveGame:'OYUNU KAYDET',loadGame:'KAYDI YÜKLE',resetProgress:'İLERLEMEYİ SIFIRLA',logout:'HESAPTAN ÇIK',personalize:'DENEYİMİ KİŞİSELLEŞTİR',applySettings:'AYARLARI UYGULA'},
  en:{openAllNight:'OPEN 24/7',noExit:'EXIT NOT GUARANTEED',tagline:'Scan the goods. Question the customer. See the morning.',newGame:'NEW SHIFT',newGameHint:'Begin the story',continue:'CONTINUE',settings:'SETTINGS',rulesBook:'RULE BOOK',account:'ACCOUNT',firstShift:'First shift?',tutorialPromise:'A short guide will show you what to do.',autosaveReady:'AUTOSAVE READY',currentTask:'CURRENT TASK',cash:'REGISTER',reputation:'REPUTATION',suspicion:'SUSPICION',checkout:'CHECKOUT',market:'MARKET',cameras:'CAMERAS',storage:'STORAGE',office:'OFFICE',scanHere:'SCAN HERE',total:'TOTAL',lowStock:'LOW STOCK',checkShelf:'Check the shelf',cameraHint:'Select a camera feed for details',unmarkedBox:'UNMARKED BOX',inspectBox:'Click to inspect',scanProducts:'SCAN PRODUCTS',checkCustomer:'CHECK CUSTOMER',makeDecision:'MAKE A DECISION',customerFile:'CUSTOMER FILE',riskAnalysis:'RISK ANALYSIS',noClue:'No evidence yet.',controls:'CONTROLS',inspect:'INSPECT',inspectHint:'Read their behavior',lookCamera:'CHECK CAMERA',cameraActionHint:'Compare footage',askId:'ASK FOR ID',idHint:'Verify details',completeSale:'COMPLETE SALE',rejectSale:'REJECT SALE',soundAlarm:'SOUND ALARM',alarmHint:'Serious danger only',tonightRule:"TONIGHT'S RULE",allRules:'Open all rules →',autosave:'AUTOSAVE',payment:'PAYMENT SCREEN',change:'CHANGE',cashPay:'CASH PAYMENT',cardPay:'CARD PAYMENT',shiftPaused:'SHIFT PAUSED',timeNeverStops:'Time never truly stops in this market.',resume:'RESUME',restartNight:'RESTART NIGHT',backMenu:'BACK TO MENU',quickGuide:'QUICK GUIDE',interact:'Interact',alarm:'Alarm',pause:'Pause',skip:'SKIP ×',firstNightGuide:'FIRST NIGHT GUIDE',cloudSave:'SAVE CENTER',accountSave:'Account and Saves',login:'LOG IN',register:'REGISTER',saveGame:'SAVE GAME',loadGame:'LOAD SAVE',resetProgress:'RESET PROGRESS',logout:'LOG OUT',personalize:'PERSONALIZE YOUR EXPERIENCE',applySettings:'APPLY SETTINGS'}
};

const locationCopy={
  tr:{checkout:['ÖN KASA • KAMERA 01','Kasa Alanı','Alan güvenli'],market:['MARKET • REYON 03','Market Reyonları','Bir rafta eksik stok var'],cameras:['GÜVENLİK • 4 CANLI YAYIN','Güvenlik Kameraları','Kamera 04 sinyali zayıf'],storage:['PERSONEL ALANI • B1','Arka Depo','Jeneratör çalışıyor'],office:['PERSONEL ALANI • OFİS','Müdür Ofisi','Eski dosyalar erişilebilir']},
  en:{checkout:['FRONT DESK • CAMERA 01','Checkout Area','Area secure'],market:['MARKET • AISLE 03','Market Aisles','Low stock on one shelf'],cameras:['SECURITY • 4 LIVE FEEDS','Security Cameras','Camera 04 signal weak'],storage:['STAFF AREA • B1','Back Storage','Generator online'],office:['STAFF AREA • OFFICE',"Manager's Office",'Old files available']}
};

const tutorialSlides={
  tr:[['Kasaya hoş geldin','Her müşteri için güvenli döngüyü izle: ürünleri okut, müşteriyi kontrol et ve kurallara göre karar ver.'],['1. Ürünleri okut','Müşteri yürüyerek kasaya geldikten sonra tezgâhtaki ürünleri tek tek barkoddan geçir.'],['2. Kanıt topla','İncele, kameraya bak veya kimlik iste. Kamera ve ofise geçtiğinde müşteri paneli yerini saha görevine bırakır.'],['3. Ödemeyi doğru al','Nakit ödemede para üstünü, kart ödemede POS tutarını gir. Hatalar kasa açığı oluşturur.'],['4. Vardiyayı yönet','Müşteriler arasında depo, raf, kamera ve ofis görevleri gelir. Maaşınla ekipman al; yanlış retlerden kaçın.']],
  en:[['Welcome to the checkout','Follow the safe loop for every customer: scan, investigate and decide using the rules.'],['1. Scan the products','Wait for the customer to walk to the counter, then scan every product.'],['2. Collect evidence','Inspect, check cameras or ask for ID. Away from the register, the customer panel becomes a field-task panel.'],['3. Take the payment','For cash enter the change; for card enter the POS amount. Errors create a register mismatch.'],['4. Run the shift','Between customers, complete storage, shelf, camera and office work. Buy gear with wages and avoid false refusals.']]
};

const fieldTasks=[
  {type:'camera',loc:'cameras',icon:'◉',titleTr:'Arka kapı hareketini incele',titleEn:'Inspect back-door motion',textTr:'CAM 04 bir kişiyi algıladı. Personel kartını kontrol et; yabancıysa polisi çağır.',textEn:'CAM 04 detected a person. Check the staff badge; call police if they are an outsider.',reward:35},
  {type:'stock',loc:'market',icon:'▤',titleTr:'Eksik rafı tamamla',titleEn:'Restock the empty shelf',textTr:'Market rafını kontrol et, depodan doğru koliyi al ve rafa yerleştir.',textEn:'Inspect the shelf, collect the correct crate from storage and restock it.',reward:30},
  {type:'office',loc:'office',icon:'▧',titleTr:'Vardiya dosyasını imzala',titleEn:'Sign the shift log',textTr:'Müdür ofisindeki personel dosyasını aç ve gece kaydını tamamla.',textEn:'Open the staff file in the office and complete the night log.',reward:20},
  {type:'storage',loc:'storage',icon:'⚡',titleTr:'Jeneratörü kontrol et',titleEn:'Inspect the generator',textTr:'Depoya git, jeneratör panelini test et ve sistemi yeniden çalıştır.',textEn:'Go to storage, test the generator panel and bring it back online.',reward:25}
];
const shopItems=[
  {id:'scanner',icon:'▣',nameTr:'Hızlı Barkod Okuyucu',nameEn:'Fast Barcode Scanner',descTr:'Ürün okutma animasyonunu hızlandırır.',descEn:'Speeds up product scanning animation.',price:160},
  {id:'lens',icon:'◉',nameTr:'Net Kamera Lensi',nameEn:'Clear CCTV Lens',descTr:'Kamera olaylarından +₺10 ek görev ücreti kazandırır.',descEn:'Adds ₺10 to camera-task rewards.',price:220},
  {id:'gloves',icon:'✦',nameTr:'İş Eldiveni',nameEn:'Work Gloves',descTr:'Depo ve market görevlerinden +₺10 kazandırır.',descEn:'Adds ₺10 to storage and shelf tasks.',price:130},
  {id:'backpack',icon:'▤',nameTr:'Büyük Taşıma Çantası',nameEn:'Large Carry Bag',descTr:'Stok görevinden +₺15 daha kazandırır.',descEn:'Adds ₺15 to stocking-task rewards.',price:180},
  {id:'thermos',icon:'♨',nameTr:'Gece Termosu',nameEn:'Night Thermos',descTr:'Her yeni geceye +5 itibar ile başlatır.',descEn:'Begin each new night with +5 reputation.',price:90},
  {id:'badge',icon:'★',nameTr:'Kıdemli Personel Kartı',nameEn:'Senior Staff Badge',descTr:'Hatalı ret maaş kesintilerini %25 azaltır.',descEn:'Reduces false-refusal penalties by 25%.',price:300}
];

let settings={language:'tr',master:80,music:true,sfx:true,voices:true,jumpscare:35,quality:'high',brightness:100,resolution:'auto',fullscreen:false,shake:true,blood:true,darkBoost:false,fps:'60',difficulty:'normal',tutorial:true,autosave:true,textTime:5,sensitivity:50,cameraSpeed:50,changeHelp:true,hints:true,viewMode:'first',subtitles:true,subtitleSize:'medium',colorblind:'none',largeText:false,contrast:false,warnings:true,flash:true,fear:'normal',keys:{interact:'E',camera:'C',register:'K',storage:'D',office:'O',alarm:'A'}};
let state={night:1,money:2500,salary:0,rep:50,susp:0,knowledge:0,customerIndex:0,nightCount:5,queue:[],current:null,items:[],total:0,scanned:0,investigations:[],location:'checkout',shiftSeconds:0,paymentMethod:'cash',wrongRefusals:0,wagePenalty:0,correctDecisions:0,tasksDone:0,incidentsResolved:0,upgrades:[],activeTask:null,taskComplete:false};
let loggedUser=null,resetStep=0,activeTab='sound',tutorialIndex=0,clockTimer=null,toastTimer=null,audioContext=null,calcExpression='',paymentLocked=false,stockTask='missing',carryingCrate=false,cameraIncident=null;

try{const savedSettings=JSON.parse(localStorage.getItem('bb-settings')||'null');if(savedSettings)settings={...settings,...savedSettings,keys:{...settings.keys,...(savedSettings.keys||{})}}}catch(e){}

function tr(key){return dictionary[settings.language]?.[key]||key}
function toast(message,type='ok'){
  const box=$('#toast');clearTimeout(toastTimer);box.classList.toggle('error',type==='error');$('#toastIcon').textContent=type==='error'?'!':'✓';$('#toast span').textContent=message;box.classList.add('show');toastTimer=setTimeout(()=>box.classList.remove('show'),Math.max(2200,Number(settings.textTime||5)*700));
}
function openModal(id){if(id==='staffShop')renderShop();$$('.modal').forEach(x=>x.classList.remove('open'));$('#'+id)?.classList.add('open');uiSound('click')}
function closeModals(){$$('.modal').forEach(x=>x.classList.remove('open'))}

function tone(frequency=440,duration=.08,volume=.05,type='sine'){
  if(!settings.sfx||!settings.master)return;
  try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type=type;osc.frequency.value=frequency;gain.gain.value=volume*(Number(settings.master)/100);gain.gain.exponentialRampToValueAtTime(.0001,audioContext.currentTime+duration);osc.connect(gain).connect(audioContext.destination);osc.start();osc.stop(audioContext.currentTime+duration)}catch(e){}
}
function uiSound(kind){if(kind==='scan'){tone(960,.07,.075,'square');setTimeout(()=>tone(1320,.055,.045,'square'),55)}else if(kind==='success'){tone(520,.12,.06);setTimeout(()=>tone(780,.18,.06),100)}else if(kind==='alarm'){tone(170,.28,.12,'sawtooth');setTimeout(()=>tone(130,.35,.1,'sawtooth'),210)}else if(kind==='error'){tone(190,.18,.06,'square')}else tone(360,.035,.025)}

function startGame(reset=true){
  if(reset)state={...state,night:1,money:2500,salary:0,rep:50,susp:0,knowledge:0,wrongRefusals:0,wagePenalty:0,correctDecisions:0,tasksDone:0,incidentsResolved:0,upgrades:[],activeTask:null,taskComplete:false};
  $('#menu').classList.remove('active');$('#game').classList.add('active');closeModals();
  $('#game').classList.remove('entry-rumble');if(settings.shake){void $('#game').offsetWidth;$('#game').classList.add('entry-rumble');setTimeout(()=>$('#game').classList.remove('entry-rumble'),620)}
  startNight();
  if(settings.tutorial&&reset)setTimeout(()=>showTutorial(0),550);
}
function startNight(){
  state.customerIndex=0;state.shiftSeconds=0;state.nightCount=Math.min(5+Math.floor(state.night/2),8);
  state.wrongRefusals=0;state.wagePenalty=0;state.correctDecisions=0;state.tasksDone=0;state.incidentsResolved=0;state.activeTask=null;state.taskComplete=false;cameraIncident=null;
  if(state.upgrades?.includes('thermos'))state.rep=Math.min(100,state.rep+5);
  stockTask='missing';carryingCrate=false;$('#stockHotspot')?.classList.remove('restocked');$('#supplyCrate')?.classList.remove('taken');if($('#stockHint'))$('#stockHint').textContent=settings.language==='tr'?'Rafı kontrol et':'Check the shelf';
  state.queue=Array.from({length:state.nightCount},(_,i)=>people[(i+state.night*2+Math.floor(Math.random()*people.length))%people.length]);
  if(state.night===1)state.queue[0]=people[0];
  $('#rulesNight').textContent=(settings.language==='tr'?'GECE ':'NIGHT ')+state.night;
  $('#rulePeek').textContent=rules[settings.language][(state.night-1)%rules[settings.language].length];
  clearInterval(clockTimer);clockTimer=setInterval(tickClock,1000);goLocation('checkout',false,true);updateHUD();nextCustomer();
  toast(settings.language==='tr'?`Gece ${state.night} başladı. İlk müşterine hazırlan.`:`Night ${state.night} started. Prepare for the first customer.`);
}
function tickClock(){
  if($('.modal.open'))return;state.shiftSeconds+=12;
  const start=60+state.shiftSeconds,hh=Math.floor(start/3600)%6,mm=Math.floor(start/60)%60,ss=start%60;
  $('#clock').textContent=String(hh).padStart(2,'0')+':'+String(mm).padStart(2,'0');
  $('#cameraTime').textContent=[hh,mm,ss].map(x=>String(x).padStart(2,'0')).join(':');
}
function nextCustomer(){
  if(state.customerIndex>=state.nightCount)return finishNight();
  state.activeTask=null;state.taskComplete=false;state.current=state.queue[state.customerIndex];state.items=Array.from({length:1+Math.floor(Math.random()*3)},()=>products[Math.floor(Math.random()*products.length)]);state.total=state.items.reduce((a,p)=>a+p.price,0);state.scanned=0;state.investigations=[];state.paymentMethod=Math.random()<.56?'cash':'card';goLocation('checkout',false,true);renderCustomer();
}
function renderCustomer(){
  const c=state.current,lang=settings.language;
  $('#customerName').textContent=lang==='tr'?c.name:c.nameEn;$('#customerDesc').textContent=lang==='tr'?'Müşteriyi, ürünleri ve kuralları karşılaştır.':'Compare the customer, products and tonight’s rules.';$('#speech span').textContent=lang==='tr'?c.line:c.lineEn;$('#idInitial').textContent=(lang==='tr'?c.name:c.nameEn).trim().charAt(0);
  const wrap=$('#customerWrap');wrap.className='customer-wrap';void wrap.offsetWidth;
  const walker=$('#customerWalker');walker.classList.remove('walking');void walker.offsetWidth;walker.classList.add('walking');
  const avatar=$('#customerAvatar');avatar.style.setProperty('--skin',c.skin);avatar.style.setProperty('--hair',c.hair);avatar.style.setProperty('--shirt',c.shirt);
  $('#clues').innerHTML=`<p>${tr('noClue')}</p>`;$('#riskBar').style.width='8%';$('#riskText').textContent=lang==='tr'?'BİLİNMİYOR':'UNKNOWN';$('#customerStatus').textContent=lang==='tr'?'BEKLİYOR':'WAITING';
  $$('.investigate-actions button').forEach(b=>b.classList.remove('used'));
  $('#belt').innerHTML=state.items.map((p,i)=>`<button class="product ${p.kind}" data-i="${i}" style="animation-delay:${i*.08}s"><span>${lang==='tr'?p.tr:p.en}</span><b>₺${p.price}</b></button>`).join('');$('#belt').classList.add('locked');setTimeout(()=>{$('#belt').classList.remove('locked');$('#objective').textContent=lang==='tr'?'Müşteri hazır — ürünleri okut':'Customer ready — scan the items'},1100);
  $$('.product').forEach(p=>p.onclick=()=>scan(p));
  $('#total').textContent='₺0';$('#scanCount').textContent=`0 / ${state.items.length} ${lang==='tr'?'ÜRÜN':'ITEMS'}`;$('#beltHint').textContent=lang==='tr'?'Ürüne tıkla ve barkoddan geçir':'Click a product to scan it';$('#scanStatus').textContent=lang==='tr'?'HAZIR':'READY';
  $('#completeSale').disabled=true;$('#saleButtonHint').textContent=lang==='tr'?'Tüm ürünleri okut':'Scan all products';updateFlow();updateHUD();
}
function scan(el){
  if(el.classList.contains('scanned'))return;
  el.classList.add('scanned');state.scanned++;const currentTotal=state.items.slice(0).filter((_,i)=>$$('.product')[i]?.classList.contains('scanned')).reduce((a,p)=>a+p.price,0);
  $('#total').textContent='₺'+currentTotal;$('#scanCount').textContent=`${state.scanned} / ${state.items.length} ${settings.language==='tr'?'ÜRÜN':'ITEMS'}`;$('#scanStatus').textContent=settings.language==='tr'?'OKUTULDU':'SCANNED';
  $('.scanner-unit').classList.add('scanning');setTimeout(()=>$('.scanner-unit').classList.remove('scanning'),300);uiSound('scan');updateFlow();
  if(state.scanned===state.items.length){$('#completeSale').disabled=false;$('#saleButtonHint').textContent=settings.language==='tr'?`Toplam ₺${state.total}`:`Total ₺${state.total}`;toast(settings.language==='tr'?'Tüm ürünler okutuldu. Şimdi müşteriyi kontrol et.':'All items scanned. Now investigate the customer.');}
}
function reveal(kind){
  if(state.investigations.includes(kind))return toast(settings.language==='tr'?'Bu kontrolü zaten yaptın.':'You already completed this check.');
  state.investigations.push(kind);const c=state.current;let text;
  if(kind==='id')text=c.type==='normal'?(settings.language==='tr'?'Kimlik bilgileri eşleşiyor.':'ID details match.'):c.type==='fraud'?(settings.language==='tr'?'Kimlik fotoğrafı farklı biri.':'The ID photo belongs to someone else.'):(settings.language==='tr'?'Kimlik numarası 00000000000.':'ID number: 00000000000.');
  else if(kind==='camera')text=c.type==='entity'?(settings.language==='tr'?'Kamera görüntüsünde müşteri yok!':'The customer is missing from the camera feed!'):(settings.language==='tr'?'Kamerada olağan dışı hareket görülmedi.':'No unusual movement on camera.');
  else text=settings.language==='tr'?c.clue:c.clueEn;
  if($('#clues p'))$('#clues').innerHTML='';$('#clues').insertAdjacentHTML('beforeend',`<span>${text}</span>`);
  $('#'+(kind==='id'?'askId':kind==='camera'?'cameraCheck':'inspect')).classList.add('used');
  const danger=c.type!=='normal';if(danger){$('#customerWrap').classList.add('revealed');if(c.type==='entity')$('#customerWrap').classList.add('entity');}
  const risk=Math.min(95,12+state.investigations.length*18+(danger?32:0));$('#riskBar').style.width=risk+'%';$('#riskText').textContent=risk>60?(settings.language==='tr'?'YÜKSEK':'HIGH'):risk>35?(settings.language==='tr'?'ORTA':'MEDIUM'):(settings.language==='tr'?'DÜŞÜK':'LOW');$('#customerStatus').textContent=settings.language==='tr'?'İNCELENDİ':'CHECKED';uiSound(danger?'error':'click');updateFlow();
}
function updateFlow(){
  const scanDone=state.items.length>0&&state.scanned===state.items.length,inspectDone=state.investigations.length>0;
  $$('.flow-step').forEach(x=>x.classList.remove('active','done'));
  if(!scanDone)$('[data-flow="scan"]').classList.add('active');else{$('[data-flow="scan"]').classList.add('done');if(!inspectDone)$('[data-flow="inspect"]').classList.add('active');else{$('[data-flow="inspect"]').classList.add('done');$('[data-flow="decide"]').classList.add('active')}}
  $('#flowScan').textContent=`${state.scanned}/${state.items.length} ${settings.language==='tr'?'tamamlandı':'complete'}`;$('#flowInspect').textContent=inspectDone?(settings.language==='tr'?`${state.investigations.length} kontrol tamam`:`${state.investigations.length} checks done`):(settings.language==='tr'?'İpucu bekleniyor':'Waiting for evidence');
  const objective=!scanDone?(settings.language==='tr'?'Tezgâhtaki ürünleri barkoddan geçir':'Scan the products on the belt'):!inspectDone?(settings.language==='tr'?'Müşteriyi en az bir yöntemle kontrol et':'Check the customer at least once'):(settings.language==='tr'?'Kanıtlara göre satış kararı ver':'Decide using the evidence');
  $('#objective').textContent=objective;$('#actionHint').textContent=!scanDone?(settings.language==='tr'?'Önce ürünleri okut':'Scan products first'):!inspectDone?(settings.language==='tr'?'Bir kanıt topla':'Collect evidence'):(settings.language==='tr'?'Karar vermeye hazır':'Ready to decide');
}

$('#inspect').onclick=()=>reveal('inspect');
$('#cameraCheck').onclick=()=>{goLocation('cameras');setTimeout(()=>reveal('camera'),420)};
$('#askId').onclick=()=>reveal('id');
$('#completeSale').onclick=()=>{
  if(state.scanned<state.items.length)return toast(settings.language==='tr'?'Önce bütün ürünleri barkoddan geçir.':'Scan every product first.','error');
  preparePayment();openModal('payment');
};
function preparePayment(){
  paymentLocked=false;calcExpression='';$('#calcDisplay').textContent='0';$('#receiptResult').hidden=true;$('#confirmPayment').disabled=false;$('#changeInput').value='';$('#cardAmountInput').value='';
  const cash=state.paymentMethod==='cash',paid=cash?Math.ceil((state.total+20+Math.random()*70)/10)*10:state.total;
  $('#payment').dataset.paid=paid;$('#payment').dataset.method=state.paymentMethod;$('#cashPanel').hidden=!cash;$('#cardPanel').hidden=cash;$('#paymentMethod').textContent=cash?(settings.language==='tr'?'NAKİT':'CASH'):(settings.language==='tr'?'KREDİ KARTI':'CARD');$('#paymentMethod').classList.toggle('card',!cash);$('#paymentIcon').textContent=cash?'₺':'▭';
  $('#payTitle').textContent=(settings.language==='tr'?'Ödenecek toplam ':'Amount due ')+`₺${state.total}`;
  $('#payInfo').textContent=cash?(settings.language==='tr'?`“Nakit ödeyeceğim.” Müşteri kasaya ₺${paid} bıraktı.`:`“I will pay cash.” The customer handed you ₺${paid}.`):(settings.language==='tr'?'“Kartla ödeyeceğim.” Fişteki toplamı POS cihazına gir.':'“I will pay by card.” Enter the receipt total into the POS terminal.');
  $('#changeHelp').textContent=settings.changeHelp?(settings.language==='tr'?`İpucu: ${paid} − ${state.total} işlemini hesapla.`:`Hint: calculate ${paid} − ${state.total}.`):'';
  $('#cardHelp').textContent=settings.language==='tr'?`POS’a girmen gereken fiş toplamı: ₺${state.total}`:`Receipt total to enter: ₺${state.total}`;$('#confirmPaymentHint').textContent=cash?(settings.language==='tr'?'Para üstünü kontrol et':'Check the change'):(settings.language==='tr'?'POS tutarını kontrol et':'Check the POS amount');
  $('#cashNotes').innerHTML=makeCashNotes(paid);$('#posDisplay').textContent='₺0,00';setTimeout(()=>$(cash?'#changeInput':'#cardAmountInput')?.focus(),80);
}
function makeCashNotes(amount){
  const notes=[200,100,50,20,10,5];let left=amount,out='';for(const value of notes){while(left>=value){out+=`<span class="banknote n${value}"><small>₺</small><b>${value}</b><i>BB</i></span>`;left-=value}}return out||`<span class="banknote"><b>${amount}</b></span>`;
}
function moneyValue(value){return Math.round((Number(value)||0)*100)/100}
function confirmPayment(){
  if(paymentLocked)return;const cash=$('#payment').dataset.method==='cash',expected=cash?moneyValue(Number($('#payment').dataset.paid)-state.total):moneyValue(state.total),entered=moneyValue(cash?$('#changeInput').value:$('#cardAmountInput').value),difference=moneyValue(Math.abs(expected-entered));
  if((cash?$('#changeInput'):$('#cardAmountInput')).value==='')return toast(settings.language==='tr'?'Önce tutarı gir.':'Enter the amount first.','error');
  paymentLocked=true;$('#confirmPayment').disabled=true;const correct=difference===0,result=$('#receiptResult');result.hidden=false;result.className='receipt-result '+(correct?'correct':'wrong');result.querySelector('span').textContent=correct?'✓':'!';result.querySelector('b').textContent=correct?(settings.language==='tr'?'İŞLEM DOĞRU':'PAYMENT CORRECT'):(settings.language==='tr'?'KASA UYUŞMAZLIĞI':'REGISTER MISMATCH');result.querySelector('small').textContent=correct?(cash?(settings.language==='tr'?'Para üstü doğru verildi.':'Correct change given.'):(settings.language==='tr'?'POS tutarı fişle eşleşti.':'POS matches the receipt.')):(settings.language==='tr'?`Doğru tutar ₺${expected}; ₺${difference} fark oluştu.`:`Correct amount ₺${expected}; difference ₺${difference}.`);
  if(!correct){state.money=Math.max(0,moneyValue(state.money-difference));state.rep=Math.max(0,state.rep-3);state.susp+=2;updateHUD();uiSound('error');if(settings.shake){$('.payment-window').classList.add('terminal-jolt');setTimeout(()=>$('.payment-window').classList.remove('terminal-jolt'),320)}}else uiSound('success');
  setTimeout(()=>{toast(correct?(settings.language==='tr'?'Ödeme doğru alındı.':'Payment accepted.'):(settings.language==='tr'?'Yanlış işlem kaydedildi; kasa ve itibar etkilendi.':'Incorrect payment recorded; register and reputation affected.'),correct?'ok':'error');resolve('sell')},950);
}
$('#confirmPayment').onclick=confirmPayment;
$('#cardAmountInput').addEventListener('input',()=>{$('#posDisplay').textContent='₺'+moneyValue($('#cardAmountInput').value).toFixed(2).replace('.',',')});
$$('[data-calc]').forEach(button=>button.onclick=()=>{
  const key=button.dataset.calc;if(key==='C')calcExpression='';else if(key==='⌫')calcExpression=calcExpression.slice(0,-1);else if(key==='='){try{const safe=calcExpression.replace(/×/g,'*').replace(/÷/g,'/');if(!/^[0-9+\-*/. ()]+$/.test(safe))throw new Error();calcExpression=String(Math.round(Function(`"use strict";return (${safe||0})`)()*100)/100)}catch(e){calcExpression='Hata'}}else{if(calcExpression==='Hata')calcExpression='';calcExpression+=key}$('#calcDisplay').textContent=calcExpression||'0';
});
$('#useCalc').onclick=()=>{const value=Number(calcExpression);if(!Number.isFinite(value))return toast(settings.language==='tr'?'Önce geçerli bir sonuç hesapla.':'Calculate a valid result first.','error');const target=$('#payment').dataset.method==='cash'?$('#changeInput'):$('#cardAmountInput');target.value=value;target.dispatchEvent(new Event('input'));toast(settings.language==='tr'?'Hesap makinesi sonucu aktarıldı.':'Calculator result transferred.')};
$('#rejectSale').onclick=()=>resolve('reject');$('#alarm').onclick=()=>resolve('alarm');

function resolve(decision){
  closeModals();const type=state.current.type;let correct=(type==='normal'&&decision==='sell')||((type==='thief'||type==='fraud')&&decision==='reject')||(type==='entity'&&decision==='alarm');
  if(correct){state.correctDecisions++;state.money+=decision==='sell'?state.total:25;state.rep=Math.min(100,state.rep+2);if(type!=='normal')state.knowledge++;toast(type==='normal'?(settings.language==='tr'?'Satış başarılı. Kasa dengede.':'Sale complete. Register balanced.'):(settings.language==='tr'?'Doğru karar. Belayı içeri almadın.':'Correct call. Trouble stayed outside.'));uiSound('success')}
  else{
    state.rep=Math.max(0,state.rep-6);state.susp+=type!=='normal'?10:4;state.money=Math.max(0,state.money-(type!=='normal'?40:10));
    if(type==='normal'&&decision!=='sell'){
      state.wrongRefusals++;
      const basePenalty=state.wrongRefusals===3?75:state.wrongRefusals===5?150:0,penalty=state.upgrades?.includes('badge')?Math.round(basePenalty*.75):basePenalty;
      if(penalty){state.wagePenalty+=penalty;toast(settings.language==='tr'?`${state.wrongRefusals}. hatalı ret: vardiya maaşından ₺${penalty} kesilecek.`:`False refusal ${state.wrongRefusals}: ₺${penalty} will be deducted from wages.`,'error')}
      else toast(settings.language==='tr'?`Normal müşteriyi yanlış reddettin (${state.wrongRefusals}/3).`:`You falsely refused a normal customer (${state.wrongRefusals}/3).`,'error');
    }else toast(settings.language==='tr'?'Yanlış karar! Tehlikeyi fark edemedin.':'Wrong call! You missed the danger.','error');
    uiSound(decision==='alarm'?'alarm':'error');if(settings.shake)$('#game').classList.add('screen-shake');setTimeout(()=>$('#game').classList.remove('screen-shake'),350)
  }
  $('#customerWrap').classList.add('leaving');state.customerIndex++;updateHUD();localSave();setTimeout(()=>state.customerIndex>=state.nightCount?finishNight():scheduleFieldTask(),980);
}
function finishNight(){
  clearInterval(clockTimer);const completedNight=state.night,gross=150+completedNight*25,net=Math.max(0,gross-state.wagePenalty),grade=state.wrongRefusals===0&&state.correctDecisions>=state.nightCount-1?'A':state.wrongRefusals<3?'B':state.wrongRefusals<5?'C':'D';state.salary+=net;
  $('#reportNight').textContent=(settings.language==='tr'?`GECE ${completedNight} TAMAMLANDI`:`NIGHT ${completedNight} COMPLETE`);$('#reportGrade').textContent=(settings.language==='tr'?'PERFORMANS: ':'PERFORMANCE: ')+grade;$('#reportCorrect').textContent=state.correctDecisions;$('#reportWrong').textContent=state.wrongRefusals;$('#reportTasks').textContent=state.tasksDone;$('#reportIncidents').textContent=state.incidentsResolved;$('#reportGross').textContent='₺'+gross;$('#reportPenalty').textContent='-₺'+state.wagePenalty;$('#reportNet').textContent='₺'+net;state.night++;updateHUD();localSave();openModal('nightReport');uiSound('success');
  if(settings.autosave&&loggedUser)save();
}
function updateHUD(){
  $('#nightLabel').textContent=(settings.language==='tr'?'GECE ':'NIGHT ')+state.night;$('#money').textContent=Math.round(state.money);$('#salary').textContent=Math.round(state.salary||0);$('#rep').textContent=state.rep;$('#susp').textContent=state.susp;$('#wrongRejects').textContent=state.wrongRefusals||0;$('#wagePenalty').textContent='₺'+(state.wagePenalty||0);$('#customerProgress').textContent=(settings.language==='tr'?'MÜŞTERİ ':'CUSTOMER ')+`${Math.min(state.customerIndex+1,state.nightCount)} / ${state.nightCount}`;
  const progress=state.nightCount?state.customerIndex/state.nightCount*100:0;$('#progressBar').style.width=progress+'%';$('#progressMarker').style.left=progress+'%';
}
function scheduleFieldTask(){
  const template=fieldTasks[(state.customerIndex-1)%fieldTasks.length];state.activeTask={...template};state.taskComplete=false;$('#returnCheckout').hidden=true;
  if(template.type==='stock'){stockTask='missing';carryingCrate=false;$('#stockHotspot').classList.remove('restocked');$('#supplyCrate').classList.remove('taken');$('#stockHint').textContent=settings.language==='tr'?'Rafı kontrol et':'Check the shelf'}
  updateFieldPanel(8);goLocation(template.loc,true,true);$('#objective').textContent=settings.language==='tr'?template.titleTr:template.titleEn;
  if(template.type==='camera')setTimeout(startCameraIncident,620);
  toast(settings.language==='tr'?`Müşteri molası: ${template.titleTr}.`:`Customer break: ${template.titleEn}.`);
}
function taskReward(task){let reward=task.reward;if(task.type==='camera'&&state.upgrades?.includes('lens'))reward+=10;if((task.type==='stock'||task.type==='storage')&&state.upgrades?.includes('gloves'))reward+=10;if(task.type==='stock'&&state.upgrades?.includes('backpack'))reward+=15;return reward}
function updateFieldPanel(progress=20){
  const task=state.activeTask,lang=settings.language;if(!task){$('#fieldTaskType').textContent=lang==='tr'?'KASA DIŞI KONTROL':'FIELD CHECK';$('#fieldTaskIcon').textContent='⌕';$('#fieldTaskTitle').textContent=lang==='tr'?'Serbest alan kontrolü':'Free area check';$('#fieldTaskText').textContent=lang==='tr'?'Bu alanı inceleyebilirsin. Müşteri işlemi için kasaya dön.':'Inspect this area, then return to the register for the customer.';$('#fieldTaskReward').textContent=lang==='tr'?'MÜŞTERİ İŞLEMİ DEVAM EDİYOR':'CUSTOMER TRANSACTION IN PROGRESS';$('#fieldTaskProgress').style.width='100%';$('#fieldTaskStatus').textContent='KONTROL';$('#returnCheckout').hidden=false;return}
  $('#fieldTaskType').textContent=lang==='tr'?'MÜŞTERİ ARASI GÖREV':'BETWEEN-CUSTOMER TASK';$('#fieldTaskIcon').textContent=task.icon;$('#fieldTaskTitle').textContent=lang==='tr'?task.titleTr:task.titleEn;$('#fieldTaskText').textContent=lang==='tr'?task.textTr:task.textEn;$('#fieldTaskReward').textContent=(lang==='tr'?'ÖDÜL • +₺':'REWARD • +₺')+taskReward(task)+' '+(lang==='tr'?'MAAŞ':'WAGES');$('#fieldTaskProgress').style.width=progress+'%';$('#fieldTaskStatus').textContent=state.taskComplete?(lang==='tr'?'TAMAMLANDI':'COMPLETE'):(lang==='tr'?'AKTİF':'ACTIVE');$('#returnCheckout').hidden=!state.taskComplete;
}
function completeFieldTask(){if(!state.activeTask||state.taskComplete)return;state.taskComplete=true;const reward=taskReward(state.activeTask);state.salary+=reward;state.tasksDone++;updateFieldPanel(100);updateHUD();localSave();uiSound('success');toast(settings.language==='tr'?`Görev tamamlandı. Maaşa +₺${reward} eklendi. Kasaya dön.`:`Task complete. ₺${reward} added to wages. Return to checkout.`)}
function goLocation(location,animate=true,force=false){
  if(location==='checkout'&&state.activeTask&&!state.taskComplete&&!force)return toast(settings.language==='tr'?'Önce saha görevini tamamla.':'Complete the field task first.','error');
  state.location=location;$('#game').classList.toggle('off-register',location!=='checkout');if(location!=='checkout')updateFieldPanel(state.taskComplete?100:22);$$('.loc').forEach(x=>x.classList.toggle('active',x.dataset.loc===location));const scene=$('#scene');if(animate){scene.classList.add('changing');setTimeout(()=>scene.classList.remove('changing'),430)}scene.className='scene '+location+(animate?' changing':'')+(settings.quality==='low'?' low-quality':'');
  const copy=locationCopy[settings.language][location];$('#locationEyebrow').textContent=copy[0];$('#locationTitle').textContent=copy[1];$('#locationState').textContent=location==='market'&&stockTask==='done'?(settings.language==='tr'?'Raflar tamamen dolu':'Shelves fully stocked'):location==='storage'&&carryingCrate?(settings.language==='tr'?'Süt kolisi alındı':'Milk crate collected'):copy[2];animateWorker(location);uiSound('click');
}
function animateWorker(location){
  const worker=$(location==='market'?'#marketWorker':location==='storage'?'#storageWorker':'#marketWorker'),player=$('#playerAvatar');if(worker){worker.classList.remove('moving','carrying');worker.classList.toggle('carrying',carryingCrate)}player.classList.remove('walking','carrying');void player.offsetWidth;player.classList.toggle('carrying',carryingCrate);document.body.classList.toggle('carrying-item',carryingCrate);if(location!=='checkout')player.classList.add('walking');setTimeout(()=>player.classList.remove('walking'),1080);
}
$$('.loc').forEach(b=>b.onclick=()=>goLocation(b.dataset.loc));
function startCameraIncident(){
  if(!state.activeTask||state.activeTask.type!=='camera'||state.taskComplete)return;cameraIncident={isStaff:Math.random()<.35,resolved:false};const card=$('#securityIncident'),person=$('#incidentPerson');card.hidden=false;person.className='incident-person '+(cameraIncident.isStaff?'staff':'intruder');$('#incidentBadge').textContent=cameraIncident.isStaff?'BB':'?';$('#incidentTitle').textContent=settings.language==='tr'?(cameraIncident.isStaff?'Personel kartı görünüyor':'Kimliği belirsiz kişi'):(cameraIncident.isStaff?'Staff badge visible':'Unknown person');$('#incidentText').textContent=settings.language==='tr'?(cameraIncident.isStaff?'Üniforma ve BB personel kartı eşleşiyor. Polisi çağırmak yanlış alarm sayılır.':'Kişide üniforma veya personel kartı yok. Arka kapıda oyalanıyor.'):(cameraIncident.isStaff?'Uniform and BB staff badge match. Calling police would be a false alarm.':'No uniform or staff badge. The person is lingering by the back door.');$('#incidentTimer').textContent='00:18';uiSound('alarm');
}
function decideCameraIncident(action){
  if(!cameraIncident||cameraIncident.resolved)return;cameraIncident.resolved=true;const correct=(cameraIncident.isStaff&&action==='staff')||(!cameraIncident.isStaff&&action==='police');
  if(correct){state.incidentsResolved++;state.rep=Math.min(100,state.rep+2);if(action==='police'){uiSound('alarm');$('#securityIncident').hidden=true;$('#policeResponse').classList.add('active');setTimeout(()=>{$('#policeResponse').classList.remove('active');completeFieldTask()},5200);toast(settings.language==='tr'?'Polis yolda. Arka kapıyı kilitli tut.':'Police are on the way. Keep the back door locked.')}else{$('#securityIncident').hidden=true;completeFieldTask();toast(settings.language==='tr'?'Personel doğru tanındı. Yanlış alarm önlendi.':'Staff member identified. False alarm avoided.')}}
  else{state.wagePenalty+=60;state.rep=Math.max(0,state.rep-4);$('#securityIncident').hidden=true;updateHUD();completeFieldTask();uiSound('error');toast(settings.language==='tr'?'Yanlış güvenlik kararı: maaştan ₺60 kesinti.':'Wrong security call: ₺60 wage deduction.','error')}
}
$('#markStaff').onclick=()=>decideCameraIncident('staff');$('#callPolice').onclick=()=>decideCameraIncident('police');
$$('.feed').forEach(feed=>feed.onclick=()=>{$$('.feed').forEach(x=>x.classList.remove('active','zooming'));feed.classList.add('active','zooming');const danger=feed.classList.contains('danger-feed');$('#cameraFocusLabel').textContent=feed.querySelector('.feed-label').textContent;$('#cameraFocusStatus').textContent=danger?(settings.language==='tr'?'HAREKET: BELİRSİZ':'MOTION: UNKNOWN'):(settings.language==='tr'?'HAREKET: NORMAL':'MOTION: NORMAL');$('.camera-focus').classList.toggle('danger',danger);setTimeout(()=>feed.classList.remove('zooming'),520);toast((settings.language==='tr'?'Kamera odaklandı: ':'Camera focused: ')+feed.dataset.cam)});
$$('[data-scene-action]').forEach(button=>button.onclick=()=>{
  const action=button.dataset.sceneAction;
  if(action==='stock'){
    if(stockTask==='done')return toast(settings.language==='tr'?'Bu raf tamamlandı.':'This shelf is fully stocked.');
    if(!carryingCrate){stockTask='waiting';$('#stockHint').textContent=settings.language==='tr'?'Depodan 3 süt kolisi getir':'Bring 3 milk cartons from storage';goLocation('storage');toast(settings.language==='tr'?'Raf eksik: Depodaki süt kolisini alıp buraya getir.':'Low stock: take the milk crate from storage and bring it here.');}
    else{stockTask='done';carryingCrate=false;button.classList.add('restocked');$('#stockHint').textContent=settings.language==='tr'?'Raf tamamlandı':'Shelf stocked';$('#supplyCrate').classList.remove('taken');$('#marketWorker').classList.remove('carrying');$('#marketWorker').classList.add('restocking');document.body.classList.remove('carrying-item');state.rep=Math.min(100,state.rep+1);updateHUD();setTimeout(()=>$('#marketWorker').classList.remove('restocking'),900);if(state.activeTask?.type==='stock')completeFieldTask();else toast(settings.language==='tr'?'Raf dolduruldu. +1 itibar.':'Shelf restocked. +1 reputation.');}
  }
  if(action==='crate'){
    if(stockTask!=='waiting')return toast(settings.language==='tr'?'Şu anda bu koliye ihtiyacın yok.':'You do not need this crate right now.');
    if(carryingCrate)return toast(settings.language==='tr'?'Koli zaten elinde.':'You are already carrying the crate.');
    carryingCrate=true;button.classList.add('taken');$('#storageWorker').classList.add('carrying','lifting');setTimeout(()=>$('#storageWorker').classList.remove('lifting'),520);uiSound('success');toast(settings.language==='tr'?'Süt kolisini aldın. Market bölümündeki eksik rafa götür.':'Crate collected. Take it to the low-stock shelf in the market.');setTimeout(()=>goLocation('market'),620);
  }
  if(action==='generator'){button.classList.add('off');$('#generatorState').textContent=settings.language==='tr'?'TEST EDİLİYOR…':'TESTING…';tone(150,.15,.06);setTimeout(()=>{button.classList.remove('off');$('#generatorState').textContent=settings.language==='tr'?'ÇALIŞIYOR • %100':'RUNNING • 100%';tone(420,.15,.06);if(state.activeTask?.type==='storage')completeFieldTask();else toast(settings.language==='tr'?'Jeneratör testi tamamlandı.':'Generator test complete.')},850)}
  if(action==='box')toast(settings.language==='tr'?'Kutunun üzerinde dün gece çalışan kasiyerin adı var.':'The box bears the previous night cashier’s name.');
  if(action==='files'){if(state.activeTask?.type==='office'){button.classList.add('signed');setTimeout(()=>completeFieldTask(),520);toast(settings.language==='tr'?'Vardiya kaydı imzalanıyor…':'Signing shift log…')}else toast(settings.language==='tr'?'Dosyada eski çalışanların vardiya notları var.':'The file contains old employee shift notes.');}
});

function showTutorial(index=0){tutorialIndex=index;const slide=tutorialSlides[settings.language][tutorialIndex];$('#tutorialNumber').textContent=tutorialIndex+1;$('#tutorialTitle').textContent=slide[0];$('#tutorialText').textContent=slide[1];$$('.tutorial-dots i').forEach((x,i)=>x.classList.toggle('active',i===tutorialIndex));$('#tutorialNext').innerHTML=tutorialIndex===4?(settings.language==='tr'?'VARDİYAYA BAŞLA':'START SHIFT'):(settings.language==='tr'?'DEVAM ET <span>→</span>':'CONTINUE <span>→</span>');openModal('tutorial')}
$('#tutorialNext').onclick=()=>{if(tutorialIndex<4)showTutorial(tutorialIndex+1);else{closeModals();toast(settings.language==='tr'?'İlk müşteri yürüyor; kasaya geldiğinde ürünleri okut.':'The first customer is walking in; scan when they reach the counter.')}};
$('#skipTutorial').onclick=closeModals;$('#helpBtn').onclick=()=>showTutorial(0);

function applyViewMode(){const first=settings.viewMode!=='third';document.body.classList.toggle('view-first',first);document.body.classList.toggle('view-third',!first);$('#viewToggle span').textContent=first?'1Ş':'3Ş';$('#viewToggle').classList.toggle('active',!first);$('#viewToggle').setAttribute('aria-label',first?'Üçüncü şahıs görünümüne geç':'Birinci şahıs görünümüne geç')}
$('#viewToggle').onclick=()=>{settings.viewMode=settings.viewMode==='third'?'first':'third';applyViewMode();localStorage.setItem('bb-settings',JSON.stringify(settings));toast(settings.language==='tr'?(settings.viewMode==='first'?'Birinci şahıs görünümü':'Üçüncü şahıs görünümü'):(settings.viewMode==='first'?'First-person view':'Third-person view'))};
function renderShop(){
  $('#shopSalary').textContent=Math.round(state.salary||0);$('#shopGrid').innerHTML=shopItems.map(item=>{const owned=state.upgrades?.includes(item.id),name=settings.language==='tr'?item.nameTr:item.nameEn,desc=settings.language==='tr'?item.descTr:item.descEn;return `<article class="shop-item ${owned?'owned':''}"><i>${item.icon}</i><h3>${name}</h3><p>${desc}</p><button data-buy="${item.id}" ${owned?'disabled':''}>${owned?(settings.language==='tr'?'SATIN ALINDI':'OWNED'):`₺${item.price} • ${settings.language==='tr'?'SATIN AL':'BUY'}`}</button></article>`}).join('');$$('[data-buy]').forEach(button=>button.onclick=()=>buyUpgrade(button.dataset.buy));
}
function buyUpgrade(id){const item=shopItems.find(x=>x.id===id);if(!item||state.upgrades?.includes(id))return;if((state.salary||0)<item.price)return toast(settings.language==='tr'?'Bu ekipman için maaş bakiyen yetmiyor.':'Not enough wage balance for this gear.','error');state.salary-=item.price;state.upgrades=[...(state.upgrades||[]),id];updateHUD();renderShop();localSave();uiSound('success');toast(settings.language==='tr'?`${item.nameTr} satın alındı.`:`${item.nameEn} purchased.`)}
$('#returnCheckout').onclick=()=>{if(state.activeTask&&state.taskComplete){state.activeTask=null;state.taskComplete=false;goLocation('checkout',true,true);setTimeout(nextCustomer,720)}else goLocation('checkout',true,true)};
$('#nextNight').onclick=()=>{closeModals();if(state.night>10){alert(state.knowledge>=5?(settings.language==='tr'?'İYİ SON: Marketin sırrını açığa çıkardın.':'GOOD ENDING: You exposed the market’s secret.'):(settings.language==='tr'?'NORMAL SON: On geceyi atlattın.':'NORMAL ENDING: You survived ten nights.'));state.night=1}startNight()};
$('#pauseBtn').onclick=()=>openModal('pause');$('#restartNight').onclick=()=>{closeModals();startNight()};$('#toMenu').onclick=()=>{clearInterval(clockTimer);$('#game').classList.remove('active');$('#menu').classList.add('active');closeModals();localSave()};$('#newGame').onclick=()=>startGame(true);$('#continueGame').onclick=()=>{const loaded=localLoad();startGame(!loaded)};
$$('[data-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)));$$('.modal .close').forEach(b=>b.addEventListener('click',closeModals));$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)closeModals()}));

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if($('.modal.open'))closeModals();else if($('#game').classList.contains('active'))openModal('pause');return}
  if(!$('#game').classList.contains('active')||$('.modal.open'))return;const k=e.key.toUpperCase();
  if(k===settings.keys.camera)goLocation('cameras');if(k===settings.keys.register)goLocation('checkout');if(k===settings.keys.storage)goLocation('storage');if(k===settings.keys.office)goLocation('office');if(k==='M')goLocation('market');if(k===settings.keys.alarm)$('#alarm').click();
});
document.addEventListener('pointerdown',e=>{const button=e.target.closest('button');if(button&&!button.disabled)uiSound('click')});

const schemas={
  sound:[['range','master','Ana ses / Master volume',0,100],['check','music','Müzik / Music'],['check','sfx','Ses efektleri / Sound effects'],['check','voices','Müşteri konuşmaları / Customer voices'],['range','jumpscare','Ani ses seviyesi / Scare volume',0,100]],
  language:[['select','language','Dil / Language',['tr:Türkçe','en:English']]],
  display:[['select','quality','Grafik kalitesi / Graphics',['low:Düşük','medium:Orta','high:Yüksek']],['range','brightness','Parlaklık / Brightness',55,130],['select','resolution','Ekran çözünürlüğü / Resolution',['auto:Otomatik','1280:1280×720','1920:1920×1080']],['check','fullscreen','Tam ekran / Fullscreen'],['check','shake','Ekran titremesi / Screen shake'],['check','blood','Kan efektleri / Blood'],['check','darkBoost','Karanlık sahneleri aydınlat / Brighten dark scenes'],['select','fps','FPS sınırı / FPS limit',['30:30','60:60','120:120']]],
  gameplay:[['select','difficulty','Zorluk / Difficulty',['story:Hikâye','normal:Normal','hard:Bela']],['select','viewMode','Kasiyer görünümü / Cashier view',['first:Birinci şahıs','third:Üçüncü şahıs']],['check','tutorial','Eğitim bölümü / Tutorial'],['check','autosave','Otomatik kayıt / Autosave'],['range','textTime','Yazı süresi / Text duration',2,12],['range','sensitivity','Fare hassasiyeti / Mouse sensitivity',10,100],['range','cameraSpeed','Kamera geçiş hızı / Camera speed',10,100],['check','changeHelp','Para üstü yardımı / Change help'],['check','hints','Müşteri ipuçları / Customer hints']],
  access:[['check','subtitles','Altyazı / Subtitles'],['select','subtitleSize','Altyazı boyutu / Subtitle size',['small:Küçük','medium:Orta','large:Büyük']],['select','colorblind','Renk körlüğü / Color blindness',['none:Kapalı','blue:Mavi/Sarı','mono:Tek renk']],['check','largeText','Büyük yazı / Large text'],['check','contrast','Yüksek kontrast / High contrast'],['check','warnings','Ani korkutma uyarıları / Scare warnings'],['check','flash','Hızlı ışıkları azalt / Reduce flashing'],['select','fear','Korku seviyesi / Fear level',['low:Düşük','normal:Normal','full:Tam']]],
  keys:[['key','interact','Etkileşim'],['key','camera','Kameralar'],['key','register','Kasa'],['key','storage','Depo'],['key','office','Ofis'],['key','alarm','Alarm']]
};
function renderSettings(){
  const arr=schemas[activeTab];$('#settingsContent').innerHTML=arr.map(x=>{let val=activeTab==='keys'?settings.keys[x[1]]:settings[x[1]],control=x[0]==='check'?`<input aria-label="${x[2]}" data-setting="${x[1]}" type="checkbox" ${val?'checked':''}>`:x[0]==='range'?`<input aria-label="${x[2]}" data-setting="${x[1]}" type="range" min="${x[3]}" max="${x[4]}" value="${val}">`:x[0]==='key'?`<input aria-label="${x[2]}" data-setting="${x[1]}" maxlength="1" value="${val}">`:`<select aria-label="${x[2]}" data-setting="${x[1]}">${x[3].map(o=>{let [v,l]=o.split(':');return `<option value="${v}" ${String(val)===v?'selected':''}>${l}</option>`}).join('')}</select>`;return `<label class="setting-row"><span>${x[2]}</span>${control}</label>`}).join('')
}
$$('.tabs button').forEach(b=>b.onclick=()=>{$$('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeTab=b.dataset.tab;renderSettings()});renderSettings();
$('#applySettings').onclick=()=>{
  $$('#settingsContent [data-setting]').forEach(el=>{let v=el.type==='checkbox'?el.checked:el.value;if(activeTab==='keys')settings.keys[el.dataset.setting]=String(v).toUpperCase();else settings[el.dataset.setting]=v});applySettings();localStorage.setItem('bb-settings',JSON.stringify(settings));if(loggedUser)api('settings','POST',settings);toast(settings.language==='tr'?'Ayarlar kaydedildi.':'Settings saved.');
};
function applySettings(){
  document.documentElement.lang=settings.language;document.documentElement.style.setProperty('--brightness',Number(settings.brightness||100)/100);document.documentElement.style.setProperty('--font-scale',settings.largeText?1.14:1);document.documentElement.style.setProperty('--scene-speed',(1.05-Number(settings.cameraSpeed||50)/100*.65)+'s');
  document.body.classList.toggle('no-screen-shake',!settings.shake);document.body.classList.toggle('reduce-flash',!!settings.flash);document.body.classList.toggle('high-contrast',!!settings.contrast);document.body.classList.toggle('color-blue',settings.colorblind==='blue');document.body.classList.toggle('color-mono',settings.colorblind==='mono');document.body.classList.toggle('dark-boost',!!settings.darkBoost);$('#scene').classList.toggle('low-quality',settings.quality==='low');
  applyViewMode();document.body.classList.toggle('upgrade-fast-scanner',state.upgrades?.includes('scanner'));
  if(settings.fullscreen&&!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>{});if(!settings.fullscreen&&document.fullscreenElement)document.exitFullscreen?.().catch(()=>{});
  $$('[data-i18n]').forEach(el=>{const value=dictionary[settings.language]?.[el.dataset.i18n];if(value)el.textContent=value});$('#ruleList').innerHTML=rules[settings.language].map(r=>`<li>${r}</li>`).join('');$('#rulePeek').textContent=rules[settings.language][(state.night-1)%rules[settings.language].length];
  Object.entries(settings.keys).forEach(([k,v])=>{let el=$('#key'+k[0].toUpperCase()+k.slice(1));if(el)el.textContent=v});if(state.location)goLocation(state.location,false,true);if(state.current)renderCustomer();if(state.location!=='checkout')updateFieldPanel(state.taskComplete?100:25);
}

function localSave(){try{localStorage.setItem('bb-save',JSON.stringify({...state,queue:[],current:null}))}catch(e){}}
function localLoad(){try{const saved=JSON.parse(localStorage.getItem('bb-save')||'null');if(!saved)return false;state={...state,...saved,salary:Number(saved.salary||0),wrongRefusals:Number(saved.wrongRefusals||0),wagePenalty:Number(saved.wagePenalty||0),upgrades:Array.isArray(saved.upgrades)?saved.upgrades:[],activeTask:null,taskComplete:false};return true}catch(e){return false}}
async function api(action,method='GET',data){try{let response=await fetch(API+action,{method,headers:{'Content-Type':'application/json'},body:data?JSON.stringify(data):undefined});return await response.json()}catch(e){return{ok:false,message:settings.language==='tr'?'Sunucuya bağlanılamadı. WAMP ve MySQL açık mı?':'Could not reach server. Are WAMP and MySQL running?'}}}
async function checkUser(){const response=await api('me');loggedUser=response.user;if(loggedUser){$('#authForms').hidden=true;$('#accountPanel').hidden=false;$('#username').textContent=loggedUser.username;const result=await api('settings');if(result.ok&&Object.keys(result.settings).length){settings={...settings,...result.settings,keys:{...settings.keys,...(result.settings.keys||{})}};applySettings()}}}
async function auth(form,action){const data=Object.fromEntries(new FormData(form)),response=await api(action,'POST',data);toast(response.message||(response.ok?'Başarılı':'Hata'),response.ok?'ok':'error');if(response.ok){loggedUser=response.user;checkUser()}}
$('#loginForm').onsubmit=e=>{e.preventDefault();auth(e.target,'login')};$('#registerForm').onsubmit=e=>{e.preventDefault();auth(e.target,'register')};
async function save(){if(!loggedUser)return openModal('account');const response=await api('save','POST',{slot:1,state,settings});toast(response.message||'Kaydedildi',response.ok?'ok':'error')}$('#saveGame').onclick=save;
$('#loadGame').onclick=async()=>{const response=await api('load&slot=1');if(response.ok){state={...state,...response.state};toast(settings.language==='tr'?'Kayıt yüklendi.':'Save loaded.');startGame(false)}else toast(response.message,'error')};
$('#logout').onclick=async()=>{await api('logout','POST',{});location.reload()};$('#resetProgress').onclick=()=>{resetStep++;if(resetStep===1)return toast(settings.language==='tr'?'Eminsen sıfırla düğmesine tekrar bas.':'Click reset again to confirm.','error');state={...state,night:1,money:2500,salary:0,rep:50,susp:0,knowledge:0,wrongRefusals:0,wagePenalty:0,upgrades:[],activeTask:null,taskComplete:false};localSave();if(loggedUser)save();resetStep=0;updateHUD();toast(settings.language==='tr'?'İlerleme sıfırlandı.':'Progress reset.')};

applySettings();checkUser();$('#continueGame').disabled=!localStorage.getItem('bb-save');
