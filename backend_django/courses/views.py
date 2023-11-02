from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Course
from django.db.models import Q


# Create your views here.


def get_courses_by_competency(request):
    if request.method == "GET":
        competency_query = request.GET['competency']
        courses = Course.objects.filter(
            Q(competency_class__icontains=competency_query) |
            Q(reasoning_interpretation__icontains=competency_query) |
            Q(complex_problem_solving__icontains=competency_query) |
            Q(creative_thinking__icontains=competency_query) |
            Q(effective_communication__icontains=competency_query) |
            Q(future_intelligence__icontains=competency_query) |
            Q(building_managing_relationships__icontains=competency_query) |
            Q(fostering_effective_collaboration__icontains=competency_query) |
            Q(social_interpersonal_communication__icontains=competency_query) |
            Q(digital_fluency__icontains=competency_query) |
            Q(prototyping_design__icontains=competency_query) |
            Q(culture_identity_society__icontains=competency_query) |
            Q(business_society__icontains=competency_query) |
            Q(science_technology_society__icontains=competency_query) |
            Q(self_awareness_self_management__icontains=competency_query) |
            Q(resilience_grit__icontains=competency_query) |
            Q(inquisitive_spirit__icontains=competency_query) |
            Q(ethics_values__icontains=competency_query) |
            Q(course_comments__icontains=competency_query)
        )
        courses_list = [{'course_name': course.course_name} for course in courses]
        
        return JsonResponse(courses_list, safe=False)
