import jwt
import requests
from cryptography.hazmat.primitives import serialization
import json
from rest_framework import  status

from dotenv import load_dotenv
import os
load_dotenv()

from landing.exceptions import BaseViewSetException

def getToken(request):
    auth = request.headers.get("Authorization", None)
    if not auth:
        raise Exception("authorization_header_missing")
    
    parts = auth.split()
    if parts[0].lower() != "bearer":
        raise Exception("Authorization header must start with Bearer")
    elif len(parts) == 1:
        raise Exception("Token not found")
    elif len(parts) > 2:
        raise Exception("Authorization header must be Bearer token")

    token = parts[1]
    return token

class CustomAuthenticationMiddleware(BaseViewSetException):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = None
        try:
            tenent_id = str(os.getenv("tenent_id"))
            audience = str(os.getenv("audience"))
            issuer = str(os.getenv("issuer"))

            print(audience , issuer ,tenent_id)
            token = getToken(request)
            jsonurl = requests.get("https://login.microsoftonline.com/" + tenent_id + "/discovery/v2.0/keys")
            jwks = jsonurl.json()
            rsa_key = {}
            unverified_header = jwt.get_unverified_header(token)
            for key in jwks["keys"]:
                if key["kid"] == unverified_header["kid"]: 
                    rsa_key = {
                                    "kty": key["kty"],
                                    "kid": key["kid"],
                                    "use": key["use"],
                                    "n": key["n"],
                                    "e": key["e"]
                        }
            rsa_pem_key = jwt.algorithms.RSAAlgorithm.from_jwk(json.dumps(rsa_key))
            rsa_pem_key_bytes = rsa_pem_key.public_bytes(
                    encoding=serialization.Encoding.PEM, 
                    format=serialization.PublicFormat.SubjectPublicKeyInfo
                )
            print(audience , issuer )
            payload = jwt.decode(
                            token,
                            rsa_pem_key_bytes,
                            algorithms=["RS256"],
                            audience = audience,
                            issuer=issuer,
                            verify= True
                        )
            print(payload)
            modified_request  = request.GET.copy()
            modified_request['name'] = payload["name"]
            modified_request['mail'] = payload["unique_name"]
            modified_request['roles'] = payload["roles"]
            request.GET = modified_request
            response = self.get_response(request)
        except Exception as e :
            return self.error_response(str(e), status=status.HTTP_401_UNAUTHORIZED)
        
        return response
