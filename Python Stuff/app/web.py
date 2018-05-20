from flask import Flask, request, abort
from Cognito import Connection
import logging
import json
import datetime

app = Flask(__name__)

@app.route('/register', methods=["POST"])
def register():
  userInfo = request.get_json()
  connection = Connection()
  timestamp = datetime.date.strftime('%b %d, %Y')
  response = connection.registerUser(
      userInfo['username'], userInfo['password'], userInfo['email'], userInfo['given_name'], userInfo['family_name'], userInfo['zip_code'], timestamp)
  if response:
    return response
  else:
    abort(404)

@app.route('/confirm', methods=["POST"])
def confirm():
  userInfo = request.get_json()
  connection = Connection()
  response = connection.verifyUser(userInfo['username'], userInfo['verificationNumber'])
  if response:
    return response
  else:
    abort(404)

@app.route('/login', methods=["POST"])
def login():
  userInfo = request.get_json()
  connection = Connection()
  response = connection.login(userInfo['username'], userInfo['password'])
  if response:
    return response
  else:
    abort(404)

@app.route('/user/:id', methods=["GET"])
def getUser():
  userInfo = request.params()
  connection = Connection()
  response = connection.getUserData(userInfo.get('username'), userInfo.get('client-id'))
  if response:
    return response
  else:
    abort(404)

if __name__ == '__main__':
  app.run()
