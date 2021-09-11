from django.db import models
from django.contrib.auth import get_user_model


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
