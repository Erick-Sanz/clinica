interface SlotEntry {
  doctorIds: string[];
}

interface SlotsStructure {
  [key: string]: {
    slots: { [key: string]: SlotEntry };
  };
}
