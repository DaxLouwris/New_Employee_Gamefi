# De eerste route — zelfstandige overdrachtsversie

Deze map is een **volledig statische, platformvrije versie** van het onboarding-ganzenbord. Zij bevat alleen HTML, CSS, JavaScript en vijf lokale afbeeldingen. De versie bevat geen servercode, analytics, telemetrie, API-aanroepen, cookies, accounts, omgevingsvariabelen of externe assets. Spelvoortgang bestaat uitsluitend in het geheugen van de geopende browser en verdwijnt bij vernieuwen of sluiten.

> **Belangrijk:** `noindex` en een `robots.txt`-achtige instelling maken een site niet privé. Beperk toegang met een identity- of netwerklaag vóór de webserver.

## Inhoud en overdrachtscontrole

| Onderdeel | Status | Toelichting |
| --- | --- | --- |
| Frontend | Zelfstandig | `index.html`, `styles.css` en `app.js` gebruiken geen framework, pakketbeheerder of externe scriptbron. |
| Afbeeldingen | Lokaal | Alle visuele bestanden staan onder `assets/` en worden met relatieve paden geladen. |
| Netwerkverkeer | Geen functionele calls | De toepassing werkt offline nadat de bestanden zijn geladen. |
| Voortgang | Alleen tijdelijk | Er wordt geen informatie opgeslagen in `localStorage`, cookies, een database of een externe dienst. |
| Toegangsbeveiliging | Hostingverantwoordelijkheid | Plaats een SSO-/MFA-gateway of toegangsproxy vóór de statische webserver. |

## Snel lokaal controleren

Open `index.html` in een moderne browser voor een visuele controle. Voor een lokale test via een webserver kunt u vanuit deze map het volgende uitvoeren:

```bash
python3 -m http.server 8080
```

Open vervolgens `http://localhost:8080`. Dit is uitsluitend voor lokale testdoeleinden en **niet** geschikt als productieserver.

## Aanbevolen private productieopzet

Voor intern gebruik is een statische webserver achter een identity-aware access layer de eenvoudigste en meest beheersbare opzet. Gebruik uw bestaande organisatie-identiteitsprovider, bijvoorbeeld Microsoft Entra ID, Okta of Google Workspace, en dwing MFA en een specifieke medewerkersgroep af vóórdat verkeer de webserver bereikt. Daarmee hoeft de applicatie zelf geen gebruikersnamen, wachtwoorden of sessies te verwerken.

| Laag | Aanbevolen maatregel | Waarom |
| --- | --- | --- |
| Toegang | SSO-gateway met MFA en een beperkte groep medewerkers | Autorisatie gebeurt vóór de app; er is geen zelfgebouwde login nodig. |
| Transport | Alleen HTTPS met een geldig certificaat | Beschermt de verbinding tussen browser en toegangspunt. |
| Webserver | Nginx met `nginx.conf.example` als uitgangspunt | Dient uitsluitend de statische bestanden en voegt browserbeveiligingsheaders toe. |
| Netwerk | Geen publieke origin; accepteer alleen verkeer van gateway, VPN of bedrijfsnetwerk | Verkort het aanvalsoppervlak. |
| Beheer | Privé Git-repository, vierogenreview en periodieke dependency-/configuratiecontrole | Houdt wijzigingen traceerbaar en gecontroleerd. |

De aanbevolen Content Security Policy staat in de Nginx-configuratie en beperkt scripts, afbeeldingen en verbindingen tot hetzelfde domein. CSP is een aanvullende beschermingslaag tegen onder meer scriptinjectie; gebruik deze naast zorgvuldige code- en configuratiecontrole, niet als enige beveiligingsmaatregel.[1] De overige headers beperken onder meer framing, MIME-sniffing, referrerinformatie en ongewenste browserfuncties.[2]

## Kopiëren naar een beveiligde omgeving

Kopieer **de volledige inhoud van deze map**, inclusief `assets/`, naar een privé repository of naar een gecontroleerde overdrachtslocatie. Controleer vóór de eerste deployment dat er geen bestanden met geheimen, certificaten, `.env`-waarden of private sleutels in de repository staan. Het meegeleverde `.gitignore` helpt dit te voorkomen, maar vervangt geen review.

Plaats op de doelserver de bestanden in een alleen-lezen webroot, bijvoorbeeld `/var/www/onboarding-ganzenbord`. Kopieer daarna `nginx.conf.example` naar de Nginx-sitesconfiguratie, vervang `onboarding.voorbeeld.nl` door de echte interne domeinnaam en activeer de configuratie. Configureer vervolgens uw bestaande SSO-/MFA-gateway, VPN of netwerkbeperking zodat de Nginx-origin niet rechtstreeks vanaf het openbare internet bereikbaar is. Pas pas daarna DNS en het TLS-certificaat toe.

```bash
sudo install -d -m 0755 /var/www/onboarding-ganzenbord
sudo rsync -a --delete ./ /var/www/onboarding-ganzenbord/
sudo install -m 0644 ./nginx.conf.example /etc/nginx/sites-available/onboarding-ganzenbord
sudo ln -s /etc/nginx/sites-available/onboarding-ganzenbord /etc/nginx/sites-enabled/onboarding-ganzenbord
sudo nginx -t && sudo systemctl reload nginx
```

De voorbeeldconfiguratie bevat uitsluitend defensieve headers en een statische route. Stem certificaatbeheer, SSO-integratie, firewallregels, loggingretentie en incidentrespons af met uw eigen IT- of securityteam. Stel HSTS pas definitief in wanneer HTTPS en het certificaatbeheer stabiel zijn; een verkeerd ingestelde HSTS-policy kan legitieme toegang blokkeren.[2]

## Checklist vóór lancering

| Controle | Verwachte uitkomst |
| --- | --- |
| Directe origin-toegang | Niet bereikbaar buiten gateway, VPN of bedrijfsnetwerk. |
| SSO en MFA | Alleen de geautoriseerde groep krijgt toegang. |
| Browser-netwerkpaneel | Geen externe requests voor analytics, afbeeldingen, scripts of API’s. |
| Headers | CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, anti-framing en TLS-beleid zijn aanwezig. |
| Inhoud | Lokale noodnummers, contactpersonen, procedures en leermiddelen zijn ingevuld en goedgekeurd. |
| Repository | Geen sleutels, certificaten, logbestanden of persoonsgegevens aanwezig. |

## Bronnen

[1] [OWASP — Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)

[2] [OWASP — HTTP Security Response Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)

[3] [OWASP — Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
