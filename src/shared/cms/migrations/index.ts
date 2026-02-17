import * as migration_20260111_224425 from "./20260111_224425";
import * as migration_20260217_143602 from "./20260217_143602";

export const migrations = [
  {
    up: migration_20260111_224425.up,
    down: migration_20260111_224425.down,
    name: "20260111_224425",
  },
  {
    up: migration_20260217_143602.up,
    down: migration_20260217_143602.down,
    name: "20260217_143602",
  },
];
