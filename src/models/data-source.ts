import "reflect-metadata"
import { DataSource } from "typeorm"
import { Admin } from "./entities/school-root/admin/admins";
import { School } from "./entities/school-root/schools";
import { News } from "./entities/school-root/page/news/news";
import { Page } from "./entities/school-root/page/pages";
import { Student } from "./entities/school-root/student/students";

export const AppDataSource = new DataSource({
    synchronize: true,
    entities: [ Admin, School, News, Page, Student ],
    type: "sqlite",
    database: "database.sqlite",
})
