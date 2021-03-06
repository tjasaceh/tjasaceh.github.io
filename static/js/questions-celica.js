const quizQuestions = [
    {
        'question': 'Kaj je celica?',
        'answers': [
            {
                'answer': 'Celica je strukturna in funkcionalna enota vseh rastlin.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Celica je strukturna in funkcionalna enota vseh živih organizmov razen bakterij.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Celica je strukturna in funkcionalna enota vseh živali.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Celica je strukturna in funkcionalna enota vseh živih organizmov.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Iz koliko celic so sestavljeni enoceličarji?',
        'answers': [
            {
                'answer': 'Iz nešteto celic.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz več tisoč.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz dveh celic.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz ene celice.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Iz približno koliko celic so sestavljeni mnogoceličarji?',
        'answers': [
            {
                'answer': 'Iz 1 miljarde celic.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz 100 biljonov celic.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Iz več 100 celic.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz 1 celice.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kateri znanstvenik je prvi odkril in poimenoval celico?',
        'answers': [
            {
                'answer': 'Antonie van Leeuwenhoek.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Louis Pasteur.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Robert Hooke.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Charles Darwin.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katera panoga biologije se ukvarja s celicami?',
        'answers': [
            {
                'answer': 'Celična biologija.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Celična anatomija.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Botanika.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Mikrobiologija.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Izberi največjo celico.',
        'answers': [
            {
                'answer': 'Virusna celica.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Bakterijska celica.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Rastlinska celica.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Živalska celica.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj najdemo tudi v živalski celici?',
        'answers': [
            {
                'answer': 'Vakuolo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Celično membrano.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Celično steno.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Kloroplaste.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj najdemo na zrnatem endoplazmatskem retikulumu?',
        'answers': [
            {
                'answer': 'Ribosome.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Lizosome.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Vakuolo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Mitohondrij.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj poteka na ribosomih?',
        'answers': [
            {
                'answer': 'Fotosinteza.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Podvojevanje DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Sinteza maščob.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Sinteza beljakovin.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj najdemo v lizosomih?',
        'answers': [
            {
                'answer': 'Citoplazmo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Maščobe.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Ribosome.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Prebavne encime.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kateri organel ima lastno DNA?',
        'answers': [
            {
                'answer': 'Ribosom.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Mitohondrij.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Vakuola.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Golgijev aparat.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je naloga mitohondrijev?',
        'answers': [
            {
                'answer': 'Celično dihanje.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Fotosinteza.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Podvojevanje DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Celična delitev.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako imenujemo gube notranje membrane kloroplasta?',
        'answers': [
            {
                'answer': 'Kloroplastne gube.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Tilakoide.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Tonoplast.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Endoplazmatski retikulum.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj rastline kopičijo v vakuoli?',
        'answers': [
            {
                'answer': 'Snovi za rast in razvoj.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Odpadne produkte.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Molekule ATP.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'V jedru celice je dedni zapis v obliki tankih nitk',
        'answers': [
            {
                'answer': 'intermediarnih filamentov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mikrofilamentov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mikrotubulov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'kromatina.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj nastaja v jedrcu?',
        'answers': [
            {
                'answer': 'Ribosomi.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'ATP.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Kromatin.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Mikrotubuli.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je naloga mikrotubulov?',
        'answers': [
            {
                'answer': 'Celična delitev.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Transport snovi znotraj celice.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Transport snovi znotraj celice in sodelovanje pri celični delitvi.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Krčenje mišic in sodelovanje pri celični delitvi.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Dopolni stavek. Mikrofilamenti so sestavljeni iz beljakovine ___ in so pomembni pri ___ .',
        'answers': [
            {
                'answer': 'aktin, celični delitvi',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'tubulin, transportu snovi znotraj celice',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'tubulin, celični delitvi',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'aktin, krčenju mišic',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj je glavna naloga endoplazmatskega retikuluma?',
        'answers': [
            {
                'answer': 'Sinteza proteinov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Podvojevanje DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zorjenje in usmerjanje proteinov.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Obdelava in razvrščanje proteinov in lipidov za transport v druge organele ter sinteza glikoproteinov.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je glavna naloga Golgijevega aparata?',
        'answers': [
            {
                'answer': 'Sinteza proteinov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Podvojevanje DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zorjenje in usmerjanje proteinov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Obdelava in razvrščanje proteinov in lipidov za transport v druge organele ter sinteza glikoproteinov.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj poleg sinteze glikoproteinov in usmerjanja proteinov v druge organele še poteka v Golgijevem aparatu?',
        'answers': [
            {
                'answer': 'Sinteza proteinov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Podvojevanje DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Fagocitoza.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Sinteza polisaharidov.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj je endosom?',
        'answers': [
            {
                'answer': 'Je znotrajcelična cevasta membranska struktura, ki se oblikuje iz celične membrane in je vključena v transport snovi iz celice.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je zunajcelična cevasta membranska struktura, ki se oblikuje iz celične membrane in je vključena v transport snovi v celici.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je znotrajcelična cevasta membranska struktura, ki se oblikuje iz celične stene in je vključena v transport snovi v celici.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je znotrajcelična cevasta membranska struktura, ki se oblikuje iz celične membrane in je vključena v transport snovi v celici.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj je endocitoza?',
        'answers': [
            {
                'answer': 'Izvoz snovi prek celične membrane ven iz celice.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Vnos snovi prek celične membrane v notranjost celice.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Zlitje sekrecijskega mešička s plazemsko membrano, s čimer vsebina mešička zapusti celico.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Razlitje sekrecijskega mešička v notranjosti celice, s čimer celica dobi pomembne snovi za svojo rast.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj ni endocitotska pot?',
        'answers': [
            {
                'answer': 'Pot lipidnih raftov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Fagocitoza.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Fotocitoza.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Pinocitoza.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je naloga ribosomov?',
        'answers': [
            {
                'answer': 'Pospeševanje in regulacija tvorbe proteinov.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Pospeševanje in regulacija tvorbe lipidov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Prenašanje genov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Nimajo funkcije.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Iz česa so sestavljeni ribosomi?',
        'answers': [
            {
                'answer': 'Iz ribosomskih proteinov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz rRNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Iz rRNA in ribosomskih proteinov.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Iz mRNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Česa prokariontska celica nima?',
        'answers': [
            {
                'answer': 'Citoplazme.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Jedra.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Ribosomov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Celične membrane.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kje v celici NE poteka celično dihanje?',
        'answers': [
            {
                'answer': 'V Golgijevem aparatu.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'V citosolu.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'V citoplazmi.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'V mitohondriju.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako se deduje mitohondrijska DNA pri človeku?',
        'answers': [
            {
                'answer': 'Po starih starših.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Po obeh starših.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Po očetu.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Po mami.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kdo so predniki današnjega mitohondrija?',
        'answers': [
            {
                'answer': 'Glive.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Virusi.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Alge.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Bakterije.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
]