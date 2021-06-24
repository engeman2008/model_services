"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNulls = exports.isEmpty = exports.deepCopy = void 0;
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
const deepCopy = (target) => {
    if (target === null) {
        return target;
    }
    if (target instanceof Date) {
        return new Date(target.getTime());
    }
    if (Array.isArray(target)) {
        const cp = [];
        target.forEach((v) => {
            cp.push(v);
        });
        return cp.map((n) => exports.deepCopy(n));
    }
    if (typeof target === 'object' && target !== {}) {
        const cp = Object.assign({}, target);
        Object.keys(cp).forEach((k) => {
            cp[k] = exports.deepCopy(cp[k]);
        });
        return cp;
    }
    return target;
};
exports.deepCopy = deepCopy;
const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;
exports.isEmpty = isEmpty;
function removeNulls(obj) {
    if (obj === null) {
        return undefined;
    }
    if (typeof obj === 'object') {
        for (const key in obj) {
            obj[key] = removeNulls(obj[key]);
        }
    }
    return obj;
}
exports.removeNulls = removeNulls;
