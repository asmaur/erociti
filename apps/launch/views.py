from django.shortcuts import render, HttpResponse
import json
from .models import *
# Create your views here.

def index(request):
    return render(request, "launch/coming-timer.html")



def error_404_view(request, exception):
    return render(request,'launch/error.html', {}, status=404)

def error_403_view(request, exception):
    return render(request,'launch/error.html', {}, status=403)