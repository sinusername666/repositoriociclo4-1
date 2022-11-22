# -*- coding: utf-8 -*-
"""
Created on Wed Nov 16 17:07:42 2022

@author: crist
"""
# Download the helper library from https://www.twilio.com/docs/python/install

# Find your Account SID and Auth Token in Account Info and set the environment variables.
# See http://twil.io/secure

from flask import Flask
import os
from twilio.rest import Client
from flask import request
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)


@app.route("/")
def inicio():
    test = os.environ.get("Test")
    return test


@app.route("/mensajetxt")
def mensajetxt():
    try:
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)
        
        message = client.messages.create(
           messaging_service_sid='MG5f2c52151a5226b098d8200fd45e194c', 
           body='Hi there',
           from_='+18305055850',
           to='+573170786524'
           )
                   
        print(message.sid)
        return"funcionando"
    except Exception as e:
        return "error que mal"

@app.route("/email")
def enviarCorreo():
    destino = request.args.get('correo_destino')
    asunto = request.args.get('asunto')
    mensaje = request.args.get('contenido')

    message = Mail(
        from_email='cristianriverag99@gmail.com',
        to_emails=destino,
        subject=asunto,
        html_content=mensaje)
    try:
        sg = SendGridAPIClient(os.environ.get("SENDGRID_API_KEY"))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        print("si envio")
        return "si envio el correo"
    except Exception as e:
        print("error"+e.message)
        return "no se envio el correo"


if __name__ == "__main__":
    app.run()
