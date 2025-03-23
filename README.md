# A Struktúraváltás 3.0 képesítő vizsgájának feladatsora

----
## 1. feladat: JavaScript-függvény megírása (10 pont)

- Telepítsd a teszteléshez szükséges függőségeket
- A `__test__` mappában találod a teszteket, értelmezd őket
- A feladatod az, hogy sikeresen lefussanak a tesztek
- A feladat forrásfájljai: `1-algorithm/main.js` és `index.html`
- Az `index.html` csak a vizuális ellenőrzés lehetőségét adja, a teszt szempontjából lényegtelen a tartalma

### Feladat
Adott egy tömb, amely objektumokat tartalmaz ("buildingList"), amelyben 7 épület adatai találhatók. 
Le szeretnénk szűrni ezeket az épületeket két szempont szerint:
 - az építés éve
 - alapterület   
  
Adott egy "buildingFilter()" metódus. Ebben kell a logikát megírnod:
- A metódus három paramétert kap: az eredeti listát, az évet, az alapterületet
- Azokat az épületeket kell megkeresned, 
amelyek építési éve kisebb az év paraméternél és alapterülete nagyobb a kapott alapterületnél
- A metódus a szűrést követően adja vissza egy leszűrt listában (csak) az épületek címét
- A tökéletes megoldáshoz törekedj a clean code és a funkcionális programozás elveinek akalmazására
- Az automata tesztet az `npm run test:11` paranccsal indíthatod el a repository gyökeréből

----
## 2. feladat: DOM-manipuláció (20 pont)

- Forrásfájl: `2-dom/dom.js`, `index.html`
- Az `index.html` megnyitása, használata csak a vizuális ellenőrzés lehetőségét adja, 
a teszt szempontjából lényegtelen a tartalma
- Adott az `index.html`-ben egy '.container' elem
- Adott egy "changeCards" függvény a `dom.js` fájlban
- Adott egy "changeContainer" függvény a `dom.js` fájlban

### 1. rész
A megadott "changeCards" függvény logikájának megírása

A '.container' elemen belüli 'card' osztályú elemeket vizsgálja meg:
- Ha az elem a 'blue' osztályhoz tartozik, akkor a kártya háttérszíne 'cornflowerblue' legyen,
ha 'yellow', akkor 'orange' legyen, 
ha pedig 'dark', akkor 'navy' legyen
- Az elemekben található h4 elem betűstílusa dőlt legyen
- Az automata tesztet az `npm run test:21` paranccsal indíthatod el a repository gyökeréből

### 2. rész
Manipuláld a '.container' elemének stílusjegyeit a "changeContainer" függvényben:
- Legyen a megjelenése: 'flex'
- A benne lévő kártyák sorba rendeződjenek
- A margin alul-felül 10px, oldalt  'auto' legyen
- Legyen egy 2px vastag,'solid' szürke ('#707d7c') színű kerete (ügyelj a sorrendre)
- Húzd be a belső tartalmat minden oldalról a padding segítségével, értéke legyen 2em
- Az automata tesztet az `npm run test:22` paranccsal indíthatod el a repository gyökeréből
  
----
## 3. feladat: Angular: modell, szerviz és adatok megjelenítése (20 pont)

### 1. rész
- Készen van a vizsga repójában egy Angular-alkalmazás `angular-university-project` néven
- Lépj be, és telepítsd a függőségeket: `npm i`
- Egy egyetemeket nyilvántartó alkalmazás alapjait fogod elkészíteni
- Ehhez alkosd meg a university modelljét az `src/app/model/university.ts` fájlban az alábbi URL-en található JSON alapján:
`https://nettuts.hu/jms/js4-002/universities`
- A változók neve, típusa és sorrendje pontosan egyezzen meg a kapott mintával
- A language ne legyen kötelező
- Az automata tesztet az `npm run test:31` paranccsal indíthatod el 

### 2. rész
- Készítsd el az `src/app/service/university.service.ts` szervizt, amely lekéri egy élő szerverről az egyetemek adatait
- A szerviz egy teljes értékű CRUD-ot valósít meg (a metódusok elnevezései: getAll, get, create, update, delete)
- A szerver elérhetősége: `https://nettuts.hu/jms/<githubname>/universities` (a `<githubname>` helyére kerüljön a Te GitHub-felhasználóneved)
- Az automata tesztet az `npm run test:32` paranccsal indíthatod el 

### 3. rész
- Az App komponensben kérd le az adatokat a szerverről, és jelenítsd meg őket JSON-formátumban az oldalon
- Az automata tesztet az `npm run test:33` paranccsal indíthatod el 


----
## 4. feladat: Angular: modell, szerviz, CRUD, listázás + Bootstrap és SCSS (20 pont)

