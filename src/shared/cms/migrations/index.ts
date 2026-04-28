import * as migration_20260111_224425 from "./20260111_224425";
import * as migration_20260217_143602 from "./20260217_143602";
import * as migration_20260218_174258 from "./20260218_174258";
import * as migration_20260418_155557 from "./20260418_155557";
import * as migration_20260419_052606 from "./20260419_052606";

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
  {
    up: migration_20260218_174258.up,
    down: migration_20260218_174258.down,
    name: "20260218_174258",
  },
  {
    up: migration_20260418_155557.up,
    down: migration_20260418_155557.down,
    name: "20260418_155557",
  },
  {
    up: migration_20260419_052606.up,
    down: migration_20260419_052606.down,
    name: "20260419_052606",
  },
];
