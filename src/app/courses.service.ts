import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILiveClass } from './courses/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {}

  getLiveClasses(): Observable<ILiveClass[]> {
    return this.httpClient.get<ILiveClass[]>('http://my-json-server.typicode.com/openenglish/oe-app-test/liveClasses');
  }
}


 /*  const rawLiveClasses = [
       {
         title: 'Casual - Cash or Credit?',
         description: 'Students will discuss vocabulary related to paying with cash or credit',
         type: 'Casual Conversation',
         img: 'https://lessons.openenglish.com/production/9204a9f8-1a8d-45e3-b972-f5de61fc50dd/assets/Cash-or-Credit-Image.png',
         document: 'https://lessons.openenglish.com/production/9204a9f8-1a8d-45e3-b972-f5de61fc50dd/assets/true-beg-port-cash-or-credit-3.pdf'
       },
       {
         title: 'Classic - Photography',
         description: 'Students will learn vocabulary related to photography',
         type: 'Classic Instruction',
         img: 'https://lessons.openenglish.com/production/252684e0-2963-45fd-a592-03b3b1e34a96/assets/photography-image.png',
         document: 'https://lessons.openenglish.com/production/252684e0-2963-45fd-a592-03b3b1e34a96/assets/photography-1_36.pdf'
       },
       {
         title: 'Private Class',
         description: 'Some description for the private class',
         type: 'Private Class',
         img: 'https://lessons.openenglish.com/production/330b3d33-dc12-4b83-8406-74d26faae653/assets/iStock_PrivateClass1_615x380.jpg'
       }
     ];*/
