from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    number1 = 564
    number2 = 24
    message = "Hello, Flask!"

    return render_template('test.html', number1=number1, number2=number2, message=message)
