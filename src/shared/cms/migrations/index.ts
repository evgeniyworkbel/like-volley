import * as migration_20260111_224425 from "./20260111_224425";
import * as migration_20260216_130612 from "./20260216_130612";
import * as migration_20260216_140530 from "./20260216_140530";
import * as migration_20260216_140744 from "./20260216_140744";
import * as migration_20260217_061402 from "./20260217_061402";

export const migrations = [
  {
    up: migration_20260111_224425.up,
    down: migration_20260111_224425.down,
    name: "20260111_224425",
  },
  {
    up: migration_20260216_130612.up,
    down: migration_20260216_130612.down,
    name: "20260216_130612",
  },
  {
    up: migration_20260216_140530.up,
    down: migration_20260216_140530.down,
    name: "20260216_140530",
  },
  {
    up: migration_20260216_140744.up,
    down: migration_20260216_140744.down,
    name: "20260216_140744",
  },
  {
    up: migration_20260217_061402.up,
    down: migration_20260217_061402.down,
    name: "20260217_061402",
  },
];
