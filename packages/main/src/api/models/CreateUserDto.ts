/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateUserDto = {
    /**
     * 用户名
     */
    username: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色数组
     */
    roles: Array<number>;
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
};

