from django.urls import path
from .views import *


urlpatterns = [
    path("example", ExampleGPTApiView.as_view()),
]