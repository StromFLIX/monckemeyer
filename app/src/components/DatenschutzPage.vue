<script setup>
import LegalPage from './LegalPage.vue'
import { consent, grantConsent, denyConsent } from '../consent'
</script>

<template>
  <LegalPage title="Datenschutzerklärung">
    <p>
      Im Rahmen dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der von uns
      erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren.
    </p>
    <p>
      Personenbezogene Daten bezeichnen alle Informationen, die direkt oder indirekt auf Sie persönlich
      beziehbar sind. Dazu zählen beispielsweise Ihr Name, Ihre Anschrift, Ihre E-Mail-Adresse,
      Online-Kennungen und Ihr Nutzerverhalten.
    </p>
    <p>
      Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften,
      Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen oder
      Widerspruch gegen eine bestimmte Datenverarbeitung wenden Sie sich bitte an den nachfolgend
      genannten Verantwortlichen.
    </p>

    <h2>I. Name und Kontaktdaten des Verantwortlichen</h2>
    <p>
      Verantwortlicher im Sinne von Art. 4 Nr. 7 DS-GVO:
    </p>
    <p>
      <strong>Mönckemeyer GmbH</strong><br/>
      Osterstr. 7, 31785 Hameln<br/>
      Vertretungsberechtigter: Dennis Mönckemeyer<br/>
      Tel.: +49 (0)5151 941390 · Fax: +49 (0)5151 941391<br/>
      E-Mail: <a href="mailto:Moenckemeyer.leder@t-online.de">Moenckemeyer.leder@t-online.de</a>
    </p>

    <h2>II. Ihre Rechte</h2>
    <p>Sie haben das Recht unentgeltlich</p>
    <ul>
      <li>eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten von uns verarbeitet werden (Art. 15 DS-GVO),</li>
      <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen (Art. 15 DS-GVO),</li>
      <li>unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer Daten zu verlangen (Art. 16 DS-GVO),</li>
      <li>die Löschung Ihrer gespeicherten Daten zu verlangen (Art. 17 DS-GVO),</li>
      <li>die Einschränkung der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DS-GVO),</li>
      <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DS-GVO),</li>
      <li>eine erteilte Einwilligung jederzeit zu widerrufen.</li>
    </ul>
    <p>
      Sie haben ferner das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde
      (<a href="https://www.ldi.nrw.de" target="_blank" rel="noopener">www.ldi.nrw.de</a>) über die Verarbeitung Ihrer
      personenbezogenen Daten durch uns zu beschweren (Art. 77 DS-GVO).
    </p>

    <h2>III. Bereitstellung der Webseite und Server-Logfiles</h2>
    <p>
      Bei der bloß informatorischen Nutzung unserer Webseite erheben wir die personenbezogenen Daten,
      die Ihr Browser an unseren Server übermittelt. Dies sind insbesondere:
    </p>
    <ul>
      <li>IP-Adresse</li>
      <li>Datum und Uhrzeit des Zugriffs</li>
      <li>Inhalt der Anforderung (konkrete Seite)</li>
      <li>Zugriffsstatus / HTTP-Statuscode</li>
      <li>jeweils übertragene Datenmenge</li>
      <li>Webseite, von der die Anforderung kommt</li>
      <li>Browsertyp, Version, Betriebssystem, Sprache</li>
    </ul>
    <p>
      Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DS-GVO. Die Daten werden gelöscht, sobald sie für den
      Zweck ihrer Erhebung nicht mehr erforderlich sind.
    </p>

    <h2>IV. Einsatz von Cookies</h2>
    <p>
      Auf dieser Webseite werden nur technisch notwendige Cookies eingesetzt. Tracking- oder
      Marketing-Cookies kommen nicht zum Einsatz. Sie können in Ihrem Browser die Annahme von Cookies
      individuell konfigurieren.
    </p>
    <p>Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DS-GVO.</p>

    <h2>V. Webanalyse mit Umami (Einwilligung)</h2>
    <p>
      Zur statistischen Auswertung der Nutzung unserer Webseite setzen wir <strong>Umami</strong> ein,
      eine datenschutzfreundliche, cookielose Analyse-Software, die wir auf eigener Infrastruktur
      (<a href="https://umami.stromflix.com" target="_blank" rel="noopener">umami.stromflix.com</a>) betreiben.
      Umami erhebt anonymisierte Nutzungsdaten (u.&nbsp;a. aufgerufene Seiten, Klick-Ereignisse, ungefähre
      Herkunft, Browser- und Gerätetyp) und verwendet hierfür <strong>keine Cookies</strong>; IP-Adressen
      werden anonymisiert und nicht gespeichert.
    </p>
    <p>
      Zusätzlich nutzen wir eine <strong>anonymisierte Sitzungsaufzeichnung (Session Replay)</strong>, bei
      der nur ein Bruchteil der Besuche (Stichprobe) erfasst und Eingaben sowie persönliche Inhalte
      automatisch maskiert werden. Damit lassen sich Bedienprobleme erkennen, ohne einzelne Personen zu
      identifizieren.
    </p>
    <p>
      Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer <strong>Einwilligung</strong>
      (Art. 6 Abs. 1 lit. a DS-GVO, § 25 Abs. 1 TTDSG). Ohne Ihre Zustimmung werden die hierfür nötigen
      Skripte gar nicht erst geladen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
      widerrufen oder nachträglich erteilen:
    </p>
    <div class="not-prose my-5 flex flex-wrap items-center gap-3">
      <button type="button" @click="grantConsent"
              :disabled="consent === 'granted'"
              class="px-5 py-2 rounded-full text-sm font-semibold bg-accent text-paper hover:bg-accentDark transition-colors disabled:opacity-50 disabled:cursor-default">
        Analyse erlauben
      </button>
      <button type="button" @click="denyConsent"
              :disabled="consent === 'denied'"
              class="px-5 py-2 rounded-full text-sm font-semibold border border-line text-ink hover:border-ink transition-colors disabled:opacity-50 disabled:cursor-default">
        Analyse ablehnen
      </button>
      <span class="text-sm text-muted">
        Aktueller Status:
        <strong v-if="consent === 'granted'" class="text-accent">erlaubt</strong>
        <strong v-else-if="consent === 'denied'" class="text-ink">abgelehnt</strong>
        <strong v-else class="text-ink">noch keine Auswahl</strong>
      </span>
    </div>

    <h2>VI. Kontaktaufnahme per E-Mail / Telefon</h2>
    <p>
      Sie können uns über die angegebene E-Mail-Adresse oder telefonisch kontaktieren. Bei einer
      Kontaktaufnahme per E-Mail werden die uns übermittelten personenbezogenen Daten gespeichert und
      ausschließlich zur Beantwortung Ihres Anliegens verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
      DS-GVO. Die Daten werden gelöscht, sobald die Speicherung nicht mehr erforderlich ist.
    </p>

    <h2>VII. Einbindung externer Dienste</h2>
    <p>
      Auf dieser Webseite werden Karten von <strong>OpenStreetMap</strong> (OpenStreetMap Foundation,
      St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich) eingebunden.
      Beim Aufruf der Karte überträgt Ihr Browser technisch notwendige Daten (u.&nbsp;a. IP-Adresse) an die
      Server von OpenStreetMap. Weitere Informationen finden Sie in der Datenschutzerklärung von
      OpenStreetMap: <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">wiki.osmfoundation.org/wiki/Privacy_Policy</a>.
    </p>
    <p>
      Schriftarten werden über <strong>Google Fonts</strong> geladen. Hierbei werden ebenfalls
      technisch notwendige Daten an Google übertragen.
    </p>
    <p>Rechtsgrundlage ist jeweils Art. 6 Abs. 1 lit. f DS-GVO.</p>

    <h2>VIII. Routinemäßige Löschung und Sperrung</h2>
    <p>
      Wir verarbeiten und speichern Ihre personenbezogenen Daten nur für den Zeitraum, der zur Erreichung
      des Speicherungszwecks erforderlich ist oder sofern gesetzliche Aufbewahrungspflichten bestehen.
    </p>

    <h2>IX. Widerspruchsrecht (Art. 21 DS-GVO)</h2>
    <p>
      Wenn wir Ihre personenbezogenen Daten aufgrund unseres überwiegenden berechtigten Interesses nach
      Art. 6 Abs. 1 lit. f DS-GVO verarbeiten, haben Sie aus Gründen, die sich aus Ihrer besonderen
      Situation ergeben, jederzeit das Recht, dieser Verarbeitung mit Wirkung für die Zukunft kostenfrei
      zu widersprechen. Ihren Widerspruch richten Sie bitte an die unter Ziffer I. genannten Kontaktdaten.
    </p>
  </LegalPage>
</template>
