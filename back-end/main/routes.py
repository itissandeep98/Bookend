from flask import render_template, request
from main import app, db
from main.models import *

@app.route('/myads', methods = ['POST'])
def myads():
	id = request.json['id']

	ads = Ad.query.filter_by(id = id).all()

	print(ads[0].description)

	return {'success': True}

@app.route('/login', methods = ['POST'])
def login():
	# print(request.json)
	email_id = request.json['username']
	password = request.json['password']
	
	user = User.query.filter_by(email_id = email_id).first()
	
	response = {'success': False}

	if user != None and user.password == password:
		success = True
		response = {'id': user.id, 'roll_num': user.roll_num, 'name': user.name, 'email_id': user.email_id, 'success': True}

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
		
	except Exception as e:
		response = {'success': False, 'error': str(e)}

	return response

@app.route('/')
def index():
   return render_template('index.html')