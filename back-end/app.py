from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_pyfile('config.cfg')
db = SQLAlchemy(app)

class Test1(db.Model):
	id = db.Column(db.Integer, primary_key = True)

class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	roll_no = db.Column(db.Integer, unique = True, nullable = False)
	name = db.Column(db.String(254), nullable = False)
	email_id = db.Column(db.String(254), nullable = False)
	password = db.Column(db.String(60), nullable = False)

	def __repr__(self):
	 return f"User('{self.id}', '{self.roll_no}', '{self.name}', '{self.email_id}', '{self.password}')"

@app.route('/login', methods = ['POST'])
def login():
	# print(request.json)
	email_id = request.json['username']
	password = request.json['password']
	
	user = User.query.filter_by(email_id = email_id).first()
	
	response = {'success': False}

	if user!=None and user.password == password:
		success = True
		response = {'id': user.id, 'roll_no': user.roll_no, 'name': user.name, 'email_id': user.email_id, 'success': True}

	return response

@app.route('/')
def index():
   return render_template('index.html')

if __name__ == '__main__':
	app.run(debug = True, port = '3000')