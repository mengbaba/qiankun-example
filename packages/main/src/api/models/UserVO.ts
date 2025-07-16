/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from './Role';
export type UserVO = {
    /**
     * 用户id
     */
    id: number;
    /**
     * 用户名
     */
    username: string;
    /**
     * 昵称
     */
    nickname: string;
    /**
     * 头像
     */
    avatar: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 角色数组
     */
    roles: Array<Role>;
};

