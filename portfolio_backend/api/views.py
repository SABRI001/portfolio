# from django.shortcuts import render

# # Create your views here.
# from django.http import JsonResponse

# def profile_info(request):
#     data = {
#         "name": "Sabri Nasser Hussein Dokhan",
#         "email": "sabridokhan2@gmail.com",
#         "location": "Kuala Lumpur, Malaysia",
#         "profession": "Dedicated software developer with one year Experience.",
#     }
#     return JsonResponse(data)

from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .models import Profile
from .models import Project
import json

def project_list(request):
    projects = [
        {"name": "Project 1", "description": "A full-stack development project..."},
        {"name": "Project 2", "description": "A data analysis project using Python..."},
        {"name": "Project3",  "description":"NodeJS API"}
    ]
    return JsonResponse(projects, safe=False)




def profile_info(request):
    # Fetch the first profile record from the database
    profile = Profile.objects.first()
    
    if profile:
        data = {
            "name": profile.name,
            "email": profile.email,
            "location": profile.location,
            "profession": profile.profession,
        }
    else:
        data = {"error": "Profile not found"}

    return JsonResponse(data)

# def project_list(request):
#     # Fetch all project records from the database
#     projects = Project.objects.all()
#     project_list = [{"name": project.name, "description": project.description} for project in projects]
    
#     return JsonResponse(project_list, safe=False)



# def save_profile(request):
#     if request.method == 'POST':
#         try:
#             data = json.loads(request.body)

#             profile = Profile(
#                 name=data['name'],
#                 email=data['email'],
#                 location=data['location'],
#                 profession=data['profession']
                
#             )
#             profile.save()

#             return JsonResponse({"message": "Profile saved successfully!"}, status=201)

#         except (KeyError, json.JSONDecodeError):
#             return HttpResponseBadRequest("Invalid data received.")

#     return HttpResponseBadRequest("Only POST method is allowed.")


@csrf_exempt
def save_profile(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            profile = Profile(
                name=data['name'],
                email=data['email'],
                location=data['location'],
                profession=data['profession']
            )
            profile.save()

            return JsonResponse({"message": "Profile saved successfully!"}, status=201)

        except (KeyError, json.JSONDecodeError):
            return HttpResponseBadRequest("Invalid data received.")

    return HttpResponseBadRequest("Only POST method is allowed.")