import {Subscription} from "../../models/entities/school-root/student/subscription";
import {Student} from "../../models/entities/school-root/student/students";
import {Page} from "../../models/entities/school-root/page/pages";


// 학생 -> 학교 페이지 구독
export const createSubscription = async (student: Student, page: Page) => {
    return Subscription.create({student, page}).save()
}

// 학생 -> 학교 페이지 구독 리스트
export const readSubscriptions = async (studentId: number, page: number | null, size: number | null) => {
    return await Subscription.find({
        where: { student: { id: studentId} },
        skip: page ? page : 0,
        take: size ? size : 100,
        order: {
            createdAt: "DESC"
        },
        relations: ["page"],
    })
}

// 학생 -> 학교 페이지 구독 취소
export const deleteSubscription = async (id: number) => {
    return Subscription.delete({id})
}