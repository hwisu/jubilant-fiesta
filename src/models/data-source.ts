import "reflect-metadata"
import { DataSource } from "typeorm"
import { Admin } from "./entities/school-root/admin/admins";
import { School } from "./entities/school-root/schools";
import { Notice } from "./entities/school-root/page/notices/notices";
import { Page } from "./entities/school-root/page/pages";
import { Student } from "./entities/school-root/student/students";

export const AppDataSource = new DataSource({
    synchronize: true,
    entities: [ Admin, School, Notice, Page, Student ],
    type: "sqlite",
    database: "database.sqlite",
})
