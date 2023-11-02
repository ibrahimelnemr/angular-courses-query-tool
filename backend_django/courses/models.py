from django.db import models

class Course(models.Model):
    course_code = models.CharField(max_length=255)
    mapped_by = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    course_name = models.CharField(max_length=255)
    competency_class = models.CharField(max_length=255)
    reasoning_interpretation = models.CharField(max_length=255)
    complex_problem_solving = models.CharField(max_length=255)
    creative_thinking = models.CharField(max_length=255)
    effective_communication = models.CharField(max_length=255)
    future_intelligence = models.CharField(max_length=255)
    building_managing_relationships = models.CharField(max_length=255)
    fostering_effective_collaboration = models.CharField(max_length=255)
    social_interpersonal_communication = models.CharField(max_length=255)
    digital_fluency = models.CharField(max_length=255)
    prototyping_design = models.CharField(max_length=255)
    culture_identity_society = models.CharField(max_length=255)
    business_society = models.CharField(max_length=255)
    science_technology_society = models.CharField(max_length=255)
    self_awareness_self_management = models.CharField(max_length=255)
    resilience_grit = models.CharField(max_length=255)
    inquisitive_spirit = models.CharField(max_length=255)
    ethics_values = models.CharField(max_length=255)
    course_comments = models.TextField()

    def __str__(self):
        return self.course_name
