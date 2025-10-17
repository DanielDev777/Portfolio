import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CdkDrag, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-skills',
	imports: [TranslatePipe, CdkDrag],
	templateUrl: './skills.html',
	styleUrl: './skills.scss'
})
export class Skills {
	translate = inject(TranslateService);
	isDragged = signal(false);
	skills = [
		{
			name: 'HTML',
			src: 'img/icons/skills/html.png'
		},
		{
			name: 'CSS',
			src: 'img/icons/skills/css.png'
		},
		{
			name: 'JavaScript',
			src: 'img/icons/skills/javascript.png'
		},
		{
			name: 'TypeScript',
			src: 'img/icons/skills/typescript.png'
		},
		{
			name: 'Angular',
			src: 'img/icons/skills/angular.png'
		},
		{
			name: 'APIs',
			src: 'img/icons/skills/api.png'
		},
		{
			name: 'Git',
			src: 'img/icons/skills/git.png'
		},
		{
			name: 'Docker',
			src: 'img/icons/skills/docker.png'
		},
		{
			name: 'SQL',
			src: 'img/icons/skills/sql.png'
		},
		{
			name: 'Vue.js',
			src: 'img/icons/skills/vue.png'
		}
	];

	    onDragEnded(event: CdkDragEnd): void {
        this.applyDragConstraints(event);
        this.updateDraggedState(event);
    }

    onDragMoved(event: CdkDragMove): void {
        this.applyDragConstraints(event);
    }

    private applyDragConstraints(event: CdkDragEnd | CdkDragMove): void {
        const { x, y } = event.distance;
        const isValidDirection = x < 0 || y > 0;
        
        if (isValidDirection && this.getMagnitude(x, y) > 0) {
            // Always move diagonally to bottom-left based on cursor distance
            const magnitude = this.getMagnitude(x, y);
            const constrainedX = -Math.abs(magnitude * 0.7);
            const constrainedY = Math.abs(magnitude * 0.7);
            
            event.source.element.nativeElement.style.transform = 
                `translate3d(${constrainedX}px, ${constrainedY}px, 0)`;
        } else {
            this.resetElementPosition(event.source.element.nativeElement);
        }
    }

    private updateDraggedState(event: CdkDragEnd): void {
        const { x, y } = event.distance;
        const magnitude = this.getMagnitude(x, y);
        const isValidDirection = x < 0 || y > 0;
        
        this.isDragged.set(isValidDirection && magnitude > 0);
    }

    private getMagnitude(x: number, y: number): number {
        return Math.sqrt(x * x + y * y);
    }

    private setElementPosition(element: HTMLElement, x: number, y: number): void {
        const magnitude = this.getMagnitude(x, y);
        const constrainedX = -Math.abs(magnitude * 0.7);
        const constrainedY = Math.abs(magnitude * 0.7);
        element.style.transform = `translate3d(${constrainedX}px, ${constrainedY}px, 0)`;
    }

    private resetElementPosition(element: HTMLElement): void {
        element.style.transform = 'translate3d(0px, 0px, 0)';
    }
}
