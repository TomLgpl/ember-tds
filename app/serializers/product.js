import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ProductSerializer extends JSONSerializer.extend(EmbeddedRecordsMixin) {

  attrs = { basketdetail: { embedded: 'always' }, pack: { embedded: 'always' }, orderdetail: { embedded: 'always' }, associatedproduct: { embedded: 'always' } };

}
