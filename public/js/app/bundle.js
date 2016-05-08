var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("messages/message", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message;
    return {
        setters:[],
        execute: function() {
            Message = (function () {
                function Message(content, messageId, username, userId) {
                    this.content = content;
                    this.username = username;
                    this.messageId = messageId;
                    this.userId = userId;
                }
                ;
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
System.register("messages/message.component", ['angular2/core', "messages/message"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, message_1;
    var MessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            MessageComponent = (function () {
                function MessageComponent() {
                    this.editClicked = new core_1.EventEmitter();
                }
                MessageComponent.prototype.onClick = function () {
                    //this.message.content = "Changed";
                    this.editClicked.emit("Changed");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', message_1.Message)
                ], MessageComponent.prototype, "message", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MessageComponent.prototype, "editClicked", void 0);
                MessageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-message',
                        template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ message.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ message.username }}\n                </div>\n                <div class=\"config\">\n                    <a href=\"#\" (click)=\"onClick()\">Edit</a>\n                    <a href=\"#\">Delete</a>\n                </div>\n            </footer>        \n        </article>\n\n    ",
                        styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-aligh: right;\n            font-size: 12px;\n            width: 19%;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MessageComponent);
                return MessageComponent;
            }());
            exports_2("MessageComponent", MessageComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "messages/message.component", "messages/message"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, message_component_1, message_2;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (message_component_1_1) {
                message_component_1 = message_component_1_1;
            },
            function (message_2_1) {
                message_2 = message_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = new message_2.Message('A new message', null, 'John Smith');
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "  \n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <input type=\"text\" [(ngModel)]=\"message.content\">\n            </section>\n        </div>\n        <div class=\"row\">\n            <section class=\"col-md-8 col-md-offset-2\">\n                <my-message [message]=\"message\" (editClicked)=\"message.content = $event\"></my-message>\n            </section>\n        </div>\n    ",
                        directives: [message_component_1.MessageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
System.register("auth/user", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password, firstName, lastName) {
                    this.email = email;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                return User;
            }());
            exports_5("User", User);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UudHMiLCJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cyIsImFwcC5jb21wb25lbnQudHMiLCJib290LnRzIiwiYXV0aC91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBQTtnQkFNSSxpQkFBYSxPQUFlLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWU7b0JBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN6QixDQUFDOztnQkFDTCxjQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCw2QkFZQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUN5QkQ7Z0JBQUE7b0JBRWMsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFPdkQsQ0FBQztnQkFMRyxrQ0FBTyxHQUFQO29CQUNJLG1DQUFtQztvQkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBTkQ7b0JBQUMsWUFBSyxFQUFFOztpRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O3FFQUFBO2dCQXBDYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsMGhCQWdCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQywyVEFhUixDQUFDO3FCQUNMLENBQUM7O29DQUFBO2dCQVVGLHVCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCwrQ0FTQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUMxQkQ7Z0JBQUE7b0JBQ0ksWUFBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMmJBV1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQ2pDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ2xCRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7WUNKeEI7Z0JBRUksY0FBb0IsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLFNBQWtCLEVBQ2xCLFFBQWlCO29CQUhqQixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVM7Z0JBRXJDLENBQUM7Z0JBQ0wsV0FBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdUJBUUMsQ0FBQSIsImZpbGUiOiIuLi8uLi8uLi9tZWFuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlSWQ6IHN0cmluZztcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChjb250ZW50OiBzdHJpbmcsIG1lc3NhZ2VJZD86IHN0cmluZywgdXNlcm5hbWU/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUlkID0gbWVzc2FnZUlkO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwib25DbGljaygpXCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj4gICAgICAgIFxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29uZmlnIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWdoOiByaWdodDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTklO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIC8vdGhpcy5tZXNzYWdlLmNvbnRlbnQgPSBcIkNoYW5nZWRcIjtcclxuICAgICAgICB0aGlzLmVkaXRDbGlja2VkLmVtaXQoXCJDaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYCAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJtZXNzYWdlLmNvbnRlbnRcIj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPG15LW1lc3NhZ2UgW21lc3NhZ2VdPVwibWVzc2FnZVwiIChlZGl0Q2xpY2tlZCk9XCJtZXNzYWdlLmNvbnRlbnQgPSAkZXZlbnRcIj48L215LW1lc3NhZ2U+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdBIG5ldyBtZXNzYWdlJywgbnVsbCwgJ0pvaG4gU21pdGgnKTtcbn0iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsiLCJleHBvcnQgY2xhc3MgVXNlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBlbWFpbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgIHB1YmxpYyBmaXJzdE5hbWU/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nKSB7XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
