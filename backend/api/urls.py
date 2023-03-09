
from django.urls import path
from .views import *

urlpatterns = [
    path('', apiOverview),
    # path('create-category/', create_category),
    # path('view-category/', view_category),
    path('create-post/', create_post),
    path('view-post/<int:pk>/', view_post),
    path('view-posts/', view_posts),
    path('update-post/<int:pk>/', update_post),
    path('delete-post/<int:pk>/', delete_post),
    path('view-comments/', view_comments),
    path('create-comment/', create_comment),
    path('view-comment/<int:pk>/', view_comment),
    path('update-comment/<int:pk>/', update_comment),
    path('delete-comment/<int:pk>/', delete_comment),
]
