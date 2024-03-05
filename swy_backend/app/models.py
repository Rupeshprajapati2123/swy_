# models.py

from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)

class DailySchedule(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    day = models.CharField(max_length=3)
    scheduled_time = models.FloatField()
    work_done = models.FloatField()

    class Meta:
        unique_together = ('project', 'day')  # Ensure each project has one entry per day
