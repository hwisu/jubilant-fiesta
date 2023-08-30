import {Notice} from "../../models/entities/school-root/page/notices/notices";
import {School} from "../../models/entities/school-root/schools";

export const readNotices = async (school: School, page: number | null, size: number | null) => {
    return await Notice.createQueryBuilder("notice")
        .leftJoinAndSelect("notice.page", "page")
        .where("page.schoolId = :schoolId", {schoolId: school.id})
        .orderBy("notice.createdAt", "DESC")
        .skip(page ? page : 0)
        .take(size ? size : 100)
        .getMany()
}