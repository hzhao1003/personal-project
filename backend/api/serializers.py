from rest_framework import serializers
from .models import *

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = "__all__"

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = "__all__"

    def create(self, validated_data):
        return Posts.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
     

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = "__all__"
    # postComment = models.TextField(max_length= 500)
    # post= models.ForeignKey(Posts, on_delete=models.CASCADE)

        def create(self, validated_data):
            return Comments.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.postComment = validated_data.get('content', instance.postComment)
            instance.post = validated_data.get('postID', instance.post)
            instance.save()
            return instance