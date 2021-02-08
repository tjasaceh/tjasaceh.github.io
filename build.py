import sys

from jinja2 import Template, Environment, FileSystemLoader
import markdown

templates_dir = 'templates'

articles = {
    'ekstremofil': {
        'path': 'clanki/kako-postati-ekstremofil.html',
        'title': 'Kako postati ekstremofil?',
        'description': 'Ste kdaj razmišljali kako bi preživeli potencialno apokalipso?',
        'image': '/static/img/clanki/tardigrade.jpg',
        'date': '13. november 2020',
        'markdownPath': 'clanki-markdown/kako-postati-ekstremofil.md'
    },
    'kloniranje': {
        'path': 'clanki/kloniranje.html',
        'title': 'Kloniranje za vsakdan',
        'description': 'Kloniranje ni nekaj novega, kar se dogaja v laboratorijih. To je nekaj, kar se dogaja v naravi že od nekdaj.',
        'image': '/static/img/clanki/ovca.jpg',
        'date': '13. november 2020',
        'markdownPath': 'clanki-markdown/kloniranje.md'
    },
    'slovenski-drzavni-simboli': {
        'path': 'clanki/zgodovina-slovenske-zastave.html',
        'title': 'Zgodovina slovenske zastave',
        'description': 'Slovenska zastava je bila prvič dvignjena 26.6.1991 na Trgu republike v Ljubljani.',
        'image': '/static/img/clanki/slovenija-grb.jpg',
        'date': '18. november 2020',
        'markdownPath': 'clanki-markdown/slovenski-drzavni-simboli.md'
    },
    'paraziti': {
        'path': 'clanki/paraziti.html',
        'title': 'Slepi potniki v vašem telesu',
        'description': 'Zajedavci ali paraziti so živali ali rastline, ki stalno ali občasno živijo na račun drugega organizma (gostitelja).',
        'image': '/static/img/paraziti.jpg',
        'date': '2. december 2020',
        'markdownPath': 'clanki-markdown/paraziti.md'
    },
}

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
        'relatedQuizzes': ['slovenske-planinske-koce', 'grbi-slovenskih-obcin', 'vse-o-sloveniji'],
    },
    'slovenske-planinske-koce': {
        'path': 'slovenske-planinske-koce-kviz.html',
        'image': '/static/img/koca.jpg',
        'title': 'Slovenske planinske koče',
        'questionsPath': '/static/js/questions-koce.js',
        'description': 'Planinska koča je varno zatočišče pred nevihto v gorah in prostor, kjer se lahko po dolgi poti sprostimo in okrepčamo. Planinci radi izbiramo pohodniške cilje, ki imajo na poti tudi planinsko kočo. Preveri kako dobro poznaš slovenske planinske koče in morda dobiš navdih za naslednji planinski izlet.',
        'relatedQuizzes': ['visine-slovenskih-gora', 'grbi-slovenskih-obcin', 'vse-o-sloveniji'],
    },
    'grbi-slovenskih-obcin': {
        'path': 'grbi-slovenskih-obcin-kviz.html',
        'image': '/static/img/grb.jpg',
        'title': 'Grbi slovenskih občin',
        'questionsPath': '/static/js/questions-grbi.js',
        'description': 'Grb je simbol mesta, države, društva ali občine. Je simbol, ki izhaja že iz časov srednjega veka. Vitezi so si namreč pobarvali svoje ščite, da so dosegli večjo prepoznavnost. Danes grbe občin največkrat opazimo na registrskih tablicah. V zgornjem kvizu preveri, kako dobro poznaš grbe slovenskih občin.',
        'relatedQuizzes': ['visine-slovenskih-gora', 'slovenske-planinske-koce', 'vse-o-sloveniji'],
    },
    'preseren': {
        'path': 'preseren-kviz.html',
        'image': '/static/img/preseren.jpg',
        'title': 'France Prešeren',
        'questionsPath': '/static/js/questions-preseren.js',
        'description': 'Preveri svoje znanje o življenju in delu slovenskega največjega pesnika Franceta Prešerna.',
        'relatedQuizzes': ['visine-slovenskih-gora', 'slovenske-planinske-koce', 'vse-o-sloveniji'],
    },
    'vse-o-sloveniji': {
        'path': 'vse-o-sloveniji-kviz.html',
        'image': '/static/img/bled.jpg',
        'title': 'Vse o Sloveniji',
        'questionsPath': '/static/js/questions-slovenija.js',
        'description': 'Slovenija je država v srednji Evropi, ki meji na Italijo, Avstrijo, Madžarsko in Hrvaško. Leži  na stičišču alpskega, sredozemskega, panonskega in dinarskega sveta. Kljub svoji majhnosti je dežela lepih razgledov, dobre hrane in prijaznih ljudi. Preveri kako dobro poznaš svojo deželo v kvizu o Sloveniji.',
        'relatedQuizzes': ['visine-slovenskih-gora', 'slovenske-planinske-koce', 'grbi-slovenskih-obcin'],
    },
    'grska-mitologija': {
        'path': 'grska-mitologija-kviz.html',
        'image': '/static/img/grska-mitologija.jpg',
        'title': 'Grška mitologija',
        'questionsPath': '/static/js/questions-grska-mitologija.js',
        'description': 'Preveri kako dobro poznaš zgodbe iz grške mitologije in se preizkusi v kvizu o grški mitologiji.',
        'relatedQuizzes': ['splosna-knjizevnost'],
    },
    'paraziti': {
        'path': 'paraziti-kviz.html',
        'image': '/static/img/paraziti.jpg',
        'title': 'Paraziti',
        'questionsPath': '/static/js/questions-paraziti.js',
        'description': 'Zajedavci ali paraziti so živali ali rastline, ki stalno ali občasno živijo na račun drugega organizma (gostitelja). Ljudje se lahko večkrat v življenju srečamo s to nadlogo. Pogosto se zgodi, da človek sploh ne ve, da je okužen. V kvizu o parazitih preveri kakšni se lahko znajdejo v človeškem telesu.',
        'relatedQuizzes': ['sesalci', 'clovesko-telo', 'fotosinteza-rastline', 'celica', 'genetika'],
    },
}

