import { StoreTypeData } from './store-type-data.enum';

export interface StateEvent {
  type: StoreTypeData;
  value: any;
}
