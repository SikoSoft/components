import { LitElement, PropertyValueMap } from 'lit';
import { InputType } from '../models/Input';
import './ss-input-auto';
export declare class SSInput extends LitElement {
    static styles: import("lit").CSSResult[];
    type: InputType;
    value: string;
    autoComplete: boolean;
    placeholder: string;
    _value: string;
    inputField: HTMLInputElement;
    autoCompleteNode: HTMLElement;
    hasFocus: boolean;
    autoDismissed: boolean;
    get showAutoComplete(): boolean;
    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    focus(): void;
    clear(): void;
    private _handleChange;
    private _handleKeyDown;
    private _sendSuggestionUpEvent;
    private _sendSuggestionDownEvent;
    private _sendSuggestionSelectEvent;
    private _sendSubmittedEvent;
    private _handleSubmit;
    private _handleInput;
    private _handleFocus;
    private _handleBlur;
    private _suggestionSelectHandler;
    render(): import("lit-html").TemplateResult<1>;
}
