/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdatePermissionDto = {
    /**
     * 权限名称
     */
    name?: string;
    /**
     * 权限类型
     */
    type?: UpdatePermissionDto.type;
    /**
     * 父级权限ID
     */
    parentId?: number;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 菜单名称
     */
    menuName?: string;
    /**
     * 页面名称
     */
    pageName?: string;
    /**
     * 页面目录
     */
    pageDir?: string;
    /**
     * 页面路径
     */
    pagePath?: string;
    /**
     * 排序
     */
    sort?: number;
    /**
     * 状态
     */
    status?: boolean;
    /**
     * 权限ID
     */
    id: number;
};
export namespace UpdatePermissionDto {
    /**
     * 权限类型
     */
    export enum type {
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

