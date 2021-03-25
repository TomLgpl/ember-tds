import JSONSerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class TimeslotSerializer extends JSONSerializer.extend(EmbeddedRecordsMixin) {

  attrs = { order: { embedded: 'always' } };

}
