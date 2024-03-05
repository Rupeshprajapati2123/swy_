from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from swy_backend import settings

@csrf_exempt
def save_timesheet(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        projects_data = data.get('Projects', [])
        total_work_data = data.get('Total work for week', {})
        
        timesheet_data = {
            'projects': projects_data,
            'total_work': total_work_data
        }
        
        settings.db['timesheet'].insert_one(timesheet_data)
        return JsonResponse({'message': 'Timesheet data saved successfully'}, status=201)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
