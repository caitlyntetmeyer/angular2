// This file is a Component - including the import, metadata & template, and class:

// Import:
import { Component } from '@angular/core';

// Metadata:
@Component({
    // Selector:
    selector: 'pm-app', 
    // Template:
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `
})

// Class:
export class AppComponent {
    pageTitle: string = `Acme Product Management`;
}
