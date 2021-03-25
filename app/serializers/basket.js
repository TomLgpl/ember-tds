import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class BasketSerializer extends JSONSerializer.extend(EmbeddedRecordsMixin) {

  attrs = { basketdetail: { embedded: 'always' } };

}
