/*
 * action 类型
 */

export const CHANGE_FILTER = 'CHANGE_FILTER';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function changeFilter(text) {
  return { type: CHANGE_FILTER, text }
};
