// This file is a Component - including the import, metadata & template, and class:

// Import:
import { Component } from '@angular/core';

// Metadata:
@Component({
    selector: 'pm-app', 
    // Template:
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    `
})

// Class:
export class AppComponent {
    pageTitle: string = `Acme Product Management`;
}
