const quizQuestions = [
    {
        'question': 'Kdo je zajedalec?',
        'answers': [
            {
                'answer': 'Zajedalec ali parazit je žival ali rastlina, ki enkrat na mesec živi na račun drugega organizma.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zajedalec ali parazit je rastlina, ki stalno ali občasno živi na račun drugega organizma.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zajedalec ali parazit je žival, ki stalno ali občasno živi na račun drugega organizma.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zajedalec ali parazit je žival ali rastlina, ki stalno ali občasno živi na račun drugega organizma.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kakšne živali so paraziti?',
        'answers': [
            {
                'answer': 'Večcelične živali.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Enocelične živali.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Požrešne živali.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Večcelične ali enocelične živali.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kaj NI lastnost parazita?',
        'answers': [
            {
                'answer': 'Jemanje hrane gostitelju.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Pridobivanje hrane za gostitelja.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Izločanje strupenih snovi ali encimov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Povzročanje mehanskih poškodb na gostitelju.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako se parazit pogosto prilagodi na obrambne mehanizme gostitelja?',
        'answers': [
            {
                'answer': 'Spremenijo kraj, kjer bodo zajedali.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'V zameno za obrambo dajo gostitelju hrano.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Na svoji površini ustvarijo plašč podoben tkivu gostitelja.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Izločajo strupene snovi, s katerimi se branijo proti obrambnim mehanizmom gostitelja.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kateri paraziti NE spadajo med praživali?',
        'answers': [
            {
                'answer': 'Trakulje.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Bičkarji.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Migetalkarji.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Amebe.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kateri paraziti NE spadajo med valjaste in ploske črve?',
        'answers': [
            {
                'answer': 'Gliste.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Trakulje.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Migetalkarji.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Metljaji.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj povzroča parazit Giardia intestinalis? ',
        'answers': [
            {
                'answer': 'Zastajanje urina.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Drisko in druge prebavne težave.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Bolečine v mišicah.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Glavobole.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kaj povzroča parazit Trichomonas vaginalis?',
        'answers': [
            {
                'answer': 'Vnetje nožnice pri ženskah in sečnice pri moških.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Prebavne težave in drisko.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Glavobole.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Bolečine v sklepih.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako se prenaša lišmanija?',
        'answers': [
            {
                'answer': 'Z vbodom komarja.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z okuženo vodo in hrano.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z vbodom klopa.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'S pikom peščene muhe.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kako se prenaša spalna bolezen?',
        'answers': [
            {
                'answer': 'Z vbodom klopa.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z vbodom komarja.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z zaužitjem okužene hrane in vode.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z vbodom muhe cece.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kateri parazit povzroča spalno bolezen?',
        'answers': [
            {
                'answer': 'Leishmania spp.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Trypanosoma spp.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Trichomonas vaginalis.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Giardia intestinalis.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katero bolezen povzroča Entamoeba histolytica?',
        'answers': [
            {
                'answer': 'Amebno grižo.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Amebno razjedo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Spalno bolezen.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Bolezen Chagas.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Koliko vrst znotraj rodu Plasmodium spp. povzroča malarijo?',
        'answers': [
            {
                'answer': '10.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '5.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': '2.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '1.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako se prenaša malarija?',
        'answers': [
            {
                'answer': 'Z vbodom klopa.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'S pikom komarja.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Z vbodom uši.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'S pikom peščene muhe.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Katera žival je ključna za razvoj parazita Toxoplasma gondii?',
        'answers': [
            {
                'answer': 'Riba.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Polž.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Pes.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Mačka.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Katere vrste toksoplazmoz poznamo? ',
        'answers': [
            {
                'answer': 'Pridobljeno in prirojeno.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Prirojeno.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zapoznelo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Prirojeno in zapoznelo.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Za protitelesa proti kateremu parazitu v Sloveniji testiramo vse nosečnice?',
        'answers': [
            {
                'answer': 'Entamoeba histolytica.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Plasmodium spp.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Toxoplasma gondii.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Trypanosoma spp.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Zajedalec katerega organa je parazit Fasciola hepatica?',
        'answers': [
            {
                'answer': 'Možganov.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Ledvic.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Črevesja.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Jeter.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kako se človek največkrat okuži s trakuljo?',
        'answers': [
            {
                'answer': 'Z vbodom uši.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'S pikom komarja.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z zaužitjem okuženega mesa.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Z vbodm klopa.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Kako se prenaša človeški srbec?',
        'answers': [
            {
                'answer': 'S pikom peščene muhe.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'S pikom komarja.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Z zaužitjem okužene hrane ali vode.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'S stikom z okuženim, s posteljnino ali oblačili.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Koliko časa traja razvojni krog klopa?',
        'answers': [
            {
                'answer': '1 dan.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '10 dni.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '6 mesecev.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '2 leti.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kakšne bolezni lahko prenašajo bolhe?',
        'answers': [
            {
                'answer': 'Kolero in kugo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Chronovo bolezen in kugo.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Zlatenico.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Kugo in tifus.',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Kje lahko parazitira lasnica?',
        'answers': [
            {
                'answer': 'V gladkih mišicah.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'V prečno-progastih mišicah.',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'V ledvicah.',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'V jetrih.',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
]