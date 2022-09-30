import { ModelBase } from './model-base';

export class Product extends ModelBase {
  name!: string;
  description?: string;
}
