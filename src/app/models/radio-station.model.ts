import { HowlModel } from './howl.model';

export interface RedioStation {
  freq: string;
  title: string;
  src: string;
  howl: HowlModel;
}
