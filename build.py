import sys

from jinja2 import Template, Environment, FileSystemLoader

templates_dir = 'templates'

quizzes = {
    'sesalci': {
        'path': 'sesalci-kviz.html',
        'image': '/static/img/cat.jpg',
        'title': 'Sesalci',
        'questionsPath': '/static/js/questions-sesalci.js',
        'description': 'Sesalci (razred Mammalia) so najvišje razviti razred vretenčarjev in s tem najbolj razvite živali. Od ostalih se ločijo predvsem po tem, da samice svoje mladiče hranijo z mlekom iz svojih mlečnih žlez. Preveri svoje znanje o sesalcih!',
        'relatedQuizzes': ['clovesko-telo', 'fotosinteza-rastline', 'genetika', 'celica'],
    },
    'clovesko-telo': {
        'path': 'clovesko-telo-kviz.html',
        'image': '/static/img/body.jpg',
        'title': 'Človeško telo',
        'questionsPath': '/static/js/questions-clovesko-telo.js',
        'description': 'Kako dobro poznaš svoje telo? Človeško telo je zelo zapleten sistem med sabo povezanih delov in procesov, ki sestavljajo popolno celoto. Preveri svoje znanje s področja človeške biologije!',
        'relatedQuizzes': ['sesalci', 'fotosinteza-rastline', 'genetika', 'celica'],
    },
    'fotosinteza-rastline': {
        'path': 'fotosinteza-rastline-kviz.html',
        'image': '/static/img/flower.jpg',
        'title': 'Fotosinteza in rastline',
        'questionsPath': '/static/js/questions-fotosinteza.js',
        'description': 'Rastline (kraljestvo Plantae) so eno izmed kraljestev živih bitij, v katerega spadajo najrazličnejše oblike rastlin. Za njih je značilno, da energijo za rast pridobivajo s pomočjo fotosinteze in da so celične stene zgrajene iz celuloze. Preveri svoje znanje o življenju rastlin!',
        'relatedQuizzes': ['sesalci', 'clovesko-telo', 'genetika', 'celica'],
    },
    'genetika': {
        'path': 'genetika-kviz.html',
        'image': '/static/img/genetics.jpg',
        'title': 'Genetika',
        'questionsPath': '/static/js/questions-genetika.js',
        'description': 'Genetika je panoga biologije, ki proučuje dedovanje, lastnosti genov in DNA. Geni so pomembni za zgradbo in delovanje vseh živih bitij in jih najdemo skoraj v vseh celicah, ki gradijo živa bitja. Preveri svoje znanje o genih, ki te definirajo!',
        'relatedQuizzes': ['sesalci', 'clovesko-telo', 'fotosinteza-rastline', 'celica'],
    },
    'celica': {
        'path': 'celica-kviz.html',
        'image': '/static/img/cell.jpg',
        'title': 'Celica',
        'questionsPath': '/static/js/questions-celica.js',
        'description': 'Celica je osnovna gradbena in funkcionalna enota vseh živih organizmov. Lahko jo imenujemo kar "gradbeni element življenja". Preveri kako je zgrajena celica in kako to vpliva na življenje živih bitij!',
        'relatedQuizzes': ['sesalci', 'clovesko-telo', 'fotosinteza-rastline', 'genetika'],
    },
    'zastave': {
        'path': 'zastave-kviz.html',
        'image': '/static/img/flags.jpg',
        'title': 'Zastave',
        'questionsPath': '/static/js/questions-zastave.js',
        'description': 'Zastava je simbol države, ki v prebivalcih vzbuja pripadnost državi ob najrazličnejših dogodkih tako ob proslavah v domovini kot v tujini. Vsaka zastava nam pripoveduje svojo zgodbo in predstavlja barve države. Odkrij katera zastava pripada kateri državi!',
        'relatedQuizzes': ['prestolnice', 'oblike-evropskih-drzav'],
    },
    'prestolnice': {
        'path': 'prestolnice-kviz.html',
        'image': '/static/img/capitals.jpg',
        'title': 'Prestolnice',
        'questionsPath': '/static/js/questions-prestolnice.js',
        'description': 'V kvizu preveri ali poznaš prestolnice svetovnih držav.',
        'relatedQuizzes': ['zastave', 'oblike-evropskih-drzav'],
    },
    'oblike-evropskih-drzav': {
        'path': 'oblike-evropskih-drzav-kviz.html',
        'image': '/static/img/europe-countries.jpg',
        'title': 'Oblike evropskih držav',
        'questionsPath': '/static/js/questions-eu-oblike-drzav.js',
        'description': 'Kako dobro poznaš oblike držav? Preveri svoje znanje v kvizu o prepoznavanju evropskih držav po obliki!',
        'relatedQuizzes': ['zastave', 'prestolnice'],
    },
    'splosna-knjizevnost': {
        'path': 'splosna-knjizevnost-kviz.html',
        'image': '/static/img/books.jpg',
        'title': 'Splošna književnost',
        'questionsPath': '/static/js/questions-knjizevnost.js',
        'description': 'Preveri svoje znanje iz svetovne in slovenske književnosti.',
        'relatedQuizzes': ['slovenska-lirika'],
    },
    'slovenska-lirika': {
        'path': 'slovenska-lirika-kviz.html',
        'image': '/static/img/preseren.jpg',
        'title': 'Slovenska lirika',
        'questionsPath': '/static/js/questions-lirika.js',
        'description': 'Lirika ali pesništvo so besedila zapisana v verzih. Tisti, ki se izpoveduje je pesniški ali lirski subjekt. Preveri poznavanaje slovenske poezije in njenih ustvarjalcev v kvizu Slovenska lirika.',
        'relatedQuizzes': ['splosna-knjizevnost'],
    },
    'visine-slovenskih-gora': {
        'path': 'visine-slovenskih-gora-kviz.html',
        'image': '/static/img/mountains.jpg',
        'title': 'Višine slovenskih gora',
        'questionsPath': '/static/js/questions-visine.js',
        'description': 'Nadmorska višina je višina nekega kraja nad gladino morja. Vsak vrh ima izmerjeno svojo nadmorsko višino, zato v kvizu preveri, kako dobro si si zapomnil nadmorsko višino zadnjega osvojenega vrha.',
        'relatedQuizzes': ['slovenske-planinske-koce', 'grbi-slovenskih-obcin'],
    },
    'slovenske-planinske-koce': {
        'path': 'slovenske-planinske-koce-kviz.html',
        'image': '/static/img/koca.jpg',
        'title': 'Slovenske planinske koče',
        'questionsPath': '/static/js/questions-koce.js',
        'description': 'Planinska koča je varno zatočišče pred nevihto v gorah in prostor, kjer se lahko po dolgi poti sprostimo in okrepčamo. Planinci radi izbiramo pohodniške cilje, ki imajo na poti tudi planinsko kočo. Preveri kako dobro poznaš slovenske planinske koče in morda dobiš navdih za naslednji planinski izlet.',
        'relatedQuizzes': ['visine-slovenskih-gora', 'grbi-slovenskih-obcin'],
    },
    'grbi-slovenskih-obcin': {
        'path': 'grbi-slovenskih-obcin-kviz.html',
        'image': '/static/img/grb.jpg',
        'title': 'Grbi slovenskih občin',
        'questionsPath': '/static/js/questions-grbi.js',
        'description': 'Grb je simbol mesta, države, društva ali občine. Je simbol, ki izhaja že iz časov srednjega veka. Vitezi so si namreč pobarvali svoje ščite, da so dosegli večjo prepoznavnost. Danes grbe občin največkrat opazimo na registrskih tablicah. V zgornjem kvizu preveri, kako dobro poznaš grbe slovenskih občin.',
        'relatedQuizzes': ['visine-slovenskih-gora', 'slovenske-planinske-koce'],
    }
}

