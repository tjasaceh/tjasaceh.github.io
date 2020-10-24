const quizQuestions = [
    {
        'question': 'Which bacteria has a polysaccharide capsule?',
        'answers': [
            {
                'answer': 'Escherichia coli',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Enterobacter spp.',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Pseudomonas aeruginosa',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Neisseria meningitidis',
                'isBacteriaName': true,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Which dicipline does not belong to microbiology?',
        'answers': [
            {
                'answer': 'virology',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'bacteriology',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'immunology',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'archaeology',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Which bacteria does not cause a skin infection?',
        'answers': [
            {
                'answer': 'Staphylococcus aureus',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Escherichia coli',
                'isBacteriaName': true,
                'isCorrect': true,
            },
            {
                'answer': 'Streptococcus (group A)',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Pseudomonas aeruginosa',
                'isBacteriaName': true,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'For which disease we do not have a vaccine yet?',
        'answers': [
            {
                'answer': 'hepatits B',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'flu',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'COVID-19',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'whooping cough',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
        'correctAnswerIndex': 2
    },
    {
        'question': 'Which component can be found only in Gram positive bacteria?',
        'answers': [
            {
                'answer': 'teichoic acid',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'peptidoglycan',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'lipid A',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'surface proteins',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Which component can be found only in Gram negative bacteria?',
        'answers': [
            {
                'answer': 'teichoic acid',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'peptidoglycan',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'lipid A',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'surface proteins',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Who is the father of microscopy?',
        'answers': [
            {
                'answer': 'Edward Jenner',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Antonie van Leeuwenhoek',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Louis Pasteur',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Hans Christian Gram',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Who is the pioneer of immunisation?',
        'answers': [
            {
                'answer': 'Edward Jenner',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'Robert Koch',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Sergej Vinogradski',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Hans Christian Gram',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'What kind of cell life was proven with the discovery of Bacillus anthracis and experiments?',
        'answers': [
            {
                'answer': 'bacteria',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'vegetative cell',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'virus',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'endospore',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Antibodies are specific proteins released from a certain class of immune cells known as',
        'answers': [
            {
                'answer': 'dendritic cells',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'T cells',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'macrophages',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'B lymphocytes',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Human marrow per day produces approximately 500 billion',
        'answers': [
            {
                'answer': 'skin cells',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'blood cells',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'dendritic cells',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'T cell',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'When was the first big SARS outbreak in China?',
        'answers': [
            {
                'answer': '2002-2004',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': '2003-2005',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '2001-2003',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '2000-2002',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'How is it called the transmission of genetic material with viruses?',
        'answers': [
            {
                'answer': 'transformation',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'transduction',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'transfection',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'conjugation',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'How many people (roughly estimated) died from Ebola in 2014-2016 Ebola Outbreak in West Africa?',
        'answers': [
            {
                'answer': '6.200',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '11.300',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': '20.300',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': '150.400',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Which family of the viruses belong virus Influenza A virus subtype H5N1?',
        'answers': [
            {
                'answer': 'Coronaviridae',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Paramyxoviridae',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Picornaviridae',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Orthomyxoviridae',
                'isBacteriaName': true,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Which type of bacteria lives in the symbiosis with Fabaceae or Leguminosae (commonly known as legume, pea or bean family)?',
        'answers': [
            {
                'answer': 'Rhizobium spp.',
                'isBacteriaName': true,
                'isCorrect': true,
            },
            {
                'answer': 'Bacillus spp.',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Clostridium spp.',
                'isBacteriaName': true,
                'isCorrect': false,
            },
            {
                'answer': 'Nitrosomonas spp.',
                'isBacteriaName': true,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Which toxin can be found in the fugu fish?',
        'answers': [
            {
                'answer': 'anatoxin',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'cyanotoxin',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'tetrodotoxin',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'tetanus toxin',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Xylella fastidiosa is a bacteria which causes disease in',
        'answers': [
            {
                'answer': 'human flesh',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'cats',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'grape wine',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'olive trees',
                'isBacteriaName': false,
                'isCorrect': true,
            }
        ],
    },
    {
        'question': 'Ziehl–Neelsen staining is a bacteriological stain used to identify',
        'answers': [
            {
                'answer': 'Mycobacteria',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'algae',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Mycobacteria and fungi',
                'isBacteriaName': false,
                'isCorrect': true,
            },
            {
                'answer': 'all kinds of bacteria',
                'isBacteriaName': false,
                'isCorrect': false,
            }
        ],
    },
    {
        'question': 'Chocolate agar is used to grow',
        'answers': [
            {
                'answer': 'Haemophilus influenzae',
                'isBacteriaName': true,
                'isCorrect': true,
            },
            {
                'answer': 'Mycobacteria',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'COVID-19',
                'isBacteriaName': false,
                'isCorrect': false,
            },
            {
                'answer': 'Clostridium difficile',
                'isBacteriaName': true,
                'isCorrect': false,
            }
        ],
    },
]