from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model


class UserProfile(models.Model):
    user = models.OneToOneField(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name="user_profile",
    )

    USER_TYPE_CHOICES = (
        ("coach", "coach"),
        ("player", "player"),
    )

    user_type = models.CharField(
        max_length=10,
        choices=USER_TYPE_CHOICES,
        default="player",
    )

    profile_picture = models.ImageField(
        upload_to="profile_pics/%Y/%m/", null=True, blank=True
    )

    university = models.CharField(max_length=64, blank=True, null=True)
    job_title = models.CharField(max_length=64, blank=True, null=True)
    division = models.CharField(max_length=64, blank=True, null=True)

    hometown = models.CharField(max_length=64, blank=True, null=True)
    state = models.CharField(max_length=64, blank=True, null=True)
    class_year = models.CharField(max_length=64, blank=True, null=True)
    high_school = models.CharField(max_length=64, blank=True, null=True)
    sport = models.CharField(max_length=64, blank=True, null=True)
    position = models.CharField(max_length=64, blank=True, null=True)
    height = models.CharField(max_length=64, blank=True, null=True)
    weight = models.CharField(max_length=64, blank=True, null=True)
    bench = models.CharField(max_length=64, blank=True, null=True)
    forty_time = models.CharField(max_length=64, blank=True, null=True)
    vertical = models.CharField(max_length=64, blank=True, null=True)
    gpa = models.CharField(max_length=64, blank=True, null=True)

    def __str__(self) -> str:
        return str(self.user)


@receiver(post_save, sender=get_user_model())
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
