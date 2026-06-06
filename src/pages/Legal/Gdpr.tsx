import LegalPageShell, { LegalSection } from './LegalPageShell'

const COMPANY = 'SFP - SERVICE FOR PEOPLE, s. r. o.'

const Gdpr = () => (
  <LegalPageShell
    title="OCHRANA OSOBNÝCH ÚDAJOV"
    subtitle="Informácie o spracúvaní osobných údajov v súlade s nariadením GDPR a zákonom č. 18/2018 Z. z. o ochrane osobných údajov."
  >
    <LegalSection title="1. Prevádzkovateľ">
      <p>
        Prevádzkovateľom osobných údajov je spoločnosť <strong>{COMPANY}</strong>, ktorá prevádzkuje
        autoškolu Zvyky (pobočky Malacky a Bratislava).
      </p>
      <p>
        <strong>Malacky:</strong> Záhorácka 52/24, 901 01 Malacky, e-mail:{' '}
        <a href="mailto:zvykyautoskola@gmail.com" className="text-zvyky-blue hover:text-teal-600">
          zvykyautoskola@gmail.com
        </a>
      </p>
      <p>
        <strong>Bratislava:</strong> Záhradnícka 4882/46, 821 08 Bratislava, e-mail:{' '}
        <a href="mailto:zvykyba@gmail.com" className="text-zvyky-blue hover:text-teal-600">
          zvykyba@gmail.com
        </a>
      </p>
    </LegalSection>

    <LegalSection title="2. Aké údaje spracúvame">
      <p>Spracúvame najmä tieto kategórie osobných údajov:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>identifikačné údaje (meno, priezvisko, dátum narodenia, rodné číslo)</li>
        <li>kontaktné údaje (adresa, telefón, e-mail)</li>
        <li>údaje súvisiace s vodičským kurzom (skupina, termín, stav registrácie)</li>
        <li>údaje z komunikácie s vami (e-maily, telefonické kontakty)</li>
        <li>technické údaje pri návšteve webovej stránky (IP adresa, cookies – viď stránka Cookies)</li>
      </ul>
    </LegalSection>

    <LegalSection title="3. Účel a právny základ spracúvania">
      <p>Vaše osobné údaje spracúvame na tieto účely:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>prihlásenie a vedenie vodičského kurzu (plnenie zmluvy)</li>
        <li>plnenie zákonných povinností (napr. vedenie evidencie žiakov autoškoly)</li>
        <li>komunikácia so záujemcami a žiakmi (oprávnený záujem / súhlas)</li>
        <li>zabezpečenie prevádzky webovej stránky (oprávnený záujem)</li>
      </ul>
    </LegalSection>

    <LegalSection title="4. Doba uchovávania údajov">
      <p>
        Osobné údaje uchovávame po dobu nevyhnutnú na splnenie účelu spracúvania, najdlhšie však
        po dobu stanovenú príslušnými právnymi predpismi. Údaje z registrácie na kurz uchovávame
        po dobu trvania kurzu a následne podľa zákonných požiadaviek.
      </p>
    </LegalSection>

    <LegalSection title="5. Príjemcovia údajov">
      <p>
        Vaše údaje neposkytujeme tretím stranám na marketingové účely. Údaje môžu byť sprístupnené
        len subjektom, ktoré nám poskytujú nevyhnutné služby (napr. hosting webovej stránky,
        IT podpora), a to výlučne v rozsahu potrebnom na plnenie ich úlohy.
      </p>
    </LegalSection>

    <LegalSection title="6. Vaše práva">
      <p>Máte právo:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>požadovať prístup k svojim osobným údajom</li>
        <li>požadovať opravu alebo vymazanie údajov</li>
        <li>požadovať obmedzenie spracúvania</li>
        <li>namietať proti spracúvaniu</li>
        <li>požadovať prenosnosť údajov</li>
        <li>odvolať súhlas so spracúvaním (ak je spracúvanie založené na súhlase)</li>
        <li>podať sťažnosť na Úrad na ochranu osobných údajov SR</li>
      </ul>
      <p>
        Svoje práva môžete uplatniť kontaktovaním prevádzkovateľa na e-mailovej adrese príslušnej
        pobočky uvedenej vyššie.
      </p>
    </LegalSection>

    <LegalSection title="7. Zabezpečenie údajov">
      <p>
        Prijímame primerané technické a organizačné opatrenia na ochranu osobných údajov pred
        neoprávneným prístupom, stratou, zneužitím alebo zverejnením.
      </p>
    </LegalSection>
  </LegalPageShell>
)

export default Gdpr
