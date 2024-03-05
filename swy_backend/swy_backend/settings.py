# Import necessary modules
from pathlib import Path
import pymongo

# Define MongoDB URI and database name
MONGODB_URI = "mongodb://localhost:27017/"  # Update with your MongoDB URI
MONGODB_DB_NAME = "swy"  # Update with your MongoDB database name

# Create a MongoClient and connect to the database
client = pymongo.MongoClient(MONGODB_URI)
db = client[MONGODB_DB_NAME]

# Define base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Django secret key
SECRET_KEY = 'django-insecure-57+(p)jy#2=db2uij(tn1z0)9antl6(tv-t@z5v0+gz!+0avo&'

# Debug mode
DEBUG = True

# Allowed hosts
ALLOWED_HOSTS = []

# Installed apps
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app',
    'corsheaders',
]
CORS_ORIGIN_ALLOW_ALL = True

# Middleware
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

# Root URL configuration
ROOT_URLCONF = 'swy_backend.urls'

# Template configuration
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI application
WSGI_APPLICATION = 'swy_backend.wsgi.application'

# Database configuration using Djongo
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': MONGODB_DB_NAME,  # Use the MongoDB database name
        'CLIENT': {
            'host': MONGODB_URI,  # MongoDB URI
        },
    }
}

# Password validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization settings
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static files configuration
STATIC_URL = '/static/'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
