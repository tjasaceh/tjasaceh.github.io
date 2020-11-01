const quizQuestions = [
    {
        'question': 'Kaj je genetika?',
        'answers': [
            {
                'answer': 'Področje biologije, ki proučuje dedovanje, lastnosti genov in RNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Področje biotehnologije, ki proučuje dedovanje, lastnosti genov in DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Področje biologije, ki proučuje dedovanje in DNA.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Področje biologije, ki proučuje dedovanje, lastnosti genov in DNA.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj je osnovna materialna enota dedovanja oziroma nosilec dedne lastnosti?',
        'answers': [
            {
                'answer': 'DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'spolne celice',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'jajčece',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'gen',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Dopolni stavek. Na molekularni enoti je gen del molekule ___, ki se prepisuje v ___?',
        'answers': [
            {
                'answer': 'RNA, DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'DNA, RNA',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'DNA, nukleotid',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'aminokisline, DNA',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'V katerih človeških celicah NE najdemo genov?',
        'answers': [
            {
                'answer': 'spolne celice',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'levkociti',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'eritrociti',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'trombociti',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'V kakšni obliki je večino dednega materiala v jedru celice?',
        'answers': [
            {
                'answer': 'v obliki kromosomov',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'v obliki žoge',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'v mitohondriju',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'raztopljen v tekočini',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kje se nahaja preostanek dednega materiala v živalski celici (večina ga je v jedru)?',
        'answers': [
            {
                'answer': 'pripet na membrano jedra',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'raztopljen v citoplazmi',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'v mitohondriju',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'v kloroplastu',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kje NE najdemo dednega materiala v rastlinski celici?',
        'answers': [
            {
                'answer': 'v kloroplastu',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'v endoplazmatskem retikulumu',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'v jedru',
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
        'question': 'Dopolni stavek. Geni so zapisani v obliki zaporedja ___ baz na __ vijačnici DNA.',
        'answers': [
            {
                'answer': 'kisikovih, dvojni',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'dušikovih, enojni',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'dušikovih, dvojni',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'fosfatnih, dvojni',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Koliko kromosomov vsebuje jedro vsake človeške telesne celice?',
        'answers': [
            {
                'answer': '23',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '35',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '44',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '46',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Koliko kromosomov vsebuje jedro človeške spolne celice?',
        'answers': [
            {
                'answer': '46',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '44',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '35',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '23',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Ljudje z Downovim sindromom imajo v vsaki celici tri ___',
        'answers': [
            {
                'answer': 'jedra',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'kopije 21. kromosoma',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'mitohondrije',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'kopije 23. kromosoma',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katera kombinacija spolnih kromosomov označuje žensko?',
        'answers': [
            {
                'answer': 'XX',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'YY',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'XY',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'XXY',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katera kombinacija spolnih kromosomov označuje moškega?',
        'answers': [
            {
                'answer': 'XX',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'XY',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'YY',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'XYY',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je populacija?',
        'answers': [
            {
                'answer': 'Populacija je skupina osebkov neke vrste, ki zasedajo nek prostor v nekem času.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Populacija je skupina osebkov neke vrste, ki zasedajo nek prostor v nekem času in se med seboj parijo.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Populacija je skupina osebkov različnih vrst, ki zasedajo nek prostor v nekem času in se med seboj parijo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Populacija je skupina osebkov neke vrste, ki se med seboj parijo.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kdo je pionir genetike?',
        'answers': [
            {
                'answer': 'Louis Pasteur',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'James Watson',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Charles Darwin',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Gregor Mendel',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Katero rastlino je v glavnem preučeval Gregor Mendel?',
        'answers': [
            {
                'answer': 'grah',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'fižol',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'paradižnik',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'bob',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kdo je v jedru našel in poimenoval nukleinske kisline?',
        'answers': [
            {
                'answer': 'Charles Darwin',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Gregor Mendel',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Friedrich Miescher',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'James Watson in Francis Crick',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kdo je odkril dvojno vijačnico DNA?',
        'answers': [
            {
                'answer': 'Marie Curie',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Alexander Fleming',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Kary Mullis',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'James Watson in Francis Crick',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj označuje kratica GSO?',
        'answers': [
            {
                'answer': 'gensko spremenjen organ',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'gensko sortiran organizem',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'gensko spremenjen organizem',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'gensko slep organizem',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj je definicija za GSO?',
        'answers': [
            {
                'answer': 'Je organizem, v katerem je z uporabo sodobnih metod genetskega inženirstva vnesen točno določen gen za točno določeno lastnost iz drugega organizma.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Je organizem, v katerem so z uporabo sodobnih metod genetskega inženirstva pregledani vsi geni.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je organizem, v katerem noben gen ni spremenjen.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je organizem, v katerem je z uporabo sodobnih metod genetskega inženirstva vnesen točno določen gen za točno določeno lastnost iz istega organizma.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kateri organizem je najpogosteje genetsko spremenjen?',
        'answers': [
            {
                'answer': 'limona',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'jabolko',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'češnja',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'soja',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj je dedovanje?',
        'answers': [
            {
                'answer': 'Je prenos genov med organizmi.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je spreminjanje lastnosti iz generacije v generacijo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je ohranjanje lastnosti iz generacije v generacijo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Je prenos lastnosti z ene generacije na drugo.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj so mutacije?',
        'answers': [
            {
                'answer': 'Zaporedja neznanih genov v genomu.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'So spremembe v DNA sekvenci.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'So območja DNA, kjer ni prišlo do sprememb.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'So spremembe v celici.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
]