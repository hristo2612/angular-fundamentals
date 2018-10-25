import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
        
    }

    onClick(): void {
        this.notify.emit(this.rating);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

}
