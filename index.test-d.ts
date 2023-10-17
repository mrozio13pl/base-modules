import { expectType } from 'tsd';
import modules from '.';

expectType<string[]>(modules());
expectType<string>(modules('*')[0]);