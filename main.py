from flask import Flask, render_template

app = Flask('__name__')


@app.route('/')
def Home():
    return render_template('home.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/sign_up')
def sign_up():
    return render_template('sign_up.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contacts')
def contacts():
    return render_template('contacts.html')


@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')


if __name__ == '__main__':
    app.run(debug=True, port=1234)
