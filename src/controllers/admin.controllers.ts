import * as NoticeService from '../services/admin.services/admin.notice.service';
import * as PageService from '../services/admin.services/admin.page.service';
import express from "express";
import {School} from "../models/entities/school-root/schools";
import {Page} from "../models/entities/school-root/page/pages";

export const postPage = async (req: express.Request, res: express.Response) => {
    const { schoolId } = req.body;
    if (!schoolId) return res.status(400).json({message: 'Bad Request'})
    try {
        const school = await School.findOneOrFail({where: {id: parseInt(schoolId as string)}})
        const page = await PageService.createPage({ school })
        res.status(200).json(page)
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}

export const postNotice = async (req: express.Request, res: express.Response) => {
    const { pageId, title, content } = req.body;
    if (!pageId || !title || !content) return res.status(400).json({message: 'Bad Request'})
    try {
        const page = await Page.findOneOrFail({where: {id: parseInt(pageId as string)}})
        const notice = await NoticeService.createNotice({ page, title, content })
        res.status(200).json(notice)
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}

export const patchNotice = async (req: express.Request, res: express.Response) => {
    const { id, title, content } = req.body;
    if (!id) return res.status(400).json({message: 'Bad Request'})
    try {
        const notice = await NoticeService.updateNotice({
            id: parseInt(id as string), title, content
        })
        res.status(200).json(notice)
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}

export const deleteNotice = async (req: express.Request, res: express.Response) => {
    const { id } = req.body;
    if (!id) return res.status(400).json({message: 'Bad Request'})
    try {
        const notice = await NoticeService.deleteNotice(parseInt(id as string))
        res.status(204).json({} )
    }
    catch (e) {
        return res.status(400).json({message: 'Bad Request'})
    }
}