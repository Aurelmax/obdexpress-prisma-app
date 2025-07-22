// utils/prisma.js
// Singleton pattern pour le client Prisma
import { PrismaClient } from '@prisma/client';

// Configuration des logs en développement (optionnel)
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'error', 'warn'] 
      : ['error'],
  });
};

// Empêcher plusieurs instances en dev HMR (hot module replacement)
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
