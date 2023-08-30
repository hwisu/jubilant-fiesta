import { DeepPartial } from "typeorm";
import { Notice } from "../../models/entities/school-root/page/notices/notices";


// 뉴스 생성
export const postNotice  = async (notice: DeepPartial<Notice>) => {
    return Notice.create(notice).save()
}

// 뉴스 업데이트
export const updateNotice = async (notice: DeepPartial<Notice>) => {
    // update 를 위한 DeepPartial 의 확장을 구현할 수도 있다.
    if (!notice.id) throw Error
    return Notice.update(notice.id, notice)
}

// 뉴스 삭제
export const deleteNotice = async (noticeId: number) => {
    return Notice.delete(noticeId)
}
