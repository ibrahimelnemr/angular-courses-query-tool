from django.urls import path
from .views import get_courses_by_competency

urlpatterns = [
    path('courses/', get_courses_by_competency)
]
