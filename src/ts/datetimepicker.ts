export interface DateTimePickerOptions {
    // used by Web Components
    globalEventListener?: Function;

    // these are used by ng1 only
    $scope?: any;
    $compile?: any;
    quickFilterOnScope?: any;

    //bean instances to add to the context
    seedBeanInstances?: {[key:string]:any}
}

export interface DateTimePickerParams {
    // used by Web Components
    globalEventListener?: Function;

    // these are used by ng1 only
    $scope?: any;
    $compile?: any;
    quickFilterOnScope?: any;

    //bean instances to add to the context
    seedBeanInstances?: {[key:string]:any}
}

export class DateTimePicker {
    constructor(eGridDiv: HTMLElement, options: DateTimePickerOptions, params?: DateTimePickerParams) {

    }
}