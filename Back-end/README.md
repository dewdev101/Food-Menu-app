# 1. ติดตั้ง typescript + express + tsc + ts-node

```bash
yarn add express ts-node tsconfig-paths
yarn add --dev typescript ts-node-dev @types/node @types/express
npx tsc --init
```

สร้างไฟล์ .gitignore

```.gitignore
node_modules
```

เพิ่มรายละเอียดในไฟล์ package.json

```json
{
  "name": "workshop-backend",
  "version": "1.0.0",
  ...
}
```

เพิ่ม script ใน package.json เพื่อใช้สำหรับ run project

```json
{
  ...
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register src/main.ts",
    "start": "ts-node -r tsconfig-paths/register src/main"
  },
  ...
}
```

สร้างไฟล์ src/main.ts เพื่อเขียน express server

รันคำสั่งต่อไปนี้ เพื่อ start server

- สำหรับการเขียนโค้ดใน local รัน (จะมีการ hot reload ทุกครั้งที่แก้ไขโค้ด)

```bash
yarn dev
```

- สำหรับการ deploy โค้ดบน server รัน (จะไม่มีการ hot reload)

```bash
yarn start
```

ทดลองเปลี่ยนแปลงค่าใน console.log เพื่อทดสอบความแตกต่างของ `yarn dev` และ `yarn start`

# 2. ทดลองสร้าง Simple API

## GET Method

มักใช้กับ API ที่ดึงข้อมูลจาก Server เพื่ออ่านอย่างเดียว

สามารถเรียก API ผ่าน Browser URL Bar ได้

การส่งข้อมูลเพิ่มไปใน API จะส่งผ่าน query parameters เช่น

`http://localhost:3000/profile?name=Bin&age=30`

## Post Method

มักใช้กับ API ที่ส่งข้อมูลจาก client -> server เพื่อสร้าง หรืออัพเดทข้อมูล

แต่สามารถใช้แทน GET Method ได้ ในหลายๆ กรณีเช่น graphql server ใช้ POST Method แทน GET Method

- ข้อดีคือสามารถส่ง query parameters ขนาดใหญ่ได้
- ข้อเสียคือไม่สามารถเรียก API Post method ได้จาก Browser URL Bar

การส่งข้อมูลเพิ่มไปใน API จะส่งผ่าน body ในรูปแบบ json เช่น

```json
{
  "name": "Bin",
  "age": 30
}
```

## Response

res.send(textData)
res.json(jsonData)
res.status(200).send(textData)
res.status(500).send(textData)
res.status(200).json(jsonData)
res.status(500).json(jsonData)

## Status Code

status code ไว้บอกว่า API ที่เรียก สำเร็จ หรือไม่สำเร็จ
Status Code: 2xx แปลว่าสำเร็จ
Status Code: 3xx server redirect, server connect ไม่ได้
Status Code: 4xx หาข้อมูลไม่เจอ, bad request
Status Code: 5xx แปลว่า Error



# 3. ต่อ Postgres Database ด้วย pg

รัน postgres database ด้วย docker
เพิ่ม `postgres-data` ใน `.gitignore`

```bash
docker-compose up -d
```

# 4. ต่อ Postgres Database ด้วย pg

ติดตั้ง library pg สำหรับต่อ postgres

```bash
yarn add pg
yarn add --dev @types/pg
```

# 5. ต่อ Database ด้วย Prisma (Database)

ข้อดีของ prisma คือช่วยให้เราจัดการ database ได้โดยไม่ต้อง เขียน SQL ตรงๆ ช่วยให้จัดการโครงสร้าง database ที่ซับซ้อนได้ง่าย

สร้าง schema ใน postgres ใหม่ชื่อว่า [database name]

ติดตั้ง prisma

yarn add --dev prisma
yarn add @yarnpkg/pnpify
npx prisma init --datasource-provider postgresql

เพิ่มตัวแปรใน .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres?schema=[database name]"

เขียน Schema ของ App TodoList ใน Folder /prisma

เพิ่ม คำสั่งดังต่อไปนี้ใน scripts ของ package.json

"scripts": {
...
  
    "prisma:merge": "cat prisma/schema/**.prisma > prisma/schema.prisma",
    "prisma:format": "npx prisma format",
    "prisma:migrate": "npx prisma migrate dev --name init --schema prisma/schema.prisma",
    "prisma:generate": "npx prisma generate --schema=prisma/schema.prisma"
}

รันคำสั่งดังต่อไปนี้ yarn prisma:merge เพื่อรวมไฟล์โครงสร้าง prisma หลายๆ ไฟล์เข้าด้วยกัน yarn prisma:format เพื่อ format โค้ด prisma ให้สวยงาม และเช็คว่าเขียนโครงสร้างถูกต้องไหม yarn prisma:migrate เพื่อนำโครงสร้างใหม่นี้แก้ไขใน postgres database ขั้นตอนนี้ต้องระมันระวังเป็นพิเศษ ถ้ามีการลบโครงสร้างเดิมแล้ว migrate ข้อมูลเดิมใน database อาจหายหมดได้ เมื่อมีการ migrate จะมีไฟล์ .sql ในโฟลเดอร์ /migrations ไว้เก็บประวัติการเปลี่ยนแปลงโครงสร้างของ database ซึ่งไฟล์ในโฟลเดอร์นี้ห้ามลบเด็ดขาด ไม่งั้นถ้ามีการเพิ่ม field แล้ว migrate ใหม่ ข้อมูลใน database จะหายหมด yarn prisma:generate เพื่อสร้าง typescript interface สำหรับการเรียกใช้งานในโค้ดของเรา

สร้าง API สำหรับเชื่อมต่อ Food-Menu-app

# 6. สร้าง API ด้วย Prisma

# 7. Unit test with jest

ติดตั้ง jest
yarn add --dev jest ts-jest @types/jest
สร้างไฟล์ jest.config.ts
สร้างไฟล์ trivia.spec.ts
เพิ่มคำสั่งใน package.json -> scripts
"test": "jest --verbose",
"test:trivia": "jest -- src/[folder name]"


