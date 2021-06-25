"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.deepCopy = void 0;
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
