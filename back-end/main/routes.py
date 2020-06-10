from flask import render_template, request
from main import app, db
from main.models import *

@app.route('/myads', methods = ['POST'])
def myads():
	user_id = request.json['user_id']

	try:
		ads = Ad.query.filter_by(user_id = user_id).all()
		adList = []

		for ad in ads:
			x = {'id': ad.id, 'user_id': ad.user_id, 'book_name': ad.book_name}
			adList.append(x)

		response = {'ads': adList, 'success': True}

	except Exception as e:
		response = {'success': False, 'error': str(e)}

	return response

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