import csv
import os
import sys
from django.core.wsgi import get_wsgi_application

project_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(project_path)


os.environ['DJANGO_SETTINGS_MODULE'] = 'backend_django.settings'

application = get_wsgi_application()

from courses.models import Course

csv_file = os.path.abspath(os.path.join(project_path, 'utils/arch.csv')) 

with open(csv_file, 'r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader)

    for row in csv_reader:
        Course.objects.create(
            course_code=row[0], 
            mapped_by=row[1],   
            department=row[2],  
            course_name=row[3], 
            competency_class=row[4],
            reasoning_interpretation=row[5],
            complex_problem_solving=row[6], 
            creative_thinking=row[7], 
            effective_communication=row[8],
            future_intelligence=row[9], 
            building_managing_relationships=row[10],  
            fostering_effective_collaboration=row[11],
            social_interpersonal_communication=row[12],
            digital_fluency=row[13],  
            prototyping_design=row[14],
            culture_identity_society=row[15], 
            business_society=row[16],
            science_technology_society=row[17],
            self_awareness_self_management=row[18],
            resilience_grit=row[19], 
            inquisitive_spirit=row[20], 
            ethics_values=row[21],
            course_comments=row[22] 
        )






