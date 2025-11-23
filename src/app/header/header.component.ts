import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    // imports: [],
    standalone: false,
    styleUrl: "./header.component.css"
})
export class HeaderComponent {
    title: string = 'EasyTasks'
}