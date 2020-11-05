import sys

from jinja2 import Template, Environment, FileSystemLoader

templates_dir = 'templates'

templates = [
    {
        'path': 'index.html',
        'outputPath': 'index.html',
        'data': {
            'biologyQuizCards': [
                {
                    'location': '/sesalci-kviz.html',
                    'image': '/static/img/cat.jpg',
                    'title': 'Sesalci',
                },
                {
                    'location': '/clovesko-telo-kviz.html',
                    'image': '/static/img/body.jpg',
                    'title': 'Človeško telo',
                },
                {
                    'location': '/fotosinteza-rastline-kviz.html',
                    'image': '/static/img/flower.jpg',
                    'title': 'Fotosinteza in rastline',
                },
                {
                    'location': '/genetika-kviz.html',
                    'image': '/static/img/genetics.jpg',
                    'title': 'Genetika',
                },
                {
                    'location': '/celica-kviz.html',
                    'image': '/static/img/cell.jpg',
                    'title': 'Celica',
                },
            ],
            'geographyQuizCards': [
                {
                    'location': '/zastave-kviz.html',
                    'image': '/static/img/flags.jpg',
                    'title': 'Zastave',
                },
                {
                    'location': '/prestolnice-kviz.html',
                    'image': '/static/img/capitals.jpg',
                    'title': 'Prestolnice',
                },
                {
                    'location': '/oblike-evropskih-drzav-kviz.html',
                    'image': '/static/img/europe-countries.jpg',
                    'title': 'Oblike evropskih držav',
                },
            ],
        }
    },
    {
        'path': 'o-strani.html',
        'outputPath': 'o-strani.html',
        'data': {}
    },
    {
        'path': 'quiz.html',
        'outputPath': 'sesalci-kviz.html',
        'data': {
            'title': 'Sesalci',
            'questionsPath': '/static/js/questions-sesalci.js',
            'description': 'Sesalci (razred Mammalia) so najvišje razviti razred vretenčarjev in s tem najbolj razvite živali. Od ostalih se ločijo predvsem po tem, da samice svoje mladiče hranijo z mlekom iz svojih mlečnih žlez. Preveri svoje znanje o sesalcih!',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'clovesko-telo-kviz.html',
        'data': {
            'title': 'Človeško telo',
            'questionsPath': '/static/js/questions-clovesko-telo.js',
            'description': 'Kako dobro poznaš svoje telo? Človeško telo je zelo zapleten sistem med sabo povezanih delov in procesov, ki sestavljajo popolno celoto. Preveri svoje znanje s področja človeške biologije!',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'fotosinteza-rastline-kviz.html',
        'data': {
            'title': 'Fotosinteza in rastline',
            'questionsPath': '/static/js/questions-fotosinteza.js',
            'description': 'Rastline (kraljestvo Plantae) so eno izmed kraljestev živih bitij, v katerega spadajo najrazličnejše oblike rastlin. Za njih je značilno, da energijo za rast pridobivajo s pomočjo fotosinteze in da so celične stene zgrajene iz celuloze. Preveri svoje znanje o življenju rastlin!',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'genetika-kviz.html',
        'data': {
            'title': 'Genetika',
            'questionsPath': '/static/js/questions-genetika.js',
            'description': 'Genetika je panoga biologije, ki proučuje dedovanje, lastnosti genov in DNA. Geni so pomembni za zgradbo in delovanje vseh živih bitij in jih najdemo skoraj v vseh celicah, ki gradijo živa bitja. Preveri svoje znanje o genih, ki te definirajo!',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'celica-kviz.html',
        'data': {
            'title': 'Genetika',
            'questionsPath': '/static/js/questions-celica.js',
            'description': 'Celica je osnovna gradbena in funkcionalna enota vseh živih organizmov. Lahko jo imenujemo kar "gradbeni element življenja". Preveri kako je zgrajena celica in kako to vpliva na življenje živih bitij!',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'zastave-kviz.html',
        'data': {
            'title': 'Zastave',
            'questionsPath': '/static/js/questions-zastave.js',
            'description': 'Zastava je simbol države, ki v prebivalcih vzbuja pripadnost državi ob najrazličnejših dogodkih tako ob proslavah v domovini kot v tujini. Vsaka zastava nam pripoveduje svojo zgodbo in predstavlja barve države. Odkrij katera zastava pripada kateri državi!',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'prestolnice-kviz.html',
        'data': {
            'title': 'Prestolnice',
            'questionsPath': '/static/js/questions-prestolnice.js',
            'description': 'V kvizu preveri ali poznaš prestolnice svetovnih držav.',
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'oblike-evropskih-drzav-kviz.html',
        'data': {
            'title': 'Oblike evropskih držav',
            'questionsPath': '/static/js/questions-eu-oblike-drzav.js',
            'description': 'Kako dobro poznaš oblike držav? Preveri svoje znanje v kvizu o prepoznavanju evropskih držav po obliki!',
        }
    },
]

env = Environment(loader=FileSystemLoader(f'{templates_dir}/'))

base_data = {
    'debug': sys.argv[1] == 'debug' if len(sys.argv) > 1 else False,
}

for template in templates:
    template_path = template['path']
    output_path = template['outputPath']
    with open(f'{templates_dir}/{template_path}', encoding='utf-8') as f:
        template_text = f.read()

    jinja_template = env.from_string(template_text)

    with open(f'./{output_path}', 'w', encoding='utf-8') as f:
        data = {**base_data, **template['data']}
        f.write(jinja_template.render(data))
