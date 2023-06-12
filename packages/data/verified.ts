import { aaveMembers } from './aave-members';
import { mainnetStaffs } from './staffs';

export const mainnetVerified = [
  '0x03', // alain
  '0x17', // igor
  '0x09', // seb
  '0x0a', // matthieu
  '0x19', // emanuele
  '0x1a', // marco
  ...aaveMembers,
  ...mainnetStaffs
];

export const testnetVerified = [
  '0x03', // alain
  '0x17', // igor
  '0x09', // seb
  '0x0a' // matthieu
];
