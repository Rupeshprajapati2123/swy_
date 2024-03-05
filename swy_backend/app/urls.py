# project/api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('save_timesheet', views.save_timesheet, name='save_timesheet'), 
    
]
