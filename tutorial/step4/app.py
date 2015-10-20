from cowpy import cow
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<pre>{}</pre>'.format(cow.Bunny().milk("hello"))

if __name__ == '__main__':
    app.run()
