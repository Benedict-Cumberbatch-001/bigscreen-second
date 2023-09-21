from flask import Flask,render_template,send_file

app = Flask(__name__)


@app.route('/')
def hello():  # put application's code here
    return render_template('EPMS.html')
    # html_file_path = 'static/HTML/微震监测.html'
    # return send_file(html_file_path)

if __name__ == '__main__':
    app.run()
