import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class PackSerializer extends JSONSerializer.extend(EmbeddedRecordsMixin) {

  attrs = { };
  compositeKeys = ['product', 'product'];

  extractId(modelClass, resourceHash) {
    return this.compositeKeys.map((key) => {
      if (resourceHash[key].id) {
        return resourceHash[key].id;
      }
      return resourceHash[key];
    }).join(',');
  }

}
