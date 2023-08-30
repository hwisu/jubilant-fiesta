import { DeepPartial } from "typeorm";
import {Page} from "../../models/entities/school-root/page/pages";


// 학교 페이지 생성
export const postPage  = async (page: DeepPartial<Page>) => {
    return Page.create(page).save()
}
