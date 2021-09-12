from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from sms import send_sms
from django.conf import settings


class Interaction(models.Model):
    sender = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="sender"
    )
    receiver = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="receiver"
    )
    liked = models.BooleanField()

    def __str__(self) -> str:
        return f"{str(self.sender)} {'liked' if self.liked else 'disliked'} {str(self.receiver)}"


@receiver(post_save, sender=Interaction)
def create_interaction(sender, instance, created, **kwargs):
    if created and instance.liked:
        sender_profile = instance.sender.user_profile

        message = f"""We are glad to inform you that {sender_profile.user.get_full_name()}, {sender_profile.job_title}, at {sender_profile.university} ({sender_profile.division}) has shown interest in your highlight tape. Please reach out to them at {sender_profile.user.email} in order to follow up.\nBest of luck! Scout.ly"""

        send_sms(
            message,
            settings.TWILIO_PHONE_NUMBER,
            [instance.receiver.phone_number.raw_input],
            fail_silently=False,
        )

        print("hello world")