memory_games = {
    'planinske-koce': {
        'path': 'planinske-koce-spomin.html',
        'image': '/static/img/koce/kredarica.jpg',
        'title': 'Slovenske planinske koče',
        'description': '',
        'memoryCardsPath': '/static/js/memory-cards/planinske-koce.js',
    },
    'sesalci': {
        'path': 'sesalci-spomin.html',
        'image': '/static/img/sesalci/dog.jpg',
        'title': 'Sesalci',
        'description': '',
        'memoryCardsPath': '/static/js/memory-cards/sesalci.js',
    },
}

def get_quizzes_by_key(keys):
    return [quizzes[key] for key in keys]


def markdown_to_html(markdown_path):
    with open(markdown_path, 'r', encoding='utf-8') as f:
        text = f.read()
    return markdown.markdown(text)


templates = [
    {
        'path': 'index.html',
        'outputPath': 'index.html',
        'data': {
            'quizSections': [
                { 'title': 'Kvizi o Sloveniji', 'quizCards': get_quizzes_by_key(['preseren', 'vse-o-sloveniji', 'visine-slovenskih-gora', 'slovenske-planinske-koce', 'grbi-slovenskih-obcin']) },
                { 'title': 'Geografski kvizi', 'quizCards': get_quizzes_by_key(['zastave', 'prestolnice', 'oblike-evropskih-drzav']) },
                { 'title': 'Biološki kvizi', 'quizCards': get_quizzes_by_key(['paraziti', 'sesalci', 'clovesko-telo', 'fotosinteza-rastline', 'genetika', 'celica']) },
                { 'title': 'Kvizi o književnosti', 'quizCards': get_quizzes_by_key(['splosna-knjizevnost', 'slovenska-lirika', 'grska-mitologija']) },
            ],
            'articles': [
                articles['paraziti'],
                articles['slovenski-drzavni-simboli'],
                articles['ekstremofil'],
                articles['kloniranje'],
            ],
            'memoryGames': [
                memory_games['planinske-koce'],
                memory_games['sesalci'],
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
] + [
    {
        'path': 'article.html',
        'outputPath': article['path'],
        'data': {
            **article,
            'html': markdown_to_html(article['markdownPath'])
        }
    } for article in articles.values()
] + [
    {
        'path': 'memory.html',
        'outputPath': memoryGame['path'],
        'data': memoryGame,
    } for memoryGame in memory_games.values()
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
