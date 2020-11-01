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
                'answer': 'nešteto celic',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'več tisoč',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '2',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '1',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Iz koliko celic približno so sestavljeni mnogoceličarji?',
        'answers': [
            {
                'answer': '1 miljarde celic',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '100 biljonov celic',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'več 100 celic',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '1 celice',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kateri znanstvenik je prvi odkril in poimenoval celico?',
        'answers': [
            {
                'answer': 'Antonie van Leeuwenhoek',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Louis Pasteur',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Robert Hooke',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Charles Darwin',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katera panoga biologije se ukvarja s celicami?',
        'answers': [
            {
                'answer': 'celična biologija',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'celična anatomija',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'botanika',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mikrobiologija',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katera celica je večja?',
        'answers': [
            {
                'answer': 'virusna celica',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'rastlinska in živalska sta enakih velikosti',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'rastlinska celica',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'živalska celica',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj najdemo tudi v živalski celici?',
        'answers': [
            {
                'answer': 'vakuola',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'celična membrana',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'celična stena',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'kloroplasti',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj najdemo na zrnatem endoplazmatskem retikulumu?',
        'answers': [
            {
                'answer': 'ribosome',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'lizosome',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'vakuolo',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mitohondrij',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj poteka na ribosomih?',
        'answers': [
            {
                'answer': 'fotosinteza',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'podvojevanje DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'sinteza maščob',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'sinteza beljakovin',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj najdemo v lizosomih?',
        'answers': [
            {
                'answer': 'citoplazmo',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'maščobe',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'ribosome',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'prebavne encime',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kateri organel ima lastno DNA?',
        'answers': [
            {
                'answer': 'ribosom',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mitohondrij',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'vakuola',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Golgijev aparat',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je naloga mitohondrijev?',
        'answers': [
            {
                'answer': 'celično dihanje',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'fotosinteza',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'podvojevanje DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'celična delitev',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako imenujemo gube notranje membrane kloroplasta?',
        'answers': [
            {
                'answer': 'kloroplastne gube',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'tilakoide',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'tonoplast',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'endoplazmatski retikulum',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj rastline kopičijo v vakuoli?',
        'answers': [
            {
                'answer': 'snovi za rast in razvoj',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'odpadne produkte',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'molekule ATP',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'V jedru celice je dedni zapis v obliki tankih nitk',
        'answers': [
            {
                'answer': 'intermediarnih filamentov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mikrofilamentov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mikrotubulov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'kromatina',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj nastaja v jedrcu?',
        'answers': [
            {
                'answer': 'ribosomi',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'ATP',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'kromatin',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'mikrotubuli',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je naloga mikrotubulov?',
        'answers': [
            {
                'answer': 'celična delitev',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'transport snovi znotraj celice',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'transport snovi znotraj celice in sodelovanje pri celični delitvi',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'krčenje mišic in sodelovanje pri celični delitvi',
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
                'answer': 'tubulin, transportu dnovi znotraj celice',
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
                'answer': 'sinteza proteinov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'podvojevanje DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'zorjenje in usmerjanje proteinov',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'obdelava in razvrščanje proteinov in lipidov za transport v druge organele ter sinteza glikoproteinov',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je glavna naloga Golgijevega aparata?',
        'answers': [
            {
                'answer': 'sinteza proteinov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'podvojevanje DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'zorjenje in usmerjanje proteinov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'obdelava in razvrščanje proteinov in lipidov za transport v druge organele ter sinteza glikoproteinov',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj poleg sinteze glikoproteinov in usmerjanja proteinov v druge organele še poteka v Golgijevem aparatu?',
        'answers': [
            {
                'answer': 'sinteza proteinov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'podvojevanje DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'fagocitoza',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'sinteza polisaharidov',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj je endosom?',
        'answers': [
            {
                'answer': 'Je znotrajcelična cevasta membranska struktura, ki se oblikuje iz celične membrane in je vključen v transport snovi iz celice.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je zunajcelična cevasta membranska struktura, ki se oblikuje iz celične membrane in je vključen v transport snovi v celici.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je znotrajcelična cevasta membranska struktura, ki se oblikuje iz celične stene in je vključen v transport snovi v celici.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je znotrajcelična cevasta membranska struktura, ki se oblikuje iz celične membrane in je vključen v transport snovi v celici.',
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
                'answer': 'pot lipidnih raftov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'fagocitoza',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'fotocitoza',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'pinocitoza',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je naloga ribosomov?',
        'answers': [
            {
                'answer': 'pospeševanje in regulacija tvorbe proteinov',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'pospeševanje in regulacija tvorbe lipidov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'prenašanje genov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'nimajo funkcije',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Iz česa so sestavljeni ribosomi?',
        'answers': [
            {
                'answer': 'ribosomskih proteinov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'rRNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'rRNA in ribosomskih proteinov',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'mRNA',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Česa prokariontska celica nima?',
        'answers': [
            {
                'answer': 'citoplazme',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'jedra',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'ribosomov',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'celične membrane',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kje v celici NE poteka celično dihanje?',
        'answers': [
            {
                'answer': 'v Golgijevem aparatu',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'v citosolu',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'v citoplazmi',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'v mitohondriju',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako se deduje mitohondrijska DNA pri človeku?',
        'answers': [
            {
                'answer': 'po starih starših',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'po obeh starših',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'po očetu',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'po mami',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kdo so predniki današnjega mitohondrija?',
        'answers': [
            {
                'answer': 'glive',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'virusi',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'alge',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'bakterije',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
]