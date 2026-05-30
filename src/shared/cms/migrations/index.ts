import * as migration_20260111_224425 from "./20260111_224425";
import * as migration_20260217_143602 from "./20260217_143602";
import * as migration_20260218_174258 from "./20260218_174258";
import * as migration_20260418_155557 from "./20260418_155557";
import * as migration_20260419_052606 from "./20260419_052606";
import * as migration_20260428_073358 from "./20260428_073358";
import * as migration_20260513_070125 from "./20260513_070125";
import * as migration_20260519_130417 from "./20260519_130417";
import * as migration_20260525_192226 from "./20260525_192226";
import * as migration_20260527_062539 from "./20260527_062539";
import * as migration_20260529_105658 from "./20260529_105658";

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
  {
    up: migration_20260428_073358.up,
    down: migration_20260428_073358.down,
    name: "20260428_073358",
  },
  {
    up: migration_20260513_070125.up,
    down: migration_20260513_070125.down,
    name: "20260513_070125",
  },
  {
    up: migration_20260519_130417.up,
    down: migration_20260519_130417.down,
    name: "20260519_130417",
  },
  {
    up: migration_20260525_192226.up,
    down: migration_20260525_192226.down,
    name: "20260525_192226",
  },
  {
    up: migration_20260527_062539.up,
    down: migration_20260527_062539.down,
    name: "20260527_062539",
  },
  {
    up: migration_20260529_105658.up,
    down: migration_20260529_105658.down,
    name: "20260529_105658",
  },
];
