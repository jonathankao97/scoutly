from django.db import models
from core.models import UserProfile


class Video(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    video = models.FileField(upload_to="videos/%Y/%m/")

    def __str__(self) -> str:
        return self.video.name
