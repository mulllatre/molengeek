function afficherHeure() {
    const options = { timeZone: 'Europe/Brussels', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const heureBruxelles = new Intl.DateTimeFormat('fr-BE', options).format(new Date());
    document.getElementById('heure').textContent = heureBruxelles;
}
setInterval(afficherHeure, 1000);
afficherHeure();