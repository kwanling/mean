import {Component} from 'angular2/core';
import {MessageComponent} from './messages/message.component';
import {Message} from './messages/message';

@Component({
    selector: 'my-app',
    template: `  
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <input type="text" [(ngModel)]="message.content">
            </section>
        </div>
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <my-message [message]="message" (editClicked)="message.content = $event"></my-message>
            </section>
        </div>
    `,
    directives: [MessageComponent]
})
export class AppComponent {
    message: Message = new Message('A new message', null, 'John Smith');
}