import LegalPageShell, { LegalSection } from './LegalPageShell'

const COMPANY = 'SFP - SERVICE FOR PEOPLE, s. r. o.'

const ObchodnePodmienky = () => (
  <LegalPageShell
    title="OBCHODNÉ PODMIENKY"
    subtitle="Všeobecné obchodné podmienky pre poskytovanie služieb autoškoly Zvyky."
  >
    <LegalSection title="1. Všeobecné ustanovenia">
      <p>
        Tieto obchodné podmienky upravujú vzťah medzi spoločnosťou <strong>{COMPANY}</strong>{' '}
        (ďalej len „poskytovateľ") a fyzickou osobou prihlásenou na vodičský kurz (ďalej len „žiak").
        Poskytovateľ prevádzkuje autoškolu Zvyky s pobočkami v Malackách a Bratislave.
      </p>
    </LegalSection>

    <LegalSection title="2. Predmet zmluvy">
      <p>
        Predmetom zmluvy je poskytnutie výučby a výcviku v rozsahu zvoleného vodičského kurzu
        (skupina B, A1, A2 a ďalšie podľa aktuálnej ponuky) v súlade s platnými právnymi predpismi
        Slovenskej republiky.
      </p>
    </LegalSection>

    <LegalSection title="3. Prihlásenie na kurz">
      <p>
        Prihlásenie na kurz je možné online prostredníctvom registračného formulára na webovej
        stránke, osobne v priestoroch autoškoly alebo telefonicky. Zmluva vzniká potvrdením
        prihlášky poskytovateľom a úhradou zálohy alebo celého kurzovného podľa dohody.
      </p>
    </LegalSection>

    <LegalSection title="4. Cena a platobné podmienky">
      <p>
        Cena kurzu je uvedená v aktuálnom cenníku na webovej stránke alebo v priestoroch autoškoly.
        Poskytovateľ si vyhradzuje právo cenník meniť; zmena sa nedotýka už uzavretých zmlúv.
        Kurzovné je splatné podľa platobných podmienok dohodnutých pri registrácii.
      </p>
    </LegalSection>

    <LegalSection title="5. Povinnosti žiaka">
      <p>Žiak je povinný:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>dodržiavať termíny výučby a výcviku</li>
        <li>priniesť všetky potrebné dokumenty v stanovených lehotách</li>
        <li>uhradiť kurzovné v dohodnutých termínoch</li>
        <li>správať sa disciplinovane a rešpektovať pokyny inštruktorov</li>
      </ul>
    </LegalSection>

    <LegalSection title="6. Povinnosti poskytovateľa">
      <p>Poskytovateľ sa zaväzuje:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>poskytnúť výučbu a výcvik v rozsahu dohodnutého kurzu</li>
        <li>zabezpečiť kvalifikovaných inštruktorov a technicky spôsobilé vozidlá</li>
        <li>informovať žiaka o termínoch, požiadavkách a priebehu kurzu</li>
      </ul>
    </LegalSection>

    <LegalSection title="7. Storno a zrušenie kurzu">
      <p>
        Žiak môže odstúpiť od zmluvy písomným oznámením. V prípade storna môžu byť uplatnené
        storno poplatky podľa dohody alebo platného cenníka. Poskytovateľ môže kurz zrušiť
        z organizačných dôvodov; v takom prípade bude žiakovi vrátené uhradené kurzovné
        alebo ponúknutý náhradný termín.
      </p>
    </LegalSection>

    <LegalSection title="8. Reklamácie">
      <p>
        Reklamácie je možné uplatniť písomne alebo e-mailom na kontaktnú adresu príslušnej
        pobočky. Poskytovateľ vybaví reklamáciu do 30 dní od jej doručenia.
      </p>
    </LegalSection>

    <LegalSection title="9. Záverečné ustanovenia">
      <p>
        Tieto obchodné podmienky nadobúdajú účinnosť dňom ich zverejnenia na webovej stránke.
        Poskytovateľ si vyhradzuje právo podmienky aktualizovať. Právne vzťahy sa riadia
        právnym poriadkom Slovenskej republiky.
      </p>
    </LegalSection>
  </LegalPageShell>
)

export default ObchodnePodmienky
