import * as migration_20260111_224425 from "./20260111_224425";
import * as migration_20260111_224627 from "./20260111_224627";

export const migrations = [
  {
    up: migration_20260111_224425.up,
    down: migration_20260111_224425.down,
    name: "20260111_224425",
  },
  {
    up: migration_20260111_224627.up,
    down: migration_20260111_224627.down,
    name: "20260111_224627",
  },
];
