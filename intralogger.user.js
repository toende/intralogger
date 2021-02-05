// ==UserScript==
// @name         Intralogger
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Log calls from the intranet!
// @author       Mikkel Lysholt Robdrup
// @match        https://intranet.zitcom.dk/*
// @updateURL   https://supportmon.zitcom.dk/mlr/intralogger.user.js
// @downloadURL https://supportmon.zitcom.dk/mlr/intralogger.user.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    var frameboi = document.createElement("iframe");
    frameboi.setAttribute("name", "hiddenFrame");
    frameboi.setAttribute("width", "0");
    frameboi.setAttribute("height", "0");
    frameboi.setAttribute("border", "0");
    frameboi.style.display = "none";


    document.body.appendChild(frameboi);


    var formboi = document.createElement("form");
    formboi.setAttribute("action", "https://supportmon.zitcom.dk/shkald/include/get_response.php");
    formboi.setAttribute("onsubmit", 'if(document.getElementById("user_comment").value.includes("Retention")){ window.location.href = "https://teambluegroup-my.sharepoint.com/:x:/g/personal/soeren_kristensen_team_blue/EROixwnSMXxMleePOi4pcJQB3BzpjxL9mXytCps04ciPWg?e=sNQVpI";} this.submit(); this.reset(); return false;');
    formboi.setAttribute("id", "contact-form");
    formboi.setAttribute("style", "float: right;");
    formboi.setAttribute("method", "post");
    formboi.setAttribute("name", "contact-form");
    formboi.setAttribute("target", "hiddenFrame");

    formboi.innerHTML = `<input type="text" class="form-control" id="resellerId" name="resellerId" pattern="(^[A-Za-z]{2}|^[A-Za-z]{3})+[0-9]{1,18}|0" placeholder="ID (Skriv 0 hvis intet ID)"  style="width: 250px;" required>
<input list="comment_choice" class="form-control" id="user_comment" name="user_comment" placeholder="Kategori" style="width: 250px;" required>
<datalist id="comment_choice">
<option value="Odin Migrering - Tekniske problemer">
<option value="Odin Migrering - Opsætning">
<option value="Ahsay(Remote/Online backup)">
<option value="Basekit">
<option value="Cloud Drive/ToShare">
<option value="Dedikerede Servere - VPS/VDS/VM">
<option value="DNS">
<option value="Domæne">
<option value="Hosted Exchange">
<option value="Hosted Spamfilter">
<option value="Hostnordic">
<option value="Kundecenter">
<option value="Legacy">
<option value="MailFactory">
<option value="Migration">
<option value="Office 365">
<option value="Rentention">
<option value="Servicedesk">
<option value="SMS1919">
<option value="SSL certifikat">
<option value="TSM">
<option value="Veeam">
<option value="Viderestilling">
<option value="VPN">
<option value="Webhotel Linux">
<option value="Webhotel Windows">
<option value="Ahsay(Remote/Online backup) - Mersalg">
<option value="Ahsay(Remote/Online backup) - Diverse">
<option value="Ahsay(Remote/Online backup) - Generel fejlsøgning">
<option value="Ahsay(Remote/Online backup) - Logfiler">
<option value="Basekit - Demo">
<option value="Basekit - Diverse">
<option value="Basekit - Opgradering">
<option value="Basekit - Spørgsmål til design">
<option value="Basekit - Mersalg">
<option value="Basekit - Spørgsmål til SEO">
<option value="Basekit - Spørgsmål til SSL">
<option value="Basekit - Spørgsmål til statistik">
<option value="Cloud Drive/ToShare - Diverse">
<option value="Cloud Drive/ToShare - Generelle spørgsmål">
<option value="Cloud Drive/ToShare - Mersalg">
<option value="Cloud Drive/ToShare - Opsætning">
<option value="Cloud Drive/ToShare - Problemer med at hente filer">
<option value="Dedikerede Servere - VPS/VDS/VM - Diverse">
<option value="Dedikerede Servere - VPS/VDS/VM - Generel fejlsøgning">
<option value="Dedikerede Servere - VPS/VDS/VM - Genstart af server">
<option value="Dedikerede Servere - VPS/VDS/VM - Spørgsmål til Plesk">
<option value="Dedikerede Servere - VPS/VDS/VM - Spørgsmål til RDP/SSH">
<option value="Dedikerede Servere - VPS/VDS/VM - Windows Firewall">
<option value="Diverse - Callback">
<option value="Diverse - Ikke kunde hos os">
<option value="Diverse - Opfølgning på tidligere problem">
<option value="Diverse - Nyhedsbrev fra os">
<option value="Diverse - Merak Migreringsproblemer">
<option value="Diverse - Itadel Migration">
<option value="Diverse - Phishing mail">
<option value="Diverse - Lightmail">
<option value="Diverse - Profibermail">
<option value="Diverse - Driftsproblemer - nedbrud m.m">
<option value="Diverse - Produkt ikke hos os">
<option value="Diverse">
<option value="Diverse - Ændring af abonnement">
<option value="DNS - Diverse">
<option value="DNS - DKIM">
<option value="DNS - Generelle DNS ændringer">
<option value="DNS - Spørgsmål til DNSSEC">
<option value="DNS - Mersalg">
<option value="DNS - Indsæt SPF">
<option value="DNS - Mangler DNS login">
<option value="Domæne - Deaktiveret">
<option value="Domæne - Diverse">
<option value="Domæne - Mersalg">
<option value="Domæne - Oprettelse">
<option value="Domæne - Overdragelse af domæne">
<option value="Domæne - Spørgsmål til subdomæne">
<option value="Domæne - Spørgsmål til flytning">
<option value="Domæne - Starte redelegering">
<option value="Domæne - Tilkøb af DNS">
<option value="Domæne - Udlevering af EPP">
<option value="Domæne - Ændring af Navneservere">
<option value="Hosted Exchange - Generelle spørgsmål">
<option value="Hosted Exchange - Generel fejlsøgning">
<option value="Hosted Exchange - Mersalg">
<option value="Hosted Exchange - Nulstilling af kodeord">
<option value="Hosted Exchange - Oprettelse af brugere">
<option value="Hosted Exchange - Opsætning på PC">
<option value="Hosted Exchange - Opsætning på Mac">
<option value="Hosted Exchange - Opsætning på iPhone">
<option value="Hosted Exchange - Opsætning på Android">
<option value="Hosted Exchange - SPAM">
<option value="Hosted Exchange - Spørgsmål til Pakker">
<option value="Hosted Exchange - Kalender">
<option value="Hosted Exchange - Dadlnet">
<option value="Hosted Exchange - Diverse">
<option value="Hosted Spamfilter - Mersalg">
<option value="Hosted Spamfilter - Oprettelse af produkt">
<option value="Hosted Spamfilter - Opsætning af SMTP udsendelse">
<option value="Hosted Spamfilter - Spørgsmål til opsætning">
<option value="Hosted Spamfilter - Spørgsmål til brug af spamfilter">
<option value="Kundecenter - Overdragelse af produkter">
<option value="Kundecenter - Spørgsmål til faktura">
<option value="Kundecenter - Spørgmål til kontrolpanel">
<option value="Kundecenter - Mersalg">
<option value="Kundecenter - Kontosammenlægning">
<option value="Kundecenter - Ændring i kontooplysninger">
<option value="Kundecenter - Spørgsmål til produkter">
<option value="Kundecenter - Spørgsmål til resellerpanel/funktionalitet">
<option value="Kundecenter - Slutkunde">
<option value="Kundecenter - Nulstilling af kode">
<option value="Kundecenter - Diverse">
<option value="Legacy - Danhost">
<option value="Legacy - Email Manager">
<option value="Legacy - Hosting Manager">
<option value="Legacy - Itadel">
<option value="Legacy - Mailcloud">
<option value="Legacy - Maillist">
<option value="Legacy - Skyline/Elromail">
<option value="Legacy - SMS gateway">
<option value="Legacy - Smartweb mail">
<option value="Lightmail - Nulstilling af kodeord">
<option value="Lightmail - Opsætning">
<option value="MailFactory - Generelle spørgsmål">
<option value="MailFactory - Generel fejlsøgning">
<option value="MailFactory - Mersalg">
<option value="MailFactory - Opsætning på PC">
<option value="MailFactory - Opsætning på Mac">
<option value="MailFactory - Opsætning på iPhone">
<option value="MailFactory - Opsætning på Android">
<option value="MailFactory - Nulstilling af kodeord">
<option value="MailFactory - SPAM">
<option value="MailFactory - Oprettelse af brugere">
<option value="MailFactory - Spamfilter">
<option value="MailFactory - Diverse">
<option value="MailFactory - Restore">
<option value="MailFactory - Webmail">
<option value="Migration - Itadel">
<option value="Migration - Mail">
<option value="Migration - Web">
<option value="Office 365 - Backup">
<option value="Office 365 - Exchange opsætning">
<option value="Office 365 - Generel fejlsøgning">
<option value="Office 365 - Generelle spørgsmål">
<option value="Office 365 - Nulstilling af password">
<option value="Office 365 - Officepakken">
<option value="Office 365 - Mersalg">
<option value="Office 365 - OneDrive/Sharepoint">
<option value="Office 365 - Oprettelse af brugere">
<option value="Office 365 - Oprettelse af delte postkasser">
<option value="Office 365 - Opsætning af delt kalender">
<option value="Office 365 - Opsætning af domæne">
<option value="Office 365 - Skift af licens">
<option value="Office 365 - Spørgsmål til licenser">
<option value="Office 365 - Sikkermail">
<option value="Office 365 - Spam">
<option value="Office 365 - Spam blokering">
<option value="Office 365 - Tilkøb af licens">
<option value="Office 365 - Teams">
<option value="Office 365 - Diverse">
<option value="Retention - Retention">
<option value="Retention - Opsigelse">
<option value="Retention - Winback">
<option value="SMS1919 - Diverse">
<option value="SMS1919 - Generel fejlsøgning">
<option value="SMS1919 - Generelle spørgsmål">
<option value="SSL certifikat - Oprettelse af SSL">
<option value="SSL certifikat - Generel fejlsøgning">
<option value="SSL Certifikat - Mersalg">
<option value="SSL certifikat - Diverse">
<option value="TSM - Generel fejlsøgning">
<option value="TSM - Generelle spørgsmål">
<option value="TSM - Restore">
<option value="TSM - Mersalg">
<option value="TSM - Logfiler">
<option value="TSM - Oprettelse af produkt">
<option value="TSM - Diverse">
<option value="Veeam - Diverse">
<option value="Veeam - Logfiler">
<option value="Veeam - Generel fejlsøgning">
<option value="Veeam - Mersalg">
<option value="Viderestilling til Bogholderi">
<option value="Viderestilling til Solutions">
<option value="Viderestilling til Salg">
<option value="Viderestilling til Shop">
<option value="Viderestilling til retention">
<option value="VPN - Generel fejlsøgning">
<option value="VPN - Mersalg">
<option value="VPN - Oprettelse af produkt">
<option value="VPN - Nulstilling af kodeord">
<option value="VPN - Oprettelse af brugere">
<option value="Webhotel Linux - Oprettelse">
<option value="Webhotel Linux - Generel fejlsøgning">
<option value="Webhotel Linux - Langsom loadtid">
<option value="Webhotel Linux - Problemer med indhold på sitet">
<option value="Webhotel Linux - FTP">
<option value="Webhotel Linux - Mersalg">
<option value="Webhotel Linux - MySQL">
<option value="Webhotel Linux - Let's Encrypt">
<option value="Webhotel Linux - Restore">
<option value="Webhotel Linux - Statistik">
<option value="Webhotel Linux - Legacy Migrering">
<option value="Webhotel Linux - Diverse">
<option value="Webhotel Linux - 503 error">
<option value="Webhotel Linux - Kontaktformular">
<option value="Webhotel Linux - Cronjob">
<option value="Webhotel Windows - Oprettelse">
<option value="Webhotel Windows - Generel fejlsøgning">
<option value="Webhotel Windows - Genstart app. pool">
<option value="Webhotel Windows - Langsom loadtid">
<option value="Webhotel Windows - Mersalg">
<option value="Webhotel Windows - Problemer med indhold på sitet">
<option value="Webhotel Windows - FTP">
<option value="Webhotel Windows - MSSQL/MySQL">
<option value="Webhotel Windows - Let's Encrypt">
<option value="Webhotel Windows - Statistik">
<option value="Webhotel Windows - Diverse">
<option value="Webhotel Windows - Cronjob">
<option value="Webhotel Windows - Restore">
<option value="Udvikling - Fejlet ordre">
</datalist>
<input type="text" class="form-control" id="user_comment2" name="user_comment2" value="" placeholder="Kommentar hvis diverse" style="width: 250px;">
<input type="hidden" id="user_cred" name="user_cred" value="` + currentUsername.toUpperCase() +`">
<input type="submit" style="visibility: hidden; width: 0px; padding: 0px;"/>`;

    document.querySelector('.toolbar-user-profile').innerHTML = "";
    document.querySelector('.toolbar-user-profile').appendChild(formboi);



    var myframe = document.createElement("iframe");
    myframe.setAttribute("name", "hiddenFrame");
    myframe.setAttribute("width", "200px");
    myframe.setAttribute("height", "400px");
    myframe.setAttribute("border", "0");
    myframe.setAttribute("frameBorder", "0");
    myframe.setAttribute("src", "https://supportmon.zitcom.dk/mlr/intraframe.php?agent=" + currentUsername.toUpperCase());

    document.querySelector('.menu').appendChild(myframe);

/*
    var myimage = document.createElement("div");
    myimage.innerHTML = '<img src="http://supportmon.zitcom.dk/shkald/today.png" width="200px" height="200px">';
    document.querySelector('.menu').appendChild(myimage);
*/

})();
