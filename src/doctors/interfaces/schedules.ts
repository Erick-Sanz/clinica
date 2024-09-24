export interface SchedulesInterface {
  schedules: Schedule[];
}

export interface Schedule {
  slotdates: Slotdate[];
  idDoctor: string;
  idClinic: string;
}

export interface Slotdate {
  date: string;
  slots?: Slot[];
}

export interface Slot {
  sourceEvent: string;
  dateTime: string;
}
