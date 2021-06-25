"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deltas = exports.newModelData = void 0;
exports.newModelData = {
    name: 'Test Model',
    entities: [
        {
            name: 'Person',
            attributes: [
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'hairColor',
                    type: 'string',
                },
            ],
        },
        {
            name: 'Company',
            attributes: [
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'country',
                    type: 'string',
                },
            ],
        },
        {
            name: 'WebSite',
            attributes: [
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'url',
                    type: 'string',
                },
            ],
        },
    ],
    associations: [
        {
            name: 'worksFor',
            source: 'Person',
            target: 'Company',
        },
        {
            name: 'hasSite',
            source: 'Person',
            target: 'WebSite',
        },
    ],
};
exports.deltas = [
    { op: 'remove', path: '/entities/1' },
    { op: 'replace', path: '/entities/2/attributes/0/name', value: 'not name' },
    { op: 'add', path: '/entities', value: [{ name: 'NewEntity' }, { name: 'Entity two', attributes: [{ name: 'weight', type: 'int' }, { name: 'height', type: 'int' }] }] },
];
