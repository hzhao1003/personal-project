from django.db import models

# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self) -> str:
        return self.name
    
class Posts(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField(max_length= 500)
    # post_date = models.DateField(auto_now=True)
    # category = models.ForeignKey(Categories, on_delete=models.CASCADE)

class Comments(models.Model):
    postComment = models.TextField(max_length= 500)
    post= models.ForeignKey(Posts, on_delete=models.CASCADE)
    