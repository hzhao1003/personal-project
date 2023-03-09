from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    return Response('API BASE POINT')

# @api_view(['POST'])
# def create_category(request):
#     serializer = CategoriesSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['GET'])
# def view_category(request):
#     categories = Categories.objects.all()
#     serializer = CategoriesSerializer(categories, many = True)
#     return Response(serializer.data)
@api_view(['POST'])
def create_post(request):
    serializer = PostsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['GET'])
def view_post(request, pk):
    post = Posts.objects.get(id = pk)
    serializer = PostsSerializer(post, many = False)
    return Response(serializer.data)
@api_view(['GET'])
def view_posts(request):
    posts = Posts.objects.all()
    serializer = PostsSerializer(posts, many = True)
    return Response(serializer.data)
@api_view(['POST'])
def update_post(request, pk):
    post = Posts.objects.get(id = pk)
    serializer = PostsSerializer(instance = post,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['DELETE'])
def delete_post(request, pk):
    post = Posts.objects.get(id = pk)
    post.delete()
    return Response('Post has been deleted.')
@api_view(['POST'])
def create_comment(request):
    serializer = CommentsSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['GET'])
def view_comments(request):
    comments = Comments.objects.all()
    serializer = CommentsSerializer(comments, many = True)
    return Response(serializer.data)
@api_view(['GET'])
def view_comment(request, pk):
    comment = Comments.objects.get(id = pk)
    serializer = CommentsSerializer(comment, many = False)
    return Response(serializer.data)
@api_view(['POST'])
def update_comment(request, pk):
    comment = Comments.objects.get(id = pk)
    serializer = CommentsSerializer(instance = comment,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_comment(request, pk):
    comment = Comments.objects.get(id = pk)
    comment.delete()
    return Response('Comment has been deleted.')