import RelationalField from './RelationalField';

import {
    forwardsManyToOneDescriptor,
    backwardsManyToOneDescriptor,
} from '../descriptors';

export default class ForeignKey extends RelationalField {
    constructor(...args) {
        super(...args);
        this.index = true;
    }

    createForwardsDescriptor(fieldName, model, toModel, throughModel) {
        return forwardsManyToOneDescriptor(fieldName, toModel.modelName);
    }

    createBackwardsDescriptor(fieldName, model, toModel, throughModel) {
        return backwardsManyToOneDescriptor(fieldName, model.modelName);
    }
}
