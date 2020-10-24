from jinja2 import Template, Environment, FileSystemLoader

templates_dir = 'templates'
www_root_dir = 'docs'

templates = [
    {
        'path': 'index.html',
        'outputPath': 'index.html',
        'data': {
            'quizCards': [
                {
                    'location': '/sesalci-kviz.html',
                    'image': '/static/img/cat.jpg',
                    'title': 'Sesalci',
                    'description': 'Kaj veš o sesalcih?'
                },
                {
                    'location': '/clovesko-telo-kviz.html',
                    'image': '/static/img/body.jpg',
                    'title': 'Človeško telo',
                    'description': 'Preizkusite svoje znanje o človeškem telesu!'
                }
            ]
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
        }
    },
    {
        'path': 'quiz.html',
        'outputPath': 'clovesko-telo-kviz.html',
        'data': {
            'title': 'Človeško telo',
            'questionsPath': '/static/js/questions-clovesko-telo.js',
        }
    }
]

env = Environment(loader=FileSystemLoader(f'{templates_dir}/'))

for template in templates:
    template_path = template['path']
    output_path = template['outputPath']
    with open(f'{templates_dir}/{template_path}', encoding='utf-8') as f:
        template_text = f.read()

    jinja_template = env.from_string(template_text)

    with open(f'{www_root_dir}/{output_path}', 'w', encoding='utf-8') as f:
        f.write(jinja_template.render(template['data']))