### 1. rész
- Létrehoztunk egy üres Angular-alkalmazást az `angular-users-project` mappában, itt dolgozz
- Lépj be, és telepítsd a függőségeket: `npm i`
- Egy felhasználókat kezelő alkalmazást kell elkészíteni
- Állítsd be a Bootstrap- (@4.6.1) és Font Awesome-csomagokat (@4.7.0)
- Legyen az alkalmazásban három réteg: class -> service -> component
- Ehhez alkosd meg a user modelljét a következő URL-en található JSON alapján: 
`https://nettuts.hu/jms/<githubname>/users` (a `<githubname>` helyére kerüljön a Te GitHub-felhasználóneved)
- A modell elérési útja legyen: `src/app/model/user.ts`.
- Készítsd el hozzá az `src/app/service/user.service.ts`
service-t, amely egy teljes értékű CRUD-ot valósít meg (a metódusok elnevezései: getAll, get, create, update, delete)
- Az automata tesztet az `npm run test:41` paranccsal indíthatod el 

### 2. rész
- Az adatokat a Bootstrap card osztály segítségével kártyás formában jelenítsd meg a főoldalon (az app.component-ben)
(Routing-ra nincs szükség, minden a főoldalon jelenjen meg)
- Minden user egy card osztályú elemen belül jelenjen meg
- Minden kártyához tartozzon egy warning Bootstrap-osztályú törlés gomb
- A törlés gombra kattintva törlődjön az adatbázisból az adott entitás és frissüljön az oldal
- A törlő metódus neve onDelete legyen, és a teljes user-példányt kapja meg
- Az automata tesztet az `npm run test:42` paranccsal indíthatod el 

### 3. rész
- lg nézetben 5, md nézetben 3, mobilnézetben egy kártya legyen egy sorban
- Állítsd be minden kártya felső margóját 4, az alsó margóját pedig egy egységnyire Bootstrap-osztályok segítségével
- Innentől az `app.component.scss` fájlban dolgozz
- Állítsd be SCSS segítségével, hogy a card elemek minden sarka 5px-nyire legyen lekerekítve
- Importáld be az assets mappában található colors modult
- A kártyák hátterét állítsd be a bg-color változó értékére
- A kártyák szegélye 2px széles és folytonos legyen, és a colors modul border-color értékét vegye fel
- Az automata tesztet az `npm run test:43` paranccsal indíthatod el 

----
## 5. feladat: Angular: szülő-gyermek komponensek interakciója, adatkötések (20 pont)

- Létrehoztunk egy üres Angular-alkalmazást az `angular-accountant-project` mappában, itt dolgozz
- Lépj be, és telepítsd a függőségeket: `npm i`
- Egy számlákat szerkesztő alkalmazást kell kiegészítened

### 1. rész
- Az app.component tartalmaz egy fejlécet és egy '.container' elemet, ahol meg kell jelenítened a szerkesztő űrlapot
- Hozz létre egy új komponenst az `src/app/common/bill-editor/bill-editor.component.ts` útvonalon
- A BillEditor komponens input tulajdonságként várjon egy Bill típusú objektumot
- A BillEditor jelenítsen meg egy űrlapot Bootstrap segítségével
- Az űrlapon az id mező rejtetten legyen beágyazva
- Az orderID mező select legyen, és 1-től 10-ig lehessen értéket választani
- Az amount mező szám típusú legyen, validálása: 1-4 számjegyű, nullánál nagyobb számokat tartalmazhat
- A status mező select legyen, `[new|paid|shipped]` értékeket lehessen választani benne
- Az automata tesztet az `npm run test:51` paranccsal indíthatod el 

### 2. rész
- A BillEditor komponens output tulajdonságként adjon át a szülőnek egy startUpdate nevű eseményt Bill típussal
- A BillEditor-ben minden mezőt kötelező legyen kitölteni
- Sikertelen validálás esetén legyen letiltva a küldés gomb
- Sikeres validálás esetén fusson le az onUpdate metódus, amely a módosított Bill-lel váltsa ki a startUpdate eseményt
- Az automata tesztet az `npm run test:52` paranccsal indíthatod el 

### 3. rész
- Az app.component-be ágyazd be a kész `app-bill-editor` komponenst, és add át neki a currentBill nevű változót
- Az app.component-ben készíts egy onUpdate nevű metódust, amely a kapott Bill alapján frissíti a currentBill változót
- Az app.component-ben íratkozz fel a BillComponent startUpdate eseményére, és futtasd az onUpdate metódust, ha az esemény kiváltódik
- Az automata tesztet az `npm run test:53` paranccsal indíthatod el 

----
## 6. feladat: Angular és Firebase (10 pont)

### 1. rész
- Hozz létre egy teljesen új, üres Angular-alkalmazást a vizsga mappájában, `angular-firebase` néven
- Készíts szabványos routing-ot, két oldal legyen: egy Home és egy About, 
amelyekhez hozd létre a Home és az About elnevezésű komponenst az src/app/page mappában
- A Home komponens a /home, az About a /about elérési útvonalon jelenjen meg
- A Home oldalon egy h1 elemben jelenjen meg ez a szöveg: "Firebase is working perfectly"
- Az About oldalon egy h1 elemben jelenjen meg, hogy "About page"

### 2. rész
- Publikáld az alkalmazást a következő címen a Firebase hosting segítségével:
`<githubname>-angular-firebase.web.app`
