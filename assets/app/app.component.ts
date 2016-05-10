import {Component} from 'angular2/core';
import {MessageComponent} from './messages/message.component';
import {Message} from './messages/message';

@Component({
    selector: 'my-app',
    template: `  
        <div class="row">
            <section class="col-md-8 col-md-offset-2">
                <my-message *ngFor="#message of messages" 
                    [message]="message" (editClicked)="message.content = $event"></my-message>
            </section>
        </div>
    `,
    directives: [MessageComponent]
})
export class AppComponent {
    messages: Message[] = [
        new Message('A new message', null, 'John Smith'),
        new Message('Another message', null, 'Mary Smith')
    ];
}