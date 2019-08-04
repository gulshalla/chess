from flask import Flask, render_template

app = Flask(__name__, static_folder="shalla-chess/build/static", template_folder="shalla-chess/build")

@app.route("/")
def serve():
    return render_template('index.html')

if __name__ == '__main__':
	app.run()