// Polyfill for crypto module in Node.js environments
// This is needed for @nestjs/typeorm which uses crypto.randomUUID()
import { webcrypto } from 'crypto';

if (!globalThis.crypto) {
  (globalThis as any).crypto = webcrypto;
}
