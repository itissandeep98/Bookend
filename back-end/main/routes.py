from flask import render_template, request
from main import app
from main.models import *

@app.route('/login', methods = ['POST'])
def login():
	# print(request.json)
	email_id = request.json['username']
	password = request.json['password']
	
	user = User.query.filter_by(email_id = email_id).first()
	
	response = {'success': False}

	if user != None and user.password == password:
		success = True
		response = {'id': user.id, 'roll_no': user.roll_no, 'name': user.name, 'email_id': user.email_id, 'success': True}

	return response

@app.route('/register', methods = ['POST'])
def register():
	name = request.json['name']
	roll_num = request.json['roll_num']
	email_id = request.json['email_id']
	password = request.json['password']

	try:
		user = User(name = name, roll_num = roll_num, email_id = email_id, password = password)
		db.session.add(user)
		db.session.commit()
		response = {'success': True}
		
	except:
		response = {'success': False}

	return response

@app.route('/')
def index():
   return render_template('index.html')