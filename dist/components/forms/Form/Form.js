import * as React from 'react';
import * as _ from 'lodash';
export class Form extends React.Component {
    constructor() {
        super(...arguments);
        this.__refForm = React.createRef();
        this.__elementsById = {};
        this.render = () => {
            return (React.createElement("form", { ref: this.__refForm, className: this.props.extraClassName, onSubmit: this.__handleSubmit }, this.props.children));
        };
        this.__handleSubmit = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (this.__validate()) {
                this.props.onSuccessfulSubmit();
            }
        };
        this.__validate = () => {
            const elForm = this.__refForm.current;
            if (!elForm) {
                return false;
            }
            _.forEach(this.__elementsById, element => {
                if (_.isFunction(element.validate)) {
                    element.validate();
                }
            });
            if (!elForm.checkValidity()) {
                elForm.reportValidity();
                return false;
            }
            if (this.props.fnValidateForm) {
                return this.props.fnValidateForm(this.__elementsById);
            }
            return true;
        };
        this.__addElement = (id, element) => {
            this.__elementsById[id] = element;
        };
        this.__removeElement = (id) => {
            delete this.__elementsById[id];
        };
    }
}
Form.captureElement = (refForm, id, element) => {
    _.defer(() => {
        const elForm = refForm.current;
        if (elForm) {
            if (element === null) {
                elForm.__removeElement(id);
            }
            else {
                elForm.__addElement(id, element);
            }
        }
    });
};
//# sourceMappingURL=Form.js.map