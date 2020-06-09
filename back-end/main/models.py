from main import db

class Test1(db.Model):
	id = db.Column(db.Integer, primary_key = True)

class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	name = db.Column(db.String(50), nullable = False)
	roll_num = db.Column(db.String(10), unique = True, nullable = False)
	email_id = db.Column(db.String(254), nullable = False)
	password = db.Column(db.String(60), nullable = False)

	def __repr__(self):
	 return f"User('{self.id}', '{self.roll_num}', '{self.name}', '{self.email_id}', '{self.password}')"