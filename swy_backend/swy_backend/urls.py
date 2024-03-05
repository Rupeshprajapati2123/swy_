# project/urls.py

from django.urls import path, include  # Import include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),  # Include app-specific API URLs
]
