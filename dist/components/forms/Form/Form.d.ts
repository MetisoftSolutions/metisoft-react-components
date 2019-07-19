import * as React from 'react';
export interface IFormProps {
    extraClassName?: string;
    onSuccessfulSubmit: () => void;
    fnValidateForm?: (elementsById: Record<string, any>) => boolean;
}
export declare class Form extends React.Component<IFormProps> {
    private __refForm;
    private __elementsById;
    render: () => JSX.Element;
    private __handleSubmit;
    private __validate;
    private __addElement;
    private __removeElement;
    static captureElement: (refForm: React.RefObject<Form>, id: string, element: any) => void;
}
