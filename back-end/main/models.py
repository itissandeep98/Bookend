from main import db

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