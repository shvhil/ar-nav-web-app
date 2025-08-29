import { ContextManager, Observable } from '@zcomponent/core';
import { HTMLElementProps, ZHTMLElement } from '@zcomponent/html/lib/HTMLElement';

/** @zcomponent
 * @ztag html/element/select
 * @zparents html/element/**
 * @zicon html
 */
export class Select extends ZHTMLElement<HTMLSelectElement> {
    /** @zprop */
    public value = new Observable<string>('Select POI', v => {
        this.element.value = v;
    });

    /**
     * @zprop
     * @zdefault false
     */
    public multiple = new Observable<boolean>(false, v => {
        this.element.multiple = v;
    });

    /**
     * @zprop
     * @zdefault false
     */
    public disabled = new Observable<boolean>(false, v => {
        this.element.disabled = v;
    });

    constructor(mgr: ContextManager, props: HTMLElementProps) {
        super(mgr, props, document.createElement('select'));

        this.element.addEventListener('change', () => {
            this.value.value = this.element.value;
        });
    }
}
