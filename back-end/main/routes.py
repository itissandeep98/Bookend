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

@app.route('/register', methods = ['POST', 'GET'])
def register():
	return 'Register'

@app.route('/')
def index():
   return render_template('index.html')