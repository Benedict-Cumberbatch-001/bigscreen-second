from flask import Flask,render_template,send_file
import json
app = Flask(__name__)

@app.route('/modify_json', methods=['POST'])
def modify_json(jsonfilename):

    # 在这里编写您的Python函数逻辑
    data = request.get_json()
    result = {"message": "Hello from Python!", "input_data": data}
    return jsonify(result)
@app.route('/')
def hello():  # put application's code here
    return render_template('EPMS.html')
    # html_file_path = 'static/HTML/微震监测.html'
    # return send_file(html_file_path)

if __name__ == '__main__':
    app.run()
