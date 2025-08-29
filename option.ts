import { ContextManager, Observable } from '@zcomponent/core';
import { HTMLElementProps, ZHTMLElement } from '@zcomponent/html/lib/HTMLElement';

/** @zcomponent
 * @ztag html/element/option
 * @zparents html/element/select
 * @zicon html
 */
export class Option extends ZHTMLElement<HTMLOptionElement> {
    /** @zprop */
    public value = new Observable<string>('', v => {
        this.element.value = v;
    });

    /**
     * @zprop
     * @zdefault false
     */
    public selected = new Observable<boolean>(false, v => {
        this.element.selected = v;
    });

    /**
     * @zprop
     * @zdefault false
     */
    public disabled = new Observable<boolean>(false, v => {
        this.element.disabled = v;
    });

    constructor(mgr: ContextManager, props: HTMLElementProps) {
        super(mgr, props, document.createElement('option'));
    }
}


