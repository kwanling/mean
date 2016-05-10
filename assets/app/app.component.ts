import {Component} from 'angular2/core';
import {MessageListComponent} from './messages/message-list.component';
import {MessageInputComponent} from './messages/message-input.component';

@Component({
    selector: 'my-app',
    template: `  
        <div class="row" class="spacing">
            <my-message-input></my-message-input>
        </div>
        <div class="row">
            <my-message-list></my-message-list>
        </div>
    `,
    directives: [MessageInputComponent, MessageListComponent]
})
export class AppComponent {

}