def get_quizzes_by_key(keys):
    return [quizzes[key] for key in keys]

templates = [
    {
        'path': 'index.html',
        'outputPath': 'index.html',
        'data': {
            'quizSections': [
                { 'title': 'Kvizi o Sloveniji', 'quizCards': get_quizzes_by_key(['visine-slovenskih-gora', 'slovenske-planinske-koce', 'grbi-slovenskih-obcin']) },
                { 'title': 'Geografski kvizi', 'quizCards': get_quizzes_by_key(['zastave', 'prestolnice', 'oblike-evropskih-drzav']) },
                { 'title': 'Biološki kvizi', 'quizCards': get_quizzes_by_key(['sesalci', 'clovesko-telo', 'fotosinteza-rastline', 'genetika', 'celica']) },
                { 'title': 'Kvizi o književnosti', 'quizCards': get_quizzes_by_key(['splosna-knjizevnost', 'slovenska-lirika']) },
            ]
        }
    },
    {
        'path': 'o-strani.html',
        'outputPath': 'o-strani.html',
        'data': {}
    },
] + [
    {
        'path': 'quiz.html',
        'outputPath': quiz['path'],
        'data': {
            **quiz,
            'relatedQuizzes': get_quizzes_by_key(quiz['relatedQuizzes'])
        }
    } for quiz in quizzes.values()
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
