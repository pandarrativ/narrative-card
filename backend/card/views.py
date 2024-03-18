from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect
from .utils.prompt_util import *
from .ai_models.openai_api import *
from .utils.utils import parse_to_json_enhance
from .dao import *

# Some more examples can be found under /controllers.yourfile.py
class ExampleGPTApiView(APIView):
    def post(self, request, format=None):
        try:
            user_id, goal = request.data["user_id"], request.data["goal"]
            prompt = analyze_setting_goal(goal=goal)
            resp = OpenAIAPI.send_messages(messages=[
                {"role":"system", "content":AGENT_SETTINGS},
                {"role":"user", "content":prompt}
            ])
            res = parse_to_json_enhance(resp=resp) # parse string into json

            #store data
            card_creation_id = CardDAO.new_card_creation(user_id=user_id, goal=res["goal"])
            res["card_creation_id"] = res
            return Response(res, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#     def get(self, request):
#         pass