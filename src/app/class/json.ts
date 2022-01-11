JG.repeat(5, 10, {

    anneeID: JG.objectId(),
    libelleFr:  moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('YYYY'),
    libelleEn() {
        return this.libelleFr;
    },
    mois:
        JG.repeat(5, 12, {
            moisID: JG.objectId(),
            status: JG.random('terminé', 'en cours', 'inactif'),
            detail: _.uniq(JG.random('jan', 'fev', 'mar', 'avr', 'mai', 'jun','jui','aou'))
        }
        ),

}
);