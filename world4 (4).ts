import { shishuoWorld1 } from './world1';
import { shishuoWorld2 } from './world2';
import { shishuoWorld3 } from './world3';
import { shishuoWorld4 } from './world4';
import { shishuoWorld5 } from './world5';
import { shishuoWorld6 } from './world6';
import { shishuoWorld7 } from './world7';
import { shishuoWorld8 } from './world8';
import { shishuoWorld9 } from './world9';
import { shishuoWorld10 } from './world10';
import { Lesson } from '../lessons';

export const shishuoLessons: Omit<Lesson, 'phoneticOriginalText'>[] = [
  ...shishuoWorld1,
  ...shishuoWorld2,
  ...shishuoWorld3,
  ...shishuoWorld4,
  ...shishuoWorld5,
  ...shishuoWorld6,
  ...shishuoWorld7,
  ...shishuoWorld8,
  ...shishuoWorld9,
  ...shishuoWorld10
];
