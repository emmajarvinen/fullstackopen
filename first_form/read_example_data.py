from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
    return render_template('form_example.html')

@app.route('/showdata', methods=['GET', 'POST'])
def showdata():
    return render_template('set_example_form_data.html', name=request.form['user_name'], email=request.form['user_email'], msg=request.form['user_message'])

if __name__ == "__main__":
    app.run()