import { ContextManager, Observable } from '@zcomponent/core';
import { HTMLElementProps, ZHTMLElement } from '@zcomponent/html/lib/HTMLElement';

/** @zcomponent
 * @ztag html/element/select
 * @zparents html/element/**
 * @zicon html
 */
export class Select extends ZHTMLElement<HTMLSelectElement> {
    /** @zprop */
    public value = new Observable<string>('', v => {
        this.element.value = v;
    });

    /**
     * @zprop
     */
    public placeholder = new Observable<string>('Select a Point of Interest');

    constructor(mgr: ContextManager, props: HTMLElementProps) {
        super(mgr, props, document.createElement('select'));

        // hidden option as placeholder
        const placeholderOption = document.createElement('option');
        placeholderOption.textContent = this.placeholder.value;
        placeholderOption.value = '';
        placeholderOption.disabled = true;
        placeholderOption.hidden = true; // prevents showing in dropdown
        placeholderOption.selected = true;
        placeholderOption.setAttribute('data-placeholder', 'true'); // for css styling

        this.element.appendChild(placeholderOption);

        this.element.addEventListener('change', () => {
            this.value.value = this.element.value;
        });
    }
}