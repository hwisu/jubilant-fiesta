import * as PageService from '../services/student.services/student.page.service';
import * as NoticeService from '../services/student.services/student.notice.service';
import express from "express";
import { Student } from "../models/entities/school-root/student/students";
import { Page } from "../models/entities/school-root/page/pages";
import {School} from "../models/entities/school-root/schools";

export const postSubscription = async (req: express.Request, res: express.Response) => {
    const { studentId, pageId } = req.body;
    if (!studentId || !pageId) return res.status(400).json({message: 'Bad Request'})
    try {
        const student = await Student.findOneOrFail({where: {id: studentId}})
        const page = await Page.findOneOrFail({ where: {id: pageId}})
        const subscription = await PageService.createSubscription(student, page)
        res.status(200).json(subscription)
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}

export const getSubscriptions = async (req: express.Request, res: express.Response) => {
    const { studentId, page, size } = req.query;
    if (!studentId) return res.status(400).json({message: 'Bad Request'})
    try {
        const subscriptions = await PageService.readSubscriptions(parseInt(studentId as string), page ? parseInt(page as string) : null, size ? parseInt(size as string) : null)
        res.status(200).json(subscriptions)
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}

export const deleteSubscription = async (req: express.Request, res: express.Response) => {
    const { id } = req.body;
    if (!id) return res.status(400).json({message: 'Bad Request'})
    try {
        const subscription = await PageService.deleteSubscription(parseInt(id as string))
        res.status(204).json({} )
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}

export const getNotices = async (req: express.Request, res: express.Response) => {
    // TODO handle type issue properly
    const { page, size, schoolId } = req.query;
    if (!schoolId) return res.status(400).json({message: 'Bad Request'})
    const school = await School.findOneOrFail({where: {id: parseInt(schoolId as string)}})
    try {
        const notices = await NoticeService.readNotices(school, page ? parseInt(page as string) : null, size ? parseInt(size as string) : null)
        res.status(200).json(notices)
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}