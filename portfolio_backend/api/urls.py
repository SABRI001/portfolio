from django.urls import path
from . import views

urlpatterns = [
    path('project_list/', views.project_list, name='project_list'),
    path('profile_info/', views.profile_info, name='profile_info'),
    path('save_profile/', views.save_profile, name='save_profile'),
    
]
