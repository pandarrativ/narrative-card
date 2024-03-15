import datetime
import json
import ast
import random

def get_current_time():
    return datetime.datetime.now()

# parser into json
def parse_to_json(resp):
    return json.loads(resp)

# enhanced version of passing json  
def parse_to_json_enhance(resp):
    try:
        return json.loads(resp)
    except Exception as e:  # incase it the dict keys is wrapped by ' instead of "
        return ast.literal_eval(resp)
