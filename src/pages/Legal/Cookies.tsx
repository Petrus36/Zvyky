import LegalPageShell, { LegalSection } from './LegalPageShell'

const Cookies = () => (
  <LegalPageShell
    title="COOKIES"
    subtitle="Informácie o používaní súborov cookies na webovej stránke autoškoly Zvyky."
  >
    <LegalSection title="1. Čo sú cookies">
      <p>
        Cookies sú malé textové súbory, ktoré sa ukladajú do vášho zariadenia pri návšteve webovej
        stránky. Umožňujú stránke zapamätať si vaše nastavenia a zlepšiť jej fungovanie.
      </p>
    </LegalSection>

    <LegalSection title="2. Aké cookies používame">
      <p><strong>Nevyhnutné cookies</strong></p>
      <p>
        Tieto cookies sú potrebné na základné fungovanie stránky, napríklad na zapamätanie
        vášho súhlasu s používaním cookies.
      </p>
      <p className="mt-4"><strong>Analytické cookies</strong></p>
      <p>
        Používame analytické nástroje (Vercel Analytics) na meranie návštevnosti a zlepšovanie
        webovej stránky. Tieto údaje sú spracúvané v súhrnnej forme.
      </p>
      <p className="mt-4"><strong>Marketingové cookies</strong></p>
      <p>
        Na úvodnej stránke môžeme používať Google Ads (gtag.js) na meranie efektivity reklám.
        Tieto cookies sa aktivujú len po vašom súhlase.
      </p>
    </LegalSection>

    <LegalSection title="3. Ako spravovať cookies">
      <p>
        Pri prvej návšteve stránky vás požiadame o súhlas s používaním cookies. Súhlas môžete
        kedykoľvek odvolať vymazaním cookies vo vašom prehliadači.
      </p>
      <p>
        Väčšina prehliadačov umožňuje cookies odmietnuť alebo vymazať v nastaveniach. Upozorňujeme,
        že obmedzenie cookies môže ovplyvniť niektoré funkcie stránky.
      </p>
    </LegalSection>

    <LegalSection title="4. Doba platnosti">
      <p>
        Súhlas s cookies ukladáme do lokálneho úložiska vášho prehliadača. Nevyhnutné cookies
        môžu byť uložené po dobu relácie alebo dlhšie podľa ich účelu.
      </p>
    </LegalSection>

    <LegalSection title="5. Kontakt">
      <p>
        Ak máte otázky týkajúce sa cookies, kontaktujte nás na{' '}
        <a href="mailto:zvykyautoskola@gmail.com" className="text-zvyky-blue hover:text-teal-600">
          zvykyautoskola@gmail.com
        </a>{' '}
        (Malacky) alebo{' '}
        <a href="mailto:zvykyba@gmail.com" className="text-zvyky-blue hover:text-teal-600">
          zvykyba@gmail.com
        </a>{' '}
        (Bratislava).
      </p>
    </LegalSection>
  </LegalPageShell>
)

export default Cookies
