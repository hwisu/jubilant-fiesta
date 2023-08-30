import { DeepPartial } from "typeorm";
import { School } from "../../models/entities/school-root/schools";


export const postSchool  = async (school: DeepPartial<School>) => {
    return School.create(school).save()
}

export const getSchools = async () : Promise<School[]> => {
    return School.find()
}

export const getSchool = async (schoolId: number) => {
    return School.findOneBy({id: schoolId});
}