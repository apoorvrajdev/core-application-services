#!/bin/bash
cd "$(dirname "$0")/.."
npx prisma migrate dev --name init --skip-generate
npx prisma generate